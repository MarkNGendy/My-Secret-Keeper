<script>
import DiaryFirebaseManager from '../../diary/firebase/diary_firebase_manager.vue'
export default {
    name: "diary-repository",
    methods: {
        async createDiary(title, body, date) {
            if(title === "") {
                return "Please enter a title for the diary";
            }
            if(body === "") {
                return "Please enter content for the diary";
            }
            if(date === null) {
                return "Please choose a date for the diary";
            }
            await DiaryFirebaseManager.methods.createDiary(title, body, date);
            return "Diary Created successfully.";
        },
        async retrieveDiaries() {
            return await DiaryFirebaseManager.methods.retrieveDiaries();
        },
        async updateDiary(){
            await DiaryFirebaseManager.methods.updateDiary();
        }
    }
}
</script>