<script>
import TemplateFirebaseManager from '../../template/firebase/template_firebase_manager.vue'
export default {
    name: "template-repository",
    methods: {
        async CreateTemplate(name , Questions) {
            if(name === "")
                return "Please enter a name for the template";
            if(Questions === null)
                return "Please enter questions"
            for (let i = 0; i < Questions.length; i++) {
                if(Questions[i] === null)
                    return "There is an Empty Question";
            }
            return await TemplateFirebaseManager.methods.CreateTemplate(name , Questions);
            
        },
        
        async retrieveTemplates() {
            return await TemplateFirebaseManager.methods.retrieveTemplates();
        },
        async deleteTemplate(id){
            if(id === "") {
                return "Cannot delete the desired Template";
            }
            return await TemplateFirebaseManager.methods.deleteTemplate(id);
        },
    }
}
</script>
