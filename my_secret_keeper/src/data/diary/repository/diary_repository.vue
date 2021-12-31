<script>
import DiaryFirebaseManager from '../../diary/firebase/diary_firebase_manager.vue'
export default {
    name: "diary-repository",
    methods: {
        async createDiary(title, body, date) {
            if(title === "")
                return "Please enter a title for the diary";
            if(body === "") 
                 return "Please enter content for the diary";
            if(date === null)
                return "Please choose a date for the diary";
            return await DiaryFirebaseManager.methods.createDiary(title, body, date);
        },
        async updateDiary(id,title, body, date){
            if(title === "")
                return "Please enter a title for the diary";
            if(body === "") 
                 return "Please enter content for the diary";
            if(date === null)
                return "Please choose a date for the diary";
            return await DiaryFirebaseManager.methods.updateDiary(id,title, body, date);
        },
        async deleteDiary(id){
            return await DiaryFirebaseManager.methods.deleteDiary(id);
        },
        async retrieveDiaries() {
            return await DiaryFirebaseManager.methods.retrieveDiaries();
        },

    }
}
</script>
