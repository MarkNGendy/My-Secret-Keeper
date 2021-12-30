<script>
import { query,where,collection,getFirestore ,getDocs,doc,addDoc,updateDoc,deleteDoc} from "firebase/firestore";
import { getAuth} from 'firebase/auth'
export default {
    name: 'diary_firebase_manager',
    methods: {
        async createDiary(title, body, date){
            await addDoc(collection(getFirestore(), "Diaries"), {
                date: date,
                body: body,
                title:title,
                user_id:getAuth().currentUser.uid,
                category_id: "",
                template_id: ""
            });
            
        },
        async updateDiary(doc_id,table_name){
            console.log(doc_id);
            await updateDoc(doc(getFirestore(),table_name,doc_id), {
                body: "body updated",
                diary_title:"diary updated"
            });
            this.retrieveDiaries();
        },
        async deleteDiary(doc_id,table_name){
            console.log(doc_id);
            await deleteDoc(doc(getFirestore(),table_name,doc_id));
            this.retrieveDiaries();
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
