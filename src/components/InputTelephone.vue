<template>
  <div class="cnt-input-telephone">
    <input
      class="input-telephone"
      type="text"
      ref="telephone"
      placeholder="Telephone"
      v-model="telephone.value"
      @change="checkTelephone"
    />
  </div>
</template>

<script>
export default {
  name: "InputTelephone",
  props: {
    variable: {
      required: Boolean,
      data: String,
    },
  },
  data() {
    return {
      telephone: {
        value: "",
        error_msg: "",
      },
    };
  },
  created() {
    this.telephone.value = this.variable.data;
  },
  methods: {
    checkTelephone() {
      if (this.required && this.telephone.value == "") {
        this.$refs.telephone.style.background = "#E17A84";
        this.telephone.error_msg = "Telephone is required";
      } else {
        let expresion_telephone = /^[0-9]{9}$/;
        let telephone = this.telephone.value;

        if (expresion_telephone.test(telephone) == true) {
          this.telephone.error_msg = "";
          this.$refs.telephone.style.background = "none";
        } else {
          this.telephone.error_msg = "Invalid telephone";
          this.$refs.telephone.style.background = "#E17A84";
        }
      }
      this.$emit("telephone", this.telephone);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cnt-input-telephone {
  padding: 10px;
  display: flex;
}
.input-telephone {
  padding: 10px;
  border-radius: 10px;
  flex: 1;
  border: #32a651 1px solid;
}
</style>
