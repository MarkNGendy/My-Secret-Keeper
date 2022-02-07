<script>
import { collection,getFirestore ,addDoc , query , where ,doc, getDocs,deleteDoc} from "firebase/firestore";
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
        async retrieveTemplates(){
            const querySnapshot = await getDocs(query(collection(getFirestore(), "Templates"), where("user_id", "==",getAuth().currentUser.uid)));
            let templates = [];
            querySnapshot.forEach((doc) => {
                var template = doc.data();
                template.id = doc.id;
                console.log(template);
                templates.push(template);
            });
            return templates;
        },
        async deleteTemplate(doc_id){
            try {
                await deleteDoc(doc(getFirestore(),"Templates",doc_id));
                return "Template is deleted successfully."; 
            } catch (error) {
                return "Invalid Operation";
            };
        },
    }
}
</script>
