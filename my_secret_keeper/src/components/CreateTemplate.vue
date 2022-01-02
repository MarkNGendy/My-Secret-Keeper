<template>
    <div>
        <v-dialog v-model="dialog" width="500">
            <template v-slot:activator="{ on, attrs }">
                <v-btn rounded text v-bind="attrs" v-on="on">
                Templates
                </v-btn>
            </template>
            <v-card>
                <v-card-title class="text-h5 grey lighten-2">
                    Create Your Own Custom Template
                </v-card-title>
                <v-card-text>
                    <v-form class="px-3">
                         <v-text-field v-model="templateName"
                            label="Template Name"
                        ></v-text-field>
                         <v-text-field v-model="Questions[l-1]" v-for="l in QuestionsLength" :key="l"
                            label="Question"
                        ></v-text-field>
                        <v-divider></v-divider>
                        <v-btn @click="add" fab small class="info mt-6" style="font-weight:bold"><v-icon>mdi-plus-thick</v-icon></v-btn>
                       <v-spacer></v-spacer>
                        <v-btn   @click="create" class="success mx-0 mt-6" style="font-weight:bold">Add Template</v-btn>
                    </v-form>
                 </v-card-text>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>

import TempleteRepository from "../data/template/repository/template_repository.vue"

export default {
    name: "CreateTemplate",
    data() {
    return {
      dialog: false, 
      Questions :[],
      templateName:"",
      QuestionsLength:1 
    };
  },
   methods: {
      async create() {
      console.log(this.templateName , this.Questions);
      var response = await TempleteRepository.methods.CreateTemplate(this.templateName , this.Questions);
      if(response === "Template Created successfully.") {
        this.$emit('templateCreated');
        this.dialog = false;
        this.templateName = "";
        this.questions = [];
        this.$emit('templeteCreated')
      } else {
        alert(response);
      }
    },
    add(){
        this.QuestionsLength = this.QuestionsLength + 1 ;
    }
    },
}
</script>
