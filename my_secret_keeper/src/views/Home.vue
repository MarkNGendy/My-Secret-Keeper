<template>
  <div>
    <HomeHeader></HomeHeader>
    <h3 class="subheading grey--text ml-10 mt-5">Home</h3>
    <v-btn
      class="mx-10 ml-10 mt-4"
      small
      dark
      fab
      color="cyan"
    >
      <v-icon class="">
        mdi-pencil
      </v-icon>
    </v-btn>
    <v-container class="my-5">

      <v-card flat v-for="diary in diaries" :key="diary.title" class="mx-auto">
        <v-card-text>
          <v-app-bar
            flat
            color="rgba(0, 0, 0, 0)"
          >

            <v-toolbar-title class="text-h6 black--text pl-0">
              {{diary.title}}
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn
              color="black"
              icon
            >
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </v-app-bar>
          <p>content</p>
          <div class="text--primary">
            {{diary.content}}
          </div>
        </v-card-text>
        <v-divider></v-divider>
      </v-card>
      
    </v-container>
  </div>
</template>

<script>
import HomeHeader from "../components/HomeHeader.vue";
export default {
  data(){
    return{
      diaries:[
        {title:'d1', date:'date1', content:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur veniam voluptatem ad hic accusantium mollitia expedita neque delectus quo, dolor fuga optio recusandae culpa maiores, at accusamus deserunt inventore et'},
        {title:'d2', date:'date2', content:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur veniam voluptatem ad hic accusantium mollitia expedita neque delectus quo, dolor fuga optio recusandae culpa maiores, at accusamus deserunt inventore et'},
        {title:'d3', date:'date3', content:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur veniam voluptatem ad hic accusantium mollitia expedita neque delectus quo, dolor fuga optio recusandae culpa maiores, at accusamus deserunt inventore et'},
        {title:'d4', date:'date4', content:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur veniam voluptatem ad hic accusantium mollitia expedita neque delectus quo, dolor fuga optio recusandae culpa maiores, at accusamus deserunt inventore et'}
      ]
    }

  },
  name: "Home",
  components: {
    HomeHeader
  },
};
</script>
