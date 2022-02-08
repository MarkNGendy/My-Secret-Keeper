<template>
<div>
    <div>
      <v-combobox
              class="mb-4"
              v-model="category"
              label="Category"
              prepend-icon="mdi-folder"
              :items="categories"
      ></v-combobox>
      <div class="mb-4">
        <v-btn class="mx-4" dark fab color="cyan" @click="searchByCategory" >
          <v-icon large > mdi-magnify </v-icon>
          </v-btn>
          <v-btn dark fab color="cyan" @click="Clear"
          ><v-icon large >mdi-autorenew</v-icon>
          </v-btn>
      </div>
    </div>
    <div>  
      <v-dialog v-model="showCat" width="500">
      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          Choose Category
        </v-card-title>
        <v-list>
            <v-list-item-group>
                <v-list-item @click="setCat(cat)" v-for="cat in categoriesList" :key="cat.name">
                    <v-list-item-content>
                      <v-list-item-title v-text="cat.name"></v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list-item-group>
        </v-list>
      </v-card>
    </v-dialog>
  <v-dialog v-model="view" width="500">
        <template v-slot:activator="{ on, attrs }">
         <v-card flat v-for="(diary,index) in diaries" 
         :key="index" 
         class="mx-auto" 
         v-bind="attrs"
         v-on="on"
         @click="setCurrent(index)">
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
               @click="setCurrent(index)"
            >
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
              </template>
              <v-list>
                  <v-list-item>
                    <EditDiary :diary="diary"/>
                  </v-list-item>
                  <v-list-item>
                    <v-btn
                        color="primary"
                        text
                        @click="deleteDiary"
                    >
                        Delete
                    </v-btn>
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
        <v-card-text>
            {{curDiary.category_id}}
        </v-card-text>
        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <EditDiary :diary="curDiary"/>
          <v-btn
            color="primary"
            text
            @click="deleteDiary"
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
</div>
</template>

<script>
import CategoryRepository from "../data/category/repository/category_repository.vue"
import DiaryRepository from "../data/diary/repository/diary_repository.vue";
import EditDiary from '../components/EditDiary.vue';
import { getAuth } from 'firebase/auth'
export default {
  data() {
    return {
        ind:0,
        view: false,
        diaries:[],
      curDiary:null,
      categories:[],
      categoriesList: [],
      category:"",
    };
  },
  methods: {
     async searchByCategory(){
      var index = this.categories.indexOf(this.category);
      this.diaries = await DiaryRepository.methods.retrieveDiariesByCategory(this.categoriesList[index].id);
      this.curDiary = this.diaries[0];
    },
    async Clear(){
      //this.diaries=null;
      this.diaries = await DiaryRepository.methods.retrieveDiaries();
       for (let index = 0; index < this.diaries.length; index++) {
        console.log(this.diaries[index]);
      }
    },
      setCurrent(i){
        this.curDiary=this.diaries[i];
      },
      async deleteDiary(){
        var response = await DiaryRepository.methods.deleteDiary(this.curDiary, this.curDiary.title, this.curDiary.body, this.curDiary.date);
        if(response === "Diary is deleted successfully.") {
          this.view = false;
          this.diaries = await DiaryRepository.methods.retrieveDiaries();
          this.curDiary = this.diaries[0];
        } else {
          alert(response);
        }
      },
  },
  created: async function() {
    this.categoriesList = await CategoryRepository.methods.retrieveCategories();
    for (let index = 0; index < this.categoriesList.length; index++) {
        this.categories.push(this.categoriesList[index].name);
      }
    this.diaries = await DiaryRepository.methods.retrieveDiaries();
    this.curDiary = this.diaries[0];
  },
 
  async mounted() {
      getAuth().onAuthStateChanged(user => {
        if (user) {          
           CategoryRepository.methods.retrieveCategories().then((data) => {
             this.categoriesList=data;
             for (let index = 0; index < this.categoriesList.length; index++) {
            this.categories.push(this.categoriesList[index].name);
           }
           });
          DiaryRepository.methods.retrieveDiaries().then((data) => {
            this.diaries = data; 
            this.curDiary = this.diaries[0];
          });
        }
    });
  },
  components: {
    EditDiary
  },
};
</script>