<template>
<div>
  <v-form>
    <v-container>
      <v-row>
        <v-col cols="12" md="3">
          <v-combobox
              v-model="category"
              label="Search By Category"
              prepend-icon="mdi-folder"
              :items="categories"
          ></v-combobox>
        </v-col>
         <v-col>
          <v-btn small class="mt-4" dark fab color="cyan" @click="searchByCategory" >
          <v-icon medium > mdi-magnify </v-icon>
          </v-btn>
        </v-col>
        <v-col cols="12" md="3">
          <v-text-field
            v-model="title"
            label="Search By Title"
          ></v-text-field>
        </v-col>
        <v-col>
          <v-btn small class="mt-4" dark fab color="cyan" @click="searchByTitle" >
          <v-icon medium > mdi-magnify </v-icon>
          </v-btn>
        </v-col>
        <v-col>
             <v-btn medium dark fab color="cyan" @click="Clear"
          ><v-icon large >mdi-autorenew</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
    <div class="mb-4">
          <v-btn class="mr-4" dark color="red" @click="sortAsc"
          >Sort Asc
          </v-btn>
          <v-btn dark  color="red" @click="sortDesc"
          >Sort Desc
          </v-btn>
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
      showCat:false,
      offset:true,
      curDiary:null,
      categories:[],
      title:"",
      categoriesList: [],
      category:"",
    };
  },
  methods: {
     async searchByCategory(){
      var index = this.categories.indexOf(this.category);
      var fetchedDiaries = await DiaryRepository.methods.retrieveDiariesByCategory(this.categoriesList[index].id);
      this.diaries= fetchedDiaries;
      this.curDiary = this.diaries[0];
    },
    async searchByTitle(){
      this.diaries = await DiaryRepository.methods.retrieveDiaries();
      console.log(this.diaries.length);
      var filteredDiaries=[];
      for(let index=0 ;index < this.diaries.length; index++){
        if(this.title === this.diaries[index].title){
          filteredDiaries.push(this.diaries[index]);
        }
      }
      this.diaries=filteredDiaries;
      this.curDiary=this.diaries[0];
    },
    sortAsc(){
      this.diaries = DiaryRepository.methods.sortAscending(this.diaries);
    },
    sortDesc(){
      this.diaries = DiaryRepository.methods.sortDescending(this.diaries);
    },
    async Clear(){
      this.$router.go();
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