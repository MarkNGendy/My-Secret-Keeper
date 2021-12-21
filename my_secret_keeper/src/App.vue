<template>
  <HelloWorld/>
  <CreateDiary/>
  <RetreiveDiary/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import CreateDiary from './components/CreateDiary.vue'
import RetreiveDiary from './data/user/firebase/diary_firebase_manager.vue'
export default {
  name: 'App',
  components: {
    HelloWorld,CreateDiary,RetreiveDiary
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
