<template>
  <div class="cnt-input-gender">
    <label id="label-gender">Gender*:</label>
    <input
      type="radio"
      name="gender"
      id="male"
      value="male"
      v-model="gender.value"
      @change="checkGender"
    />
    <label for="male">Male</label>
    <input
      type="radio"
      name="gender"
      id="female"
      value="female"
      v-model="gender.value"
      @change="checkGender"
    />
    <label for="female">Female</label>
  </div>
</template>

<script>
export default {
  name: "InputGender",
  props: {
    variable: {
      required: Boolean,
      data: String,
    },
  },
  data() {
    return {
      gender: {
        value: "",
        error_msg: "",
      },
    };
  },
  created() {
    this.gender.value = this.variable.data;
  },
  methods: {
    checkGender() {
      if (this.required && this.gender.value == "") {
        this.gender.error_msg = "Gender is required";
      } else {
        this.gender.error_msg = "";
      }
      this.$emit("gender", this.gender);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
