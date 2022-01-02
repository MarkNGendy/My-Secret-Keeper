<template>
    <div>
        <v-dialog v-model="dialog" width="500">
            <template v-slot:activator="{ on, attrs }">
                <v-btn rounded text  v-bind="attrs" v-on="on">
                Categories
                </v-btn>
            </template>
            <v-card>
                <v-card-title class="text-h5 grey lighten-2">
                    Create Category
                </v-card-title>
                <v-card-text>
                    <v-form class="px-3">
                         <v-text-field v-model="categoryName"
                            label="Category Name"
                            prepend-icon="mdi-folder"
                        ></v-text-field>
                        <v-divider></v-divider>
                        <v-btn  @click="create" class="success mx-0 mt-6" style="font-weight:bold">Create</v-btn>
                    </v-form>
                 </v-card-text>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>

export default {
    name: "CreateCategory",
    data() {
    return {
      dialog: false, 
      Questions :[],
      categoryName:"",
    };
  },
   methods: {
      async create() {
      console.log(this.categoryName);
    },
    },
}
</script>
