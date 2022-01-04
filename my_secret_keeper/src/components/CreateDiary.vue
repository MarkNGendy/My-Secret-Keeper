<template>
  <div>
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          class="mx-10 ml-10 mt-4"
          large
          dark
          fab
          color="cyan"
          v-bind="attrs"
          v-on="on"
        >
          <v-icon large class=""> mdi-pencil </v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          Create new diary
        </v-card-title>
        <v-btn flat @click="openCreateDiary" class="success ma-4" style="font-weight:bold">Create Diary from scratch</v-btn>
        <v-btn flat @click="fetchTemplate" class="info ma-4" style="font-weight:bold">Choose from my Templates</v-btn>
      </v-card>
    </v-dialog>

    <v-dialog v-model="customDiary" width="500">
      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          Create new diary
        </v-card-title>
        <v-card-text>
          <v-form class="px-3">
            <v-text-field
              v-model="title"
              label="Title"
              prepend-icon="mdi-folder"
            ></v-text-field>
            <v-combobox
              v-model="category"
              label="Category"
              prepend-icon="mdi-folder"
              :items="categories"
            ></v-combobox>
            <v-textarea
              v-model="content"
              label="Diary"
              prepend-icon="mdi-notebook-edit-outline"
            ></v-textarea>
            <v-row justify="center">
              <v-date-picker
                v-model="date"
                :allowed-dates="allowedDates"
                class="mt-4"
                min="2016-06-15"
                max="2030-03-20"
                @change="menu=false"
              ></v-date-picker>
            </v-row>
            <v-spacer></v-spacer>
            <v-btn flat @click="submit" class="success mx-0 mt-3" style="font-weight:bold">Add Diary</v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>

    <v-dialog v-model="template" width="500">
      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          Choose Custom Template
        </v-card-title>
        <v-list>
            <v-list-item-group>
                <v-list-item  @click="set(temp)" v-for="temp in templates" :key="temp.name">
                    <v-list-item-content>
                      <v-list-item-title v-text="temp.name"></v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list-item-group>
        </v-list>
      </v-card>
    </v-dialog>

    <v-dialog v-model="answer" width="500">
      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          Create Diary From Template
        </v-card-title>
         <v-card-text>
          <v-form class="px-3">
            <v-text-field
              v-model="title"
              label="Title"
              prepend-icon="mdi-folder"
            ></v-text-field>
            <v-combobox
              v-model="category"
              label="Category"
              prepend-icon="mdi-folder"
              :items="categories"
            ></v-combobox>
            <v-textarea
              v-model="content"
              label="Diary"
              prepend-icon="mdi-notebook-edit-outline"
            ></v-textarea>
            
            <v-row justify="center">
              <v-date-picker
                v-model="date"
                :allowed-dates="allowedDates"
                class="mt-4"
                min="2016-06-15"
                max="2030-03-20"
                @change="menu=false"
              ></v-date-picker>
            </v-row>
            <v-spacer></v-spacer>
            <v-btn flat @click="submit" class="success mx-0 mt-3" style="font-weight:bold">Add Diary</v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import CategoryRepository from "../data/category/repository/category_repository.vue"
import format from 'date-fns/format'
import DiaryRepository from "../data/diary/repository/diary_repository.vue"
import TemplateRepository from "../data/template/repository/template_repository.vue";
export default {
  data() {
    return {
      title: "",
      content: "",
      date: null,
      menu: false,
      dialog: false,
      customDiary:false,
      category:"",
      template:false,
      answer:false,
      categoriesList: [],
      templates: [],
      Questions:[],
      categories:[],
    };
  },
  methods: {
    async submit() {
      console.log(this.title,this.category, this.content, this.date);
      var index = this.categories.indexOf(this.category);
      var categoryId;
      if(index != -1) {
        categoryId = this.categoriesList[index].id;
      } else {
        categoryId = 0;
      }
      console.log(categoryId);
      var response = await DiaryRepository.methods.createDiary(this.title,this.content, this.date, categoryId);
      if(response === "Diary Created successfully.") {
        this.dialog = false;
        this.customDiary=false;
        this.template=false;
        this.answer= false;
        this.title = "";
        this.category = "";
        this.content = "";
        this.date = null;
        this.$router.go();
      } else {
        alert(response);
      }
    },
    async fetchTemplate() {
    this.template=!this.template
    this.templates = await TemplateRepository.methods.retrieveTemplates();
    //this.curTemplate = this.templates[0];
    //this.Questions = this.curTemplate.questions;
  },
    async openCreateDiary() {
      this.content = ""
      this.categoriesList = await CategoryRepository.methods.retrieveCategories();
      for (let index = 0; index < this.categoriesList.length; index++) {
        this.categories.push(this.categoriesList[index].name);
      }
      this.customDiary = !this.customDiary;
    },
    set(temp){
      this.content = ""
       for(let i=0; i<this.templates.length ; i++){
         if(this.templates[i].name === temp.name){
           this.Questions = this.templates[i].questions;
         }
       }
       for (let i = 0; i < this.Questions.length; i++) {
          this.content += this.Questions[i] + "\n\n";
       }   
      this.answer=!this.answer
    },
    methods: {
      allowedDates: (val) => parseInt(val.split("-")[2], 10) % 2 === 0,
    },
  },
  computed: {
    formattedDate () {
      console.log(this.date)
      return this.due ? format(this.due, 'Do MMM YYYY') : ''
    }
  }
};
</script>
