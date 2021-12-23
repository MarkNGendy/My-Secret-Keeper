<template>
  <div>
    <h1>This is home view page</h1>
    <HomeHeader></HomeHeader>
  </div>
</template>

<script>
import HomeHeader from "../components/HomeHeader.vue";
export default {
  name: "Home",
  components: {
    HomeHeader
  },
};
</script>
