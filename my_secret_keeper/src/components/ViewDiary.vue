<template>
    <div>
  <v-dialog v-model="view" width="500">
        <template v-slot:activator="{ on, attrs }">
         <v-card flat v-for="(diary,index) in diaries" 
         :key="index" 
         class="mx-auto" 
         v-bind="attrs"
         v-on="on"
         @click="setCurrent(diary.i-1)">
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
            {{diary.body}}
          </div>
        </v-card-text>
        <v-divider></v-divider>
        </v-card>
        </template>
        <v-card>
        <v-card-title class="text-h5 grey lighten-2">
            {{curDiary.title}}
        </v-card-title>

        <v-card-text>
            {{curDiary.body}}
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="view = false"
          >
            Edit
          </v-btn>
          <v-btn
            color="primary"
            text
            @click="view = false"
          >
            Delete
          </v-btn>
          <v-btn
            color="primary"
            text
            @click="view = false"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    </div>
</template>

<script>
import DiaryRepository from "../data/diary/repository/diary_repository.vue"
export default {
  data() {
    return {
        ind:0,
        view: false,
        diaries:[],
      curDiary:null
    };
  },
  methods: {
      setCurrent(i){
          this.curDiary=this.diaries[i];
      }
  },
  created: async function() {
    this.diaries = await DiaryRepository.methods.retrieveDiaries();
    this.curDiary = this.diaries[0];
    console.log(this.diaries.length);
  }
};
</script>