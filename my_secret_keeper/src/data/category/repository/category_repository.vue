<script>
import CategoryFirebaseManager from '../firebase/category_firebase_manager.vue'
export default {
    name: "category-repository",
    methods: {
        async createCategory(name,icon){
            if(name === "") 
                return "Please enter name for category";
            if(icon === "") 
                return "Please enter icon for category";
            return await CategoryFirebaseManager.methods.createCategory(name,icon);
        },
        async updateCategory(id,name,icon){
            if(name === "") 
                return "Please enter name for category";
            if(icon === "") 
                return "Please enter icon for category";
            return await CategoryFirebaseManager.methods.updateCategory(id,name,icon);
        },
        async deleteCategory(id){
            return await CategoryFirebaseManager.methods.deleteCategory(id);
        },
        async retrieveDiaries() {
            return await CategoryFirebaseManager.methods.retreiveCategories();
        }
    }
}
</script>