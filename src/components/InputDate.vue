<template>
  <div class="cnt-input-date">
    <input
      type="text"
      onfocus="(this.type='date')"
      class="input-date"
      ref="input"
      :placeholder="variable.value"
      v-model="date.value"
      @change="checkDate"
    />
  </div>
</template>

<script>
export default {
  name: "InputDate",
  props: {
    variable: {
      value: String,
      required: Boolean,
      data: String,
    },
  },
  data() {
    return {
      date: {
        value: "",
        error_msg: "",
      },
    };
  },
  created() {
    this.date.value = this.variable.data;
  },
  methods: {
    checkDate() {
      if (this.variable.required && this.date.value == "") {
        this.$refs.input.style.background = "#E17A84";
        this.date.error_msg =
          this.variable.value.replace("*", "") + " is required";
      } else {
        this.$refs.input.style.background = "none";
        this.date.error_msg = "";
      }
      this.$emit("date", this.date);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cnt-input-date {
  padding: 10px;
  display: flex;
}
.input-date {
  padding: 10px;
  border-radius: 10px;
  flex: 1;
  border: #32a651 1px solid;
}
</style>
