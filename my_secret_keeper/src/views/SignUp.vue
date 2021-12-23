<template>
  <div >
  <Header></Header>
  <Register></Register>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Register from "../components/Register.vue";

export default {
  name: "SignUp",
  components: { 
   Register,
   Header,
  },
};
</script>

