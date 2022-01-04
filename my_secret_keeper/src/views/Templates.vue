<template>
  <div >
    <HomeHeader></HomeHeader>
    <h1  style="font-weight:bold;font-size:55px;text-align: center" class="subheading white--text ml-10 mt-5"> My Templates</h1>
    <v-container class="my-5">
        <v-flex class="mt-4 mb-3">
          <ViewTemplate key="viewTemplateKey"/>
        </v-flex>       </v-container>
  </div>
</template>
<script>
import HomeHeader from "../components/HomeHeader.vue";
import ViewTemplate from '../components/ViewTemplate.vue';

export default {
  name: "Templates",
   data(){
    return{
      viewTemplateKey: 0,
    };
  },
  components: {
   HomeHeader,
   ViewTemplate,
  },
};
</script>