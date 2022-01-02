<script>
import { query,where,collection,getFirestore ,getDocs,doc,addDoc,updateDoc,deleteDoc} from "firebase/firestore";
import { getAuth} from 'firebase/auth'
export default {
    name: 'category_firebase_manager',
    methods: {
        async createCategory(name){
            try {
                await addDoc(collection(getFirestore(), "Categories"), {
                    name:name,
                    user_id:getAuth().currentUser.uid
                });
                return "Category Created successfully.";
            } catch (error) {
                return "Invalid operation"
            }
        },
        async updateCategory(id,name){
            try {
                await updateDoc(doc(getFirestore(),"Categories",id), {
                    name:name,
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
                var category = doc.data();
                category.id = doc.id;
                categories.push(category);
            });
            return categories;
        }
    }
}
</script>
