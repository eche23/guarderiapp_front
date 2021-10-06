<template>
  <div class="cnt-input-dni">
    <input
      class="input-dni"
      type="text"
      ref="dni"
      placeholder="DNI"
      v-model="dni.value"
      @change="checkDNI"
    />
  </div>
</template>

<script>
export default {
  name: "InputDNI",
  props: {
    variable: {
      required: Boolean,
      data: String,
    },
  },
  data() {
    return {
      dni: {
        value: "",
        error_msg: "",
      },
    };
  },
  created() {
    this.dni.value = this.variable.data;
  },
  methods: {
    checkDNI() {
      if (this.required && this.dni.value == "") {
        this.$refs.dni.style.background = "#E17A84";
        this.dni.error_msg = "DNI is required";
      } else {
        let number;
        let letter;
        let letters = "TRWAGMYFPDXBNJZSQVHLCKET";
        let expresion_dni = /^\d{8}[a-zA-Z]$/;
        let dni = this.dni.value;

        if (expresion_dni.test(dni) == true) {
          number = dni.substr(0, dni.length - 1);
          letter = dni.substr(dni.length - 1, 1);
          number = number % 23;

          letters = letters.substring(number, number + 1);
          if (letters != letter.toUpperCase()) {
            this.dni.error_msg = "Wrong DNI";
            this.$refs.dni.style.background = "#E17A84";
          } else {
            this.dni.error_msg = "";
            this.$refs.dni.style.background = "none";
          }
        } else {
          this.dni.error_msg = "Invalid DNI";
          this.$refs.dni.style.background = "#E17A84";
        }
      }
      this.$emit("dni", this.dni);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cnt-input-dni {
  padding: 10px;
  display: flex;
}
.input-dni {
  padding: 10px;
  border-radius: 10px;
  flex: 1;
  border: #32a651 1px solid;
}
</style>
