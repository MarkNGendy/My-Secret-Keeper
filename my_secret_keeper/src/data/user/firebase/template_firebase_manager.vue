<script>
import { query,where,collection,getFirestore ,getDocs,addDoc} from "firebase/firestore";
import { getAuth} from 'firebase/auth'
export default {
    name: 'template_firebase_manager',
    methods: {
        async createTemplate(){
            await addDoc(collection(getFirestore(), "DiariesTemplate"), {
                user_id:getAuth().currentUser.uid,
                questions:[]
            });
        },
        async updateTemplate(){
            const querySnapshot = await getDocs(query(collection(getFirestore(), "DiariesTemplate"), where("user_id", "==",getAuth().currentUser.uid)));
            querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
            });
        }
    }
}
</script>
