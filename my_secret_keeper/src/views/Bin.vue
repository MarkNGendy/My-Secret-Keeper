<template>
  <div >
    <HomeHeader></HomeHeader>
    <h1  style="font-weight:bold;font-size:55px;text-align: center" class="subheading white--text ml-10 mt-5"> My Categories</h1>
    <v-container class="my-5">
        <v-flex class="mt-4 mb-3">
          <ViewCategory key="viewCategoryKey"/>
        </v-flex>    
      </v-container>
  </div>
</template>
<script>
import HomeHeader from "../components/HomeHeader.vue";
import ViewCategory from '../components/ViewCategory.vue';

export default {
  name: "Bin",
   data(){
    return{
      viewCategoryKey: 0,
    };
  },
  components: {
   HomeHeader,
   ViewCategory,
  },
};
</script>