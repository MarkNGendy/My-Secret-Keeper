<template>
  <div>
    <HomeHeader></HomeHeader>
    <h1  style="font-weight:bold;font-size:55px;text-align: center" class="subheading white--text ml-10 mt-5"> My Diaries</h1>
    <v-divider></v-divider>
    <v-flex class="mt-4 mb-3">
      <CreateDiary />
    </v-flex>
    <v-container class="my-5">
      <v-flex class="mt-4 mb-3">
        <ViewDiary />
      </v-flex>
    </v-container>
  </div>
</template>

<script>
import HomeHeader from "../components/HomeHeader.vue";
import CreateDiary from "../components/CreateDiary.vue";
import ViewDiary from '../components/ViewDiary.vue';
export default {
  
  data(){
    return{
      offset:true,
    }

  },
  name: "Home",
  components: {
    HomeHeader,
    CreateDiary,
    ViewDiary
  },
};
</script>
