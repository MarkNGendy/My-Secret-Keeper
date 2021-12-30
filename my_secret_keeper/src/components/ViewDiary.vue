<template>
    <div>
  <v-dialog>
        <template v-slot:activator="{ on, attrs }">
         <v-card flat v-for="(diary,index) in diaries" 
         :key="index" 
         class="mx-auto" 
         v-bind="attrs"
         v-on="on"
         @click="ind=diary.i">
        <v-card-text>
          <v-app-bar
            flat
            color="rgba(0, 0, 0, 0)">
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
                <v-list-item>
                  <v-list-item-title>Edit</v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title>Delete</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-app-bar>
          <div class="text--primary">
            {{diary.content}}
          </div>
        </v-card-text>
        <v-divider></v-divider>
        </v-card>
        </template>
        <v-card>
            <v-card-title class="text-h5 grey lighten-2">
                {{ diaries[ind-1].title }}
            </v-card-title>
        </v-card>
    </v-dialog>
    </div>
</template>

<script>
export default {
  data() {
    return {
        ind:0,
        diaries:[
        {title:'D1', i:1,date:'date1', content:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur veniam voluptatem ad hic accusantium mollitia expedita neque delectus quo, dolor fuga optio recusandae culpa maiores, at accusamus deserunt inventore et'},
        {title:'D2', i:2,date:'date2', content:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur veniam voluptatem ad hic accusantium mollitia expedita neque delectus quo, dolor fuga optio recusandae culpa maiores, at accusamus deserunt inventore et'},
        {title:'D3', i:3,date:'date3', content:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur veniam voluptatem ad hic accusantium mollitia expedita neque delectus quo, dolor fuga optio recusandae culpa maiores, at accusamus deserunt inventore et'},
        {title:'D4', i:4,date:'date4', content:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur veniam voluptatem ad hic accusantium mollitia expedita neque delectus quo, dolor fuga optio recusandae culpa maiores, at accusamus deserunt inventore et'}
      ],
    }
  }
}
</script>