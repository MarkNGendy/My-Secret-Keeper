<template>
<nav>
    <v-toolbar app color="blue" dark>
      <v-toolbar-title style="font-weight:bold;font-size:25px">My Secret Keeper</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn rounded text @click= "$router.push('/home')">
          Diaries
      </v-btn>
      <v-btn rounded text @click= "$router.push('/categories')" >
          Categories
      </v-btn>
      <CreateCategory></CreateCategory>
      <v-btn rounded text @click= "$router.push('/templates')">
          Templates
      </v-btn>
      <CreateTemplate></CreateTemplate>
      <v-btn @click="logout" rounded text>Logout<v-icon right>mdi-arrow-right-bold-box-outline</v-icon></v-btn>
    </v-toolbar>
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