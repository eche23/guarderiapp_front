<template>
  <div class="list">
    <div v-for="item in list" :key="item.id">
      <span>{{ item.information.type }}: </span>
      <span>{{ item.information.name }} </span>
      <span>{{ item.information.lastName1 }} </span>
      <span v-if="item.information.lastName2">{{
        item.information.lastName2
      }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TutorList",
  props: {
    list: Array,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
