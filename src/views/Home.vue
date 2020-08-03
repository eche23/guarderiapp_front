<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>

<style scoped>
.home {
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
}
@media (max-width: 768px) {
  .home {
    margin-left: 65px;
  }
}</style
>>
