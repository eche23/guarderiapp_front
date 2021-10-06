<template>
  <div class="cnt-input-checkbox">
    <input
      type="checkbox"
      name="checkbox"
      value="true"
      v-model="checkbox.value"
      @change="checkCheckbox"
    />
    <label id="label-checkbox">{{variable.value}}</label>
  </div>
</template>

<script>
export default {
  name: "InputCheckbox",
  props: {
    variable: {
      value: String,
      required: Boolean,
      data: String,
    },
  },
  data() {
    return {
      checkbox: {
        value: "",
        error_msg: "",
      },
    };
  },
  created() {
    this.checkbox.value = this.variable.data;
  },
  methods: {
    checkCheckbox() {
      if (this.required && this.checkbox.value == "") {
        this.checkbox.error_msg = variable.value + " is required";
      } else {
        this.checkbox.error_msg = "";
      }
      this.$emit("checkbox", this.checkbox);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
