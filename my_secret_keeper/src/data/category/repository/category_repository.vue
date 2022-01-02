<script>
import CategoryFirebaseManager from '../firebase/category_firebase_manager.vue'
export default {
    name: "category-repository",
    methods: {
        async createCategory(name){
            if(name === "") 
                return "Please enter name for category";
            return await CategoryFirebaseManager.methods.createCategory(name);
        },
        async updateCategory(id,name){
            if(name === "") 
                return "Please enter name for category";
            return await CategoryFirebaseManager.methods.updateCategory(id,name);
        },
        async deleteCategory(id){
            return await CategoryFirebaseManager.methods.deleteCategory(id);
        },
        async retrieveCategories() {
            return await CategoryFirebaseManager.methods.retreiveCategories();
        }
    }
}
</script>