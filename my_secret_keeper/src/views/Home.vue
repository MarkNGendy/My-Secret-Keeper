<template>
  <div >
    <HomeHeader></HomeHeader>
    <h1>This is home view page</h1>
  </div>
</template>
<script>
import HomeHeader from "../components/HomeHeader.vue";

export default {
  name: "Home",
  components: {
   HomeHeader,
  },
};
</script>