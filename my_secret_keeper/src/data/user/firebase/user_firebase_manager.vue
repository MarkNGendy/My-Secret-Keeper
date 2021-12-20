<script>
import { signInWithEmailAndPassword } from 'firebase/auth'
import { getAuth } from 'firebase/auth'
import { createUserWithEmailAndPassword } from 'firebase/auth'
export default {
    name: 'user_firebase_manager',
    methods: {
        async signIn(email, password) {
            var response = await signInWithEmailAndPassword(getAuth(), email, password);
            return response;
        },
        async signUp(email, password) {
            console.log(email);
            console.log(password);
            var response = await createUserWithEmailAndPassword(getAuth(), email, password);
            console.log(response);
            return response;
        },
        getCurrentUser()  { 
            return getAuth().currentUser;
        }
    }
}
</script>
