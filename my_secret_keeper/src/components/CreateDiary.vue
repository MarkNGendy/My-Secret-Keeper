<template>
  <div>
    <v-dialog
      v-model="dialog"
      width="500"
    >
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
         
      <v-icon large class="">
        mdi-pencil
      </v-icon>
    </v-btn>
      </template>

      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          create new diary
        </v-card-title>
        <div>Hello</div>
            <form @submit.prevent="pressed">
                <div class="body">
                <input type="text" v-model="body" placeholder="body">
                </div>
                <div class="diary_title">
                <input type="text" v-model="diary_title" placeholder="diary_title">
                </div>
                <button type="submit">CreateDiary</button>
            </form>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        dialog: false,
      }
    },
  }
</script>
