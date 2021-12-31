<script>
import { query,where,collection,getFirestore ,getDocs,doc,addDoc,updateDoc,deleteDoc} from "firebase/firestore";
import { getAuth} from 'firebase/auth'
export default {
    name: 'diary_firebase_manager',
    methods: {
        async createDiary(title, body, date){
            try {
                await addDoc(collection(getFirestore(), "Diaries"), {
                    date: date,
                    body: body,
                    title:title,
                    user_id:getAuth().currentUser.uid,
                    category_id:"",
                    template_id:""
                });
                return "Diary Created successfully.";  
            } catch (error) {
                return "Invalid Operation"
            }
        },
        async updateDiary(id,title, body, date){
            try {
                await updateDoc(doc(getFirestore(),"Diaries",id), {
                    date: date,
                    body: body,
                    title:title
                });
                return "Diary Updated successfully."; 
            } catch (error) {
                return "Invalid Operation"
            }
        },
        async deleteDiary(doc_id){
            try {
                await deleteDoc(doc(getFirestore(),"Diaries",doc_id));
                return "Diary Deleted successfully."; 
            } catch (error) {
                return "Invalid Operation";
            }
        },
        async retrieveDiaries(){
            const querySnapshot = await getDocs(query(collection(getFirestore(), "Diaries"), where("user_id", "==",getAuth().currentUser.uid)));
            let diaries = [];
            querySnapshot.forEach((doc) => {
                diaries.push(doc.data());
            });
            return diaries;
        },
    }
}
</script>
