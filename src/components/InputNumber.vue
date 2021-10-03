<template>
  <div class="cnt-input-number">
    <input
      type="number"
      class="input-number"
      ref="number"
      min="0"
      :placeholder="variable.value"
      v-model="number.value"
      @change="checkInput"
    />
  </div>
</template>

<script>
export default {
  name: "InputNumber",
  props: {
    variable: {
      value: String,
      required: Boolean,
      data: String,
    },
  },
  data() {
    return {
      number: {
        value: "",
        error_msg: "",
      },
    };
  },
  created() {
    this.number.value = this.variable.data;
  },
  methods: {
    checkInput() {
      if (this.variable.required && this.number.value == "") {
        this.$refs.number.style.background = "#E17A84";
        this.number.error_msg =
          this.variable.value.replace("*", "") + " is required";
      } else {
        this.$refs.number.style.background = "none";
        this.number.error_msg = "";
      }

      this.$emit("number", this.number);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cnt-input-number {
  padding: 10px;
  display: flex;
}
.input-number {
  padding: 10px;
  border-radius: 10px;
  flex: 1;
  border: #32a651 1px solid;
}
</style>
