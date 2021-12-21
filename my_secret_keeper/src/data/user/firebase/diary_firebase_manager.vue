<script>
import { query,where,collection,getFirestore ,getDocs,addDoc} from "firebase/firestore";
import { getAuth} from 'firebase/auth'
export default {
    name: 'diary_firebase_manager',
    methods: {
        async createDiary(){
            await addDoc(collection(getFirestore(), "Diaries"), {
                date: new Date(),
                body: "",
                diary_title: "",
                user_id:getAuth().currentUser.uid,
                category_id: "",
                template_id: ""
            });
        },
        async updateDiary(){
            const querySnapshot = await getDocs(query(collection(getFirestore(), "Diaries"), where("user_id", "==",getAuth().currentUser.uid)));
            querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
            });
        }
    }
}
</script>
