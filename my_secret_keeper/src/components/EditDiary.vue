<template>
  <div>
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
            color="primary"
            text
            v-bind="attrs"
            v-on="on"
            @click="set"
        >
            Edit
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          Edit diary
        </v-card-title>
        <v-card-text>
          <v-form class="px-3">
            <v-text-field
              v-model="title"
              label="Title"
              prepend-icon="mdi-folder"
            ></v-text-field>

            <v-text-field
              v-model="catagory"
              label="Category"
              prepend-icon="mdi-folder"
            ></v-text-field>


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

            <v-btn flat @click="updateDiary" class="success mx-0 mt-3" style="font-weight:bold">Save</v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import Vue from 'vue';
import DiaryRepository from "../data/diary/repository/diary_repository.vue";
var Diary = new Vue({
     data: {
        body: "",
        category_id: "",
        date: "",
        id: "",
        template_id: "",
        title: "",
        user_id: ""
     }
 })
export default {
    props: {
   diary: Diary
 },
  data() {
    return {
      title: "",
      content: "",
      date: "",
      id: "",
      menu: false,
      dialog: false,      
    };
  },
  methods: {
      set(){
          console.log("EDITING");
          console.log(this.diary);
          this.title=this.diary.title;
          this.content= this.diary.body;
          this.date= this.diary.date;
          this.id = this.diary.id;
      },
      async updateDiary(){
        var response = await DiaryRepository.methods.updateDiary(this.id, this.title, this.content, this.date);
        if(response === "Diary Updated successfully.") {
          this.dialog = false;
          this.$router.go();
        } else {
          alert(response);
        }
      }
  }
};
</script>
