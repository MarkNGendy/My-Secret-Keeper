<template>
    <div >
        <v-content>
        <v-card elevation="10" width="500" height="450" class="mx-auto mt-9">
            <v-card-title class="blue--text accent-5 my-5 py-3 "   style="font-size:40px ;font-weight:bold" >Sign Up</v-card-title>
            <v-divider></v-divider>
            <v-card-text>
            <v-text-field v-model="username" label="Username" prepend-icon="mdi-account-circle"/>
            <v-text-field v-model="email" label="Email" prepend-icon="mdi-mail"/>
            <v-text-field v-model="password" label="Password" :type="showPassword ? 'text' : 'password'" prepend-icon="mdi-lock" :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'" @click:append="showPassword = !showPassword"/> 
            <v-text-field v-model="confirmPassword" label="Confirm Password" :type="showConfirmPassword ? 'text' : 'password'" prepend-icon="mdi-lock" :append-icon="showConfirmPassword ? 'mdi-eye' : 'mdi-eye-off'" @click:append="showConfirmPassword = !showConfirmPassword"/>
            </v-card-text>

            <v-divider></v-divider>
                
            <v-card-actions>
            <v-btn to="/" class="v-card__actions" color="success"><v-icon large left>mdi-arrow-left-bold</v-icon></v-btn>
                <v-spacer></v-spacer>
            <v-btn class="v-card__actions" @click="register()" color="success">Register</v-btn>
            </v-card-actions>
        </v-card>
        </v-content>
  </div>
</template>
<script>
import UserRepository from "../data/user/repository/user_repository.vue"
export default {
    name:'Register',
    data(){
        return{
            showPassword:false,
            showConfirmPassword:false,
            email: "",
            password: "",
            username: "", 
            confirmPassword: ""
        }
    },
    methods:{
        async register(){
     var response = await UserRepository.methods.signUp(this.email, this.password, this.confirmPassword, this.username);
     if(response === this.email) {
        this.$router.push({
          name: "Home",
        });
      } else {
        alert(response);
        return this.error === "";
      }

    }
    }
}
</script>

<style >
.v-card__actions {
  align-items: center;
  display: flex;
  padding: 12px;
}
</style>