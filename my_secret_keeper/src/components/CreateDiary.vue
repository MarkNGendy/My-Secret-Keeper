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
        <v-btn
          class="mx-10 ml-10 mt-4"
          large
          dark
          fab
          color="cyan"
          v-on="on"
        >
          <v-icon large class=""> mdi-pencil </v-icon>
        </v-btn>
      </template>

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

            <v-btn flat @click="submit" class="success mx-0 mt-3" style="font-weight:bold">Add Diary</v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import format from 'date-fns/format'
import DiaryRepository from "../data/diary/repository/diary_repository.vue"
export default {
  data() {
    return {
      title: "",
      content: "",
      date: null,
      menu: false,
      dialog: false
    };
  },
  methods: {
    async submit() {
      console.log(this.title,this.catagory, this.content, this.date);
      var response = await DiaryRepository.methods.createDiary(this.title,this.content, this.date);
      if(response === "Diary Created successfully.") {
        this.dialog = false;
        this.title = "";
        this.content = "";
        this.date = null;   
        await DiaryRepository.methods.retrieveDiaries();

      } else {
        alert(response);
      }
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
