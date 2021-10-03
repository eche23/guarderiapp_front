<template>
  <div class="cnt-input-select">
    <select
      class="input-select"
      ref="select"
      @change="selectItem"
      v-model="select.value"
    >
      <option value="">{{ variable.placeholder }}</option>
      <option
        v-for="item in variable.list"
        :key="item._id"
        :value="item._id"
        id="listItem"
        >{{ item.name }}</option
      >
    </select>
  </div>
</template>

<script>
export default {
  name: "InputSelect",
  props: {
    variable: {
      list: Array,
      placeholder: String,
      required: Boolean,
      data: String,
    },
  },
  data() {
    return {
      select: {
        value: "",
        error_msg: "",
      },
    };
  },
  created() {
    if (this.variable.data != undefined) {
      this.select.value = this.variable.data;
    }
  },
  methods: {
    selectItem() {
      if (this.variable.required && this.select.value == "") {
        this.select.error_msg =
          this.variable.placeholder.replace("*", "") + " is required";
        this.$refs.select.style.background = "#E17A84";
      } else {
        this.select.error_msg = "";
        this.$refs.select.style.background = "none";
      }
      this.$emit("select", this.select);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cnt-input-select {
  padding: 10px;
  display: flex;
}
.input-select {
  padding: 10px;
  border-radius: 10px;
  flex: 1;
  border: #32a651 1px solid;
}
</style>
