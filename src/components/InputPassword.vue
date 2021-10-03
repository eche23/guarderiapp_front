<template>
  <div class="cnt-input-password">
    <input
      class="input-password"
      type="password"
      ref="password"
      placeholder="Password"
      v-model="password.value"
      @change="checkPassword"
    />
  </div>
</template>

<script>
export default {
  name: "InputPassword",
  props: {
    variable: {
      required: Boolean,
      data: String,
    },
  },
  data() {
    return {
      password: {
        value: "",
        error_msg: "",
      },
    };
  },
  created() {
    this.password.value = this.variable.data;
  },
  methods: {
    checkPassword() {
      if (this.required && this.password.value == "") {
        this.$refs.password.style.background = "#E17A84";
        this.password.error_msg = "Password is required";
      } else {
        if (!this.validatePassword(this.password.value)) {
          this.$refs.password.style.background = "#E17A84";
          this.password.error_msg = "Invalid password";
        } else {
          this.$refs.password.style.background = "none";
          this.password.error_msg = "";
        }
      }
      this.$emit("password", this.password);
    },
    validatePassword(password) {
      const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,}$/;
      return re.test(String(password));
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cnt-input-password {
  padding: 10px;
  display: flex;
}
.input-password {
  padding: 10px;
  border-radius: 10px;
  flex: 1;
  border: #32a651 1px solid;
}
</style>
