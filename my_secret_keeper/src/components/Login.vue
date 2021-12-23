<template>
  <div>
    <v-content>
      <v-card elevation="10" width="500" height="320" class="mx-auto mt-9">
        <v-card-title  class="blue--text accent-5 my-5 py-3 "   style="font-size:40px ;font-weight:bold">Login</v-card-title
        >
        <v-divider></v-divider>
        <v-card-text>
          <v-text-field label="Username" prepend-icon="mdi-account-circle" />
          <v-text-field
            label="Password"
            :type="showPassword ? 'text' : 'password'"
            prepend-icon="mdi-lock"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
          />
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-btn to="/signup" class="v-card__actions" color="info">Sign Up</v-btn>
          <v-spacer></v-spacer>
          <v-btn to="/home" class="v-card__actions" @click="login()" color="success">Login <v-icon right>mdi-login-variant</v-icon></v-btn
          >
        </v-card-actions>
      </v-card>
    </v-content>
  </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      showPassword: false,
    };
  },
  methods:{
    login(){
     
    }
  },
};
</script>
<style >
.v-card__actions {
  align-items: center;
  display: flex;
  padding: 12px;
}
</style>
