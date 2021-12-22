<script>
import UserFirebaseManager from '../firebase/user_firebase_manager.vue'
export default {
    name: "user-repository",
    methods: {
        async signIn(email, password) {
            var response = await UserFirebaseManager.methods.signIn(email, password);
            console.log(response);
            return (response.user == null);
        },
        async signUp(email, password, confirmPassword) {
            //console.log(email);
            if(confirmPassword == null) {
                return false;
            }
            var response = await UserFirebaseManager.methods.signUp(email, password);
            console.log(response);
            return (response.user == null);
        },
        getCurrentUserId() {
            return UserFirebaseManager.methods.getCurrentUser();
        }
    }
}
</script>