<script>
import { query,where,collection,getFirestore ,getDocs,doc,addDoc,updateDoc,deleteDoc} from "firebase/firestore";
import { getAuth} from 'firebase/auth'
export default {
    name: 'diary_firebase_manager',
    methods: {
        async createDiary(title, body, date, categoryId){
            try {
                await addDoc(collection(getFirestore(), "Diaries"), {
                    date: date,
                    body: this.encrypt(body),
                    title:this.encrypt(title),
                    user_id:getAuth().currentUser.uid,
                    category_id:categoryId,
                    template_id:""
                });
                return "Diary Created successfully.";  
            } catch (error) {
                return "Invalid Operation"
            }
        },
        async updateDiary(id, title, body, date){
            try {
                await updateDoc(doc(getFirestore(), "Diaries", id), {
                    date: date,
                    body: this.encrypt(body),
                    title: this.encrypt(title)
                });
                return "Diary Updated successfully."; 
            } catch (error) {
                return "Invalid Operation"
            }
        },
        async deleteDiary(doc_id){
            try {
                await deleteDoc(doc(getFirestore(),"Diaries",doc_id));
                return "Diary is deleted successfully."; 
            } catch (error) {
                return "Invalid Operation";
            }
        },
        async retrieveDiaries(){
            const querySnapshot = await getDocs(query(collection(getFirestore(), "Diaries"), where("user_id", "==",getAuth().currentUser.uid)));
            let diaries = [];
            querySnapshot.forEach((doc) => {
                var diary = doc.data();
                diary.id = doc.id;
                diaries.push(diary);
            });
            for(let i=0; i<diaries.length; ++i){
                var ntitle = this.decrypt(diaries[i].title);
                var nbody = this.decrypt(diaries[i].body);
                diaries[i].title=ntitle;
                diaries[i].body=nbody;
            }
            return diaries;
        },
        async retrieveDiariesByCategory(id){
            const querySnapshot = await getDocs(query(collection(getFirestore(), "Diaries"), where("category_id", "==",id)));
            let diaries = [];
            querySnapshot.forEach((doc) => {
                var diary = doc.data();
                diary.id = doc.id;
                diaries.push(diary);
            });
            for(let i=0; i<diaries.length; ++i){
                var ntitle = this.decrypt(diaries[i].title);
                var nbody = this.decrypt(diaries[i].body);
                diaries[i].title=ntitle;
                diaries[i].body=nbody;
            }
            return diaries;
        },
        async searchDiaries(title){
            let diaries=this.retrieveDiaries();
            let target=[]
            for(let i=0;i<diaries.length;i++){
                if(diaries[i].title===title){
                    target.push(diaries[i])
                }
                   
            }
            return target;
        },
        encrypt(data){
            var encrypted = "";
            const it = data[Symbol.iterator]();
            let n = it.next();
            while(!n.done){
                var x = (n.value.charCodeAt(0)+55) % 65536  ;
                var c = String.fromCharCode(x);
                encrypted+=c;
                n=it.next();
            }
            return encrypted;
        },
        decrypt(encrypted){
            var data="";
            const it = encrypted[Symbol.iterator]();
            let n = it.next();
            while(!n.done){
                var x = (n.value.charCodeAt(0)-55) % 65536  ;
                var c = String.fromCharCode(x);
                data+=c;
                n=it.next();
            }
            return data;
        }
    }
}
</script>
