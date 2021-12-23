<template>
  <div>
    <HomeHeader></HomeHeader>
    <h1  style="font-weight:bold;font-size:55px;text-align: center" class="subheading white--text ml-10 mt-5"> My Diaries</h1>
    <v-divider></v-divider>
    <v-flex class="mt-4 mb-3">
      <CreateDiary />
    </v-flex>
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
            <v-menu
              top
              :offset-x="offset"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
              color="black"
              icon
               v-bind="attrs"
               v-on="on"
            >
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
              </template>

              <v-list>
                <v-list-item
                  v-for="(option, index) in options"
                  :key="index"
                >
                  <v-list-item-title>{{ option.opt }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
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
import CreateDiary from "../components/CreateDiary.vue";
export default {
  
  data(){
    return{
      diaries:[
        {title:'D1', date:'date1', content:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur veniam voluptatem ad hic accusantium mollitia expedita neque delectus quo, dolor fuga optio recusandae culpa maiores, at accusamus deserunt inventore et'},
        {title:'D2', date:'date2', content:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur veniam voluptatem ad hic accusantium mollitia expedita neque delectus quo, dolor fuga optio recusandae culpa maiores, at accusamus deserunt inventore et'},
        {title:'D3', date:'date3', content:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur veniam voluptatem ad hic accusantium mollitia expedita neque delectus quo, dolor fuga optio recusandae culpa maiores, at accusamus deserunt inventore et'},
        {title:'D4', date:'date4', content:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur veniam voluptatem ad hic accusantium mollitia expedita neque delectus quo, dolor fuga optio recusandae culpa maiores, at accusamus deserunt inventore et'}
      ],
      offset:true,
      options:[
        {opt: 'Delete'},
        {opt: 'Archive'}
      ]
    }

  },
  name: "Home",
  components: {
    HomeHeader,
    CreateDiary
  },
};
</script>
