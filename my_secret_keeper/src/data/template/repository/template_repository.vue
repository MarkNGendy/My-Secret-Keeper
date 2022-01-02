<script>
import TempleteFirebaseManager from '../../template/firebase/template_firebase_manager.vue'
export default {
    name: "template-repository",
    methods: {
        async CreateTemplate(name , Questions) {
            if(name === "")
                return "Please enter a name for the templete";
            if(Questions === null)
                return "please enter questions"
            return await TempleteFirebaseManager.methods.CreateTemplate(name , Questions);
        },
        async retrieveTemplates() {
            return await TempleteFirebaseManager.methods.retrieveTemplates();
        },
    }
}
</script>
