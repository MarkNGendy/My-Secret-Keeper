<script>
import { query,where,collection,getFirestore ,getDocs,addDoc} from "firebase/firestore";
import { getAuth} from 'firebase/auth'
export default {
    name: 'category_firebase_manager',
    methods: {
        async createCategory(){
            await addDoc(collection(getFirestore(), "Categories"), {
                category_name:"",
                category_icon: "",
                user_id:getAuth().currentUser.uid,
                diaries_id:[]
            });
        },
        async updateCategory(){
            const querySnapshot = await getDocs(query(collection(getFirestore(), "Categories"), where("user_id", "==",getAuth().currentUser.uid)));
            querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
            });
        }
    }
}
</script>
