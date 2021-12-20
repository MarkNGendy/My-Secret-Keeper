<script>
import user_firebase_manager from '../firebase/user_firebase_manager.vue'
export default {
    name: "user-repository",
    methods: {
        async signIn(email, password) {
            var response = await user_firebase_manager.methods.signIn(email, password);
            console.log(response);
            return (response.getCurrentUser == null);
        },
        async signUp(email, password, confirmPassword) {
            //console.log(email);
            if(confirmPassword == null) {
                return false;
            }
            var response = await user_firebase_manager.methods.signUp(email, password);
            console.log(response);
            return (response.getCurrentUser == null);
        },
    }
}
</script>