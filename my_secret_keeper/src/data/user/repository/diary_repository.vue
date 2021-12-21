<script>
import diary_firebase_manager from '../firebase/diary_firebase_manager.vue'
export default {
    name: "diary-repository",
    methods: {
        async createDiary() {
            await diary_firebase_manager.methods.createDiary();
        },
        async updateDiary(){
            await diary_firebase_manager.methods.updateDiary();
        }
    }
}
</script>