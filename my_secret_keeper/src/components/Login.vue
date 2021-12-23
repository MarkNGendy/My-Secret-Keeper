<template>
  <div>
    <v-content>
      <v-card elevation="10" width="500" height="320" class="mx-auto mt-9">
        <v-card-title  class="blue--text accent-5 my-5 py-3 "   style="font-size:40px ;font-weight:bold">Login</v-card-title
        >
        <v-divider></v-divider>
        <v-card-text>
          <v-text-field :rules="Rules" v-model="email" label="Email" prepend-icon="mdi-account-circle" />
          <v-text-field
           :rules="Rules"
            v-model="password"
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
          <v-btn class="v-card__actions" @click="login()" color="success">Login <v-icon right>mdi-login-variant</v-icon></v-btn
          >
        </v-card-actions>
      </v-card>
    </v-content>
  </div>
</template>
<script>
import UserRepository from "../data/user/repository/user_repository.vue"
export default {
  name: "Login",
  data() {
    return {
      showPassword: false,
      email: "",
      password: "",
      Rules:[
               (v) => !!v || "This field is required"
            ],
    };
  },
  methods:{
    async login() {
     console.log(this.email);
     var response = await UserRepository.methods.signIn(this.email, this.password);
     console.log(response);
     if(response === this.email) {
        this.$router.push({
          name: "Home",
        });
      } else {
        alert(response);
        return this.error === "";
      }
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
