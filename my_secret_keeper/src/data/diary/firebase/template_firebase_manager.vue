<script>
import { collection,getFirestore ,addDoc} from "firebase/firestore";
import { getAuth} from 'firebase/auth'
export default {
    name: 'template_firebase_manager',
    methods: {
        async CreateTemplate(name , questions){
            try {
                await addDoc(collection(getFirestore(), "Templates"), {
                    name : name,
                    questions:questions,
                    user_id:getAuth().currentUser.uid,

                });
                return "Template Created successfully.";  
            } catch (error) {
                return "Invalid Operation"
            }
        },
    }
}
</script>
