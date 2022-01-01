<script>
import TempleteFirebaseManager from '../../diary/firebase/template_firebase_manager.vue'
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

    }
}
</script>
