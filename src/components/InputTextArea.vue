<template>
  <div class="cnt-input-text-area">
    <textarea
      class="input-text-area"
      ref="textArea"
      name="other_dates"
      id="other_dates"
      cols="30"
      rows="10"
      :placeholder="variable.value"
      v-model="textArea.value"
      @change="checkTextArea"
    />
  </div>
</template>

<script>
export default {
  name: "InputTextArea",
  props: {
    variable: {
      value: String,
      required: Boolean,
      data: String,
    },
  },
  data() {
    return {
      textArea: {
        value: "",
        error_msg: "",
      },
    };
  },
  created() {
    this.textArea.value = this.variable.data;
  },
  methods: {
    checkTextArea() {
      if (this.variable.required && this.textArea.value == "") {
        this.$refs.textArea.style.background = "#E17A84";
        this.textArea.error_msg =
          this.variable.value.replace("*", "") + " is required";
      } else {
        this.$refs.textArea.style.background = "none";
        this.textArea.error_msg = "";
      }

      this.$emit("textArea", this.textArea);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cnt-input-text-area {
  padding: 10px;
  display: flex;
}
.input-text-area {
  padding: 10px;
  border-radius: 10px;
  flex: 1;
  border: #32a651 1px solid;
  resize: none;
}
</style>
