<template>
<nav>
    <v-toolbar app color="blue" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer" class="white--text"></v-app-bar-nav-icon>
      <v-toolbar-title style="font-weight:bold;font-size:25px">My Secret Keeper</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn to="/" rounded text>Logout<v-icon right>mdi-arrow-right-bold-box-outline</v-icon></v-btn>
    </v-toolbar>

    <v-navigation-drawer app v-model="drawer" class="cyan lighten-4">
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
export default {
  data(){
    return{
      drawer:false,
       links: [
        { icon: 'mdi-note', text: 'Diaries', route: '/home' },
        { icon: 'mdi-archive', text: 'Archive', route: '/archive' },
        { icon: 'mdi-delete', text: 'Bin', route: '/bin' },
      ]
    }
  },
  name: "HomeHeader",
};
</script>
arrow-right-bold-box-outline