<script>
import template_firebase_manager from '../firebase/template_firebase_manager.vue'
export default {
    name: "template-repository",
    methods: {
        async createTemplate() {
            await template_firebase_manager.methods.createTemplate();
        },
        async updateTemplate(){
            await template_firebase_manager.methods.updateTemplate();
        }
    }
}
</script>