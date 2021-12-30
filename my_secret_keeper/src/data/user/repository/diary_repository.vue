<script>
import diary_firebase_manager from '../firebase/diary_firebase_manager.vue'

export default {
    name: "diary-repository",
    methods: {
        async createDiary(body,diary_title) {
            if(body=="")
                return "Enter Body"
            if(diary_title=="")
                return "Enter Diary Title"
            await diary_firebase_manager.methods.createDiary(body,diary_title);
            return "Correct Creation"
        },
        async updateDiary(doc_id,body,diary_title){
            if(body=="")
                return "Enter Body"
            if(diary_title=="")
                return "Enter Diary Title"
            try {
               await diary_firebase_manager.methods.updateDiary(doc_id,body,diary_title);
               return "Correct Update" 
            } catch (error) {
                //doc_id is not correct
                return "Invalid Diary"
            }
            
        },
        async deleteDiary(doc_id){
            try {
                await diary_firebase_manager.methods.deleteDiary(doc_id);
                return "Correct Delete"
            } catch (error) {
                //doc_id is not correct
                return "Invalid Diary"
            }
            
        }
    }
}
</script>
