<script>
import TempleteFirebaseManager from '../../template/firebase/template_firebase_manager.vue'
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
            return await TempleteFirebaseManager.methods.CreateTemplate(name , Questions);
            
        },
        
        async retrieveTemplates() {
            return await TempleteFirebaseManager.methods.retrieveTemplates();
        },
    }
}
</script>
