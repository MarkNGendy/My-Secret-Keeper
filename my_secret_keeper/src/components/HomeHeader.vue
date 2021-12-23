<template>
    <v-app-bar app color="blue" dark>
      <v-toolbar-title style="font-weight:bold;font-size:25px">My Secret Keeper</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn to="/" rounded text>Logout<v-icon right>mdi-arrow-right-bold-box-outline</v-icon></v-btn>
    </v-app-bar>
</template>

<script>
export default {
  name: "HomeHeader",
};
</script>
arrow-right-bold-box-outline