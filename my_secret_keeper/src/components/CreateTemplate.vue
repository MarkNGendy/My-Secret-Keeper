<template>
    <div>
        <v-dialog v-model="dialog" width="500">
            <template v-slot:activator="{ on, attrs }">
                <v-btn rounded text class="mx-5 ml-5" v-bind="attrs" v-on="on">
                Templates
                </v-btn>
            </template>
            <v-card>
                <v-card-title class="text-h5 grey lighten-2">
                    Create Your Own Custom Template
                </v-card-title>
                <v-card-text>
                    <v-form class="px-3">
                         <v-text-field v-model="Questions[0]"
                            label="Question 1"
                        ></v-text-field>
                         <v-text-field v-model="Questions[1]"
                            label="Question 2"
                        ></v-text-field>
                         <v-text-field v-model="Questions[2]"
                            label="Question 3"
                        ></v-text-field>
                         <v-text-field v-model="Questions[3]"
                            label="Question 4"
                        ></v-text-field>
                        <v-btn   @click="create" class="success mx-0 mt-6" style="font-weight:bold">Add Template</v-btn>
                    </v-form>
                 </v-card-text>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
export default {
    name: "CreateTemplate",
    data() {
    return {
      dialog: false, 
      Questions :[],
    };
  },
   methods: {
      create(){
          console.warn(this.Questions.length)
          for (let i = 0; i < this.Questions.length; i++) {
              console.warn(this.Questions[i])
            }
          
      },
    },
}
</script>
