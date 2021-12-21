<template>
  <div>Hello</div>
  <form @submit.prevent="pressed">
    <div class="body">
      <input type="text" v-model="body" placeholder="body">
    </div>
    <div class="diary_title">
      <input type="text" v-model="diary_title" placeholder="diary_title">
    </div>
    <button type="submit">CreateDiary</button>
  </form>
</template>
<script>
import DiaryRepository from "../data/user/repository/diary_repository.vue"
export default {
  name: 'CreateDiary',
  methods:{
    async pressed(){
      await DiaryRepository.methods.createDiary(this.body,this.diary_title);
    }
  },
  data(){
    return{
      body:"",
      diary_title:""
    }
  }
}
</script>
