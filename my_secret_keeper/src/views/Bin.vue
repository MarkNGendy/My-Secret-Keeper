<template>
  <div >
    <HomeHeader></HomeHeader>
    <h1  style="font-weight:bold;font-size:55px;text-align: center" class="subheading white--text ml-10 mt-5"> Trash</h1>
    <v-container class="my-5">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur veniam voluptatem ad hic accusantium mollitia expedita neque delectus quo, dolor fuga optio recusandae culpa maiores, at accusamus deserunt inventore et!
    </v-container>
  </div>
</template>
<script>
import HomeHeader from "../components/HomeHeader.vue";

export default {
  name: "Bin",
  components: {
   HomeHeader,
  },
};
</script>