<template>
    <div>
  <v-dialog v-model="view" width="500">
        <template v-slot:activator="{ on, attrs }">
            <v-card flat v-for="(template,index) in templates" 
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
                    {{template.name}}
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
                    <v-btn
                        color="primary"
                        text
                        @click="deleteTemplate"
                    >
                        Delete
                    </v-btn>
                  </v-list-item>
              </v-list>
            </v-menu>
                </v-app-bar>
                </v-card-text>
                <v-divider></v-divider>
            </v-card>
        </template>


        <v-card>
            <v-card-title class="text-h5 grey lighten-2">
                {{curTemplate.name}}
            </v-card-title>
            <v-card-text>
            {{curTemplate.questions}}
            </v-card-text>
        </v-card>
    </v-dialog>
    </div>
</template>

<script>
import TemplateRepository from "../data/template/repository/template_repository.vue";
import { getAuth } from 'firebase/auth'

export default {
  data() {
    return {
        ind:0,
        view: false,
      templates: [],
      curTemplate:null
    };
  },
  methods: {
      setCurrent(i){
        this.curTemplate=this.templates[i];
      },
           async deleteTemplate(){
       //TO DOOOOOOOOOOOOOOO
      },
  },
  async mounted() {
    getAuth().onAuthStateChanged(user => {
        if (user) {
          TemplateRepository.methods.retrieveTemplates().then((data) => {
            this.templates = data; 
            this.curTemplate = this.templates[0];
          });
        }
    });
  },
  created: async function() {
     this.templates = await TemplateRepository.methods.retrieveTemplates();
     this.curTemplate=this.templates[0];
  },
};
</script>