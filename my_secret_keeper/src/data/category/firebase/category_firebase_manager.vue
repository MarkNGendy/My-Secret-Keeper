<script>
import { query,where,collection,getFirestore ,getDocs,doc,addDoc,updateDoc,deleteDoc} from "firebase/firestore";
import { getAuth} from 'firebase/auth'
export default {
    name: 'category_firebase_manager',
    methods: {
        async createCategory(name,icon){
            try {
                await addDoc(collection(getFirestore(), "Categories"), {
                    name:name,
                    icon:icon,
                    user_id:getAuth().currentUser.uid
                });
                return "Category Created successfully.";
            } catch (error) {
                return "Invalid operation"
            }
        },
        async updateCategory(id,name,icon){
            try {
                await updateDoc(doc(getFirestore(),"Categories",id), {
                    name:name,
                    icon:icon
                });
                return "Category Updated successfully.";
            } catch (error) {
                return "Invalid operation";
            }

        },
        async deleteCategory(id){
            try {
                await deleteDoc(doc(getFirestore(),"Categories",id));
                return "Category Deleted successfully.";
            } catch (error) {
                return "Invalid operation"
            }
        },
        async retreiveCategories(){
            const querySnapshot = await getDocs(query(collection(getFirestore(), "Categories"), where("user_id", "==",getAuth().currentUser.uid)));
            let categories = [];
            querySnapshot.forEach((doc) => {
                categories.push(doc.data());
            });
            return categories;
        }
    }
}
</script>
