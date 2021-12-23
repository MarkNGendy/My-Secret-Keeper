<script>
import UserFirebaseManager from '../firebase/user_firebase_manager.vue'
export default {
    name: "user-repository",
    methods: {
        async signIn(email, password) {
            if(email === "") {
                return "Please enter a valid email";
            }
            if(password === "") {
                return "Please enter a password";
            }
            try {
                var response = await UserFirebaseManager.methods.signIn(email, password);
                if(response.user != null) {
                    return email;
                }
                return "You have entered wrong email or password";
            } catch (e) {
                return "Please enter a valid email and password";
            } 
        },
        async signUp(email, password, confirmPassword, userName) {
            if(userName === "") {
                return "Please enter a valid user name";
            }
            if(email === "") {
                return "Please enter a valid email";
            }
            if(password === "") {
                return "Please enter a password";
            }
            if(password !== confirmPassword) {
                return "Passwords are not matching";
            }
            
            try{
            var response = await UserFirebaseManager.methods.signUp(email, password);
                if(response.user != null) {
                    await UserFirebaseManager.methods.setUserName(userName);
                    return email;
                }
                return "You have entered wrong email or password";
            } catch(e) {
                console.log(e);
                return "Please enter a valid email and password";
            }
        },
        getCurrentUserId() {
            return UserFirebaseManager.methods.getCurrentUser();
        },
    }
}
</script>