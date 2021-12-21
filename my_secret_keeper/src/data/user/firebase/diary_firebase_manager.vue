<template>
    <body ref="body"></body>
    <button @click="retreiveDiary">RetreiveDiary</button>  
</template>
<script>
import { query,where,collection,getFirestore ,getDocs,doc,addDoc,updateDoc,deleteDoc} from "firebase/firestore";
import { getAuth} from 'firebase/auth'
export default {
    name: 'diary_firebase_manager',
    methods: {
        async createDiary(body,diary_title){
            await addDoc(collection(getFirestore(), "Diaries"), {
                date: new Date(),
                body: body,
                diary_title:diary_title,
                user_id:getAuth().currentUser.uid,
                category_id: "",
                template_id: ""
            });
        },
        async updateDiary(doc_id,table_name){
            console.log(doc_id);
            await updateDoc(doc(getFirestore(),table_name,doc_id), {
                body: "body updated",
                diary_title:"diary updated"
            });
            this.retreiveDiary();
        },
        async deleteDiary(doc_id,table_name){
            console.log(doc_id);
            await deleteDoc(doc(getFirestore(),table_name,doc_id));
            this.retreiveDiary();
        },
        async retreiveDiary(){
            this.$refs.body.innerHTML="";
            let table = document.createElement('table');
            let thead = document.createElement('thead');
            let tbody = document.createElement('tbody');
            table.appendChild(thead);
            table.appendChild(tbody);
            this.$refs.body.appendChild(table);
            let row_1 = document.createElement('tr');
            let heading_1 = document.createElement('th');
            heading_1.innerHTML = "Date";
            let heading_2 = document.createElement('th');
            heading_2.innerHTML = "Body";
            let heading_3 = document.createElement('th');
            heading_3.innerHTML = "DiaryTitle";
            let heading_4 = document.createElement('th');
            heading_4.innerHTML = "Update";
            let heading_5 = document.createElement('th');
            heading_5.innerHTML = "Delete";
            row_1.appendChild(heading_1);
            row_1.appendChild(heading_2);
            row_1.appendChild(heading_3);
            row_1.appendChild(heading_4);
            row_1.appendChild(heading_5);
            thead.appendChild(row_1);
            const querySnapshot = await getDocs(query(collection(getFirestore(), "Diaries"), where("user_id", "==",getAuth().currentUser.uid)));
            querySnapshot.forEach((doc) => {
            let row= document.createElement('tr');
            let heading_1=document.createElement('td');
            heading_1.innerHTML =doc.data().date;
            let heading_2=document.createElement('td');
            heading_2.innerHTML =doc.data().body;
            let heading_3=document.createElement('td');
            heading_3.innerHTML =doc.data().diary_title;
            let heading_4=document.createElement('td');
            let update_btn = document.createElement("button");
            update_btn.innerHTML = "update";
            update_btn.onclick =()=>this.temp(doc.id,"update","Diaries");
            heading_4.appendChild(update_btn);
            let heading_5=document.createElement('td');
            let delete_btn = document.createElement("button");
            delete_btn.innerHTML = "delete";
            delete_btn.onclick =()=>this.temp(doc.id,"delete","Diaries");
            heading_5.appendChild(delete_btn);
            row.appendChild(heading_1);
            row.appendChild(heading_2);
            row.appendChild(heading_3);
            row.appendChild(heading_4);
            row.appendChild(heading_5);
            tbody.appendChild(row);
            });
        },
        async temp(doc_id,state,table_name){
            if(state=="update")
                this.updateDiary(doc_id,table_name);
            else
                this.deleteDiary(doc_id,table_name);
        },
    }
}
</script>
