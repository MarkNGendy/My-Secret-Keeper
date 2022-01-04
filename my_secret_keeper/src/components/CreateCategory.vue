<template>
    <div>
        <v-dialog v-model="dialog" width="500">
            <template v-slot:activator="{ on, attrs }">
                <v-btn rounded text  v-bind="attrs" v-on="on">
                Create Category
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
import CategoryRepository from "../data/category/repository/category_repository.vue"
export default {
    name: "CreateCategory",
    data() {
    return {
      dialog: false, 
      categoryName:"",
    };
  },
   methods: {
      async create() {
      console.log(this.categoryName);
      var response = await CategoryRepository.methods.createCategory(this.categoryName);
      if(response === "Category Created successfully.") {
        this.dialog = false;
        this.$router.go();
      } else {
          alert(response);
      }
    },
    },
}
</script>
