<template>
    <div >
        <v-content>
        <v-card elevation="10" width="500" height="450" class="mx-auto mt-9">
            <v-card-title class="blue--text accent-5 my-5 py-3 "   style="font-size:40px ;font-weight:bold" >Sign Up</v-card-title>
            <v-divider></v-divider>
            <v-card-text>
            <v-text-field label="Username" prepend-icon="mdi-account-circle"/>
            <v-text-field label="Email" prepend-icon="mdi-mail"/>
            <v-text-field label="Password" :type="showPassword ? 'text' : 'password'" prepend-icon="mdi-lock" :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'" @click:append="showPassword = !showPassword"/> 
            <v-text-field label="Confirm Password" :type="showConfirmPassword ? 'text' : 'password'" prepend-icon="mdi-lock" :append-icon="showConfirmPassword ? 'mdi-eye' : 'mdi-eye-off'" @click:append="showConfirmPassword = !showConfirmPassword"/>
            </v-card-text>

            <v-divider></v-divider>
                
            <v-card-actions>
            <v-btn to="/" class="v-card__actions" color="success"><v-icon large left>mdi-arrow-left-bold</v-icon></v-btn>
                <v-spacer></v-spacer>
            <v-btn to="/home" class="v-card__actions" @click="register()" color="success">Register</v-btn>
            </v-card-actions>
        </v-card>
        </v-content>
  </div>
</template>
<script>
export default {
    name:'Register',
    data(){
        return{
            showPassword:false,
            showConfirmPassword:false
        }
    },
    methods:{
        register(){

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