<script>
import category_firebase_manager from '../firebase/category_firebase_manager.vue'
export default {
    name: "category-repository",
    methods: {
        async createCategory() {
            await category_firebase_manager.methods.createCategory();
        },
        async updateCategory(){
            await category_firebase_manager.methods.updateCategory();
        }
    }
}
</script>