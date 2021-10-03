<template>
  <div class="cnt-input-text">
    <input
      type="text"
      class="input-text"
      ref="input"
      :placeholder="variable.value"
      v-model="input.value"
      @change="checkInput"
    />
  </div>
</template>

<script>
export default {
  name: "InputText",
  props: {
    variable: {
      value: String,
      required: Boolean,
      data: String,
    },
  },
  data() {
    return {
      input: {
        value: "",
        error_msg: "",
      },
    };
  },
  created() {
    this.input.value = this.variable.data;
  },
  methods: {
    checkInput() {
      if (this.variable.required && this.input.value == "") {
        this.$refs.input.style.background = "#E17A84";
        this.input.error_msg =
          this.variable.value.replace("*", "") + " is required";
      } else {
        this.$refs.input.style.background = "none";
        this.input.error_msg = "";
      }

      this.$emit("input", this.input);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cnt-input-text {
  padding: 10px;
  display: flex;
}
.input-text {
  padding: 10px;
  border-radius: 10px;
  flex: 1;
  border: #32a651 1px solid;
}
</style>
