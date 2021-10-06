<template>
  <div class="cnt-input-email">
    <input
      class="input-email"
      type="email"
      ref="email"
      placeholder="Email"
      v-model="email.value"
      @change="checkEmail"
    />
  </div>
</template>

<script>
export default {
  name: "InputEmail",
  props: {
    variable: {
      required: Boolean,
      data: String,
    },
  },
  data() {
    return {
      email: {
        value: "",
        error_msg: "",
      },
    };
  },
  created() {
    this.email.value = this.variable.data;
  },
  methods: {
    checkEmail() {
      if (this.required && this.email.value == "") {
        this.$refs.email.style.background = "#E17A84";
        this.email.error_msg = "Email is required";
      } else {
        if (!this.validateEmail(this.email.value)) {
          this.$refs.email.style.background = "#E17A84";
          this.email.error_msg = "Invalid email";
        } else {
          this.$refs.email.style.background = "none";
          this.email.error_msg = "";
        }
      }
      this.$emit("email", this.email);
    },
    validateEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cnt-input-email {
  padding: 10px;
  display: flex;
}
.input-email {
  padding: 10px;
  border-radius: 10px;
  flex: 1;
  border: #32a651 1px solid;
}
</style>
