<template>
<nav>
    <v-toolbar app color="blue" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer" class="white--text"></v-app-bar-nav-icon>
      <v-toolbar-title style="font-weight:bold;font-size:25px">My Secret Keeper</v-toolbar-title>
      <v-spacer></v-spacer>
      <CreateCategory></CreateCategory>
      <CreateTemplate></CreateTemplate>
      <v-btn @click="logout" rounded text>Logout<v-icon right>mdi-arrow-right-bold-box-outline</v-icon></v-btn>
    </v-toolbar>

    <v-navigation-drawer app v-model="drawer" class="cyan lighten-4">
      <v-layout column align-center>
        <v-flex class="mt-5">
          <v-avatar size="100">
            <img class="text-lg-center" src="/avatar.png">
          </v-avatar>
          <p class="black--text subheading mt-1">{{ userName }}</p>
        </v-flex>
      </v-layout>
     <v-list>
        <v-list-item-group>
          <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
            <v-list-item-icon>
              <v-icon v-text="link.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="link.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    </nav>
</template>

<script>
import CreateTemplate from '../components/CreateTemplate.vue';
import CreateCategory from '../components/CreateCategory.vue';
import UserRepository from "../data/user/repository/user_repository.vue"
import { getAuth } from 'firebase/auth'

export default {
  data(){
    return{
      userName : getAuth().currentUser.displayName,
      drawer:false,
       links: [
        { icon: 'mdi-note', text: 'Diaries', route: '/home' },
        { icon: 'mdi-folder', text: 'My Templates', route: '/templates' },
        { icon: 'mdi-folder', text: 'My Categories', route: '/categories' },
      ]
    }
  },
  methods: {
    async logout() {
      console.log(this.userName);
      await UserRepository.methods.signOut();
      this.$router.push({
          name: "signin",
        });
    }
  },
  async mounted() {
    getAuth().onAuthStateChanged(user => {
        if (user) {
          this.userName = getAuth().currentUser.displayName;
          this.drawer = false;
          this.links = [
        { icon: 'mdi-note', text: 'Diaries', route: '/home' },
        { icon: 'mdi-folder', text: 'My Templates', route: '/templates' },
        { icon: 'mdi-folder', text: 'My Categories', route: '/categories' },
      ];
        }
    });
  },
  name: "HomeHeader",
  components: {
    CreateTemplate,
    CreateCategory
  },
};
</script>
arrow-right-bold-box-outline