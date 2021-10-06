<template>
  <div class="cnt-input-boolean">
    <label id="label-boolean">{{variable.value}}:</label>
    <input
      type="radio"
      :name="'boolean.'+variable.value"
      id="yes"
      value="true"
      v-model="boolean.value"
      @change="checkBoolean"
    />
    <label for="yes">Yes</label>
    <input
      type="radio"
      :name="'boolean.'+variable.value"
      id="no"
      value="false"
      v-model="boolean.value"
      @change="checkBoolean"
    />
    <label for="no">No</label>
  </div>
</template>

<script>
export default {
  name: "InputBoolean",
  props: {
    variable: {
      value: String,
      required: Boolean,
      data: String,
    },
  },
  data() {
    return {
      boolean: {
        value: "",
        error_msg: "",
      },
    };
  },
  created() {
    this.boolean.value = this.variable.data;
  },
  methods: {
    checkBoolean() {
      if (this.required && this.boolean.value == "") {
        this.boolean.error_msg = variable.value + " is required";
      } else {
        this.boolean.error_msg = "";
      }
      this.$emit("boolean", this.boolean);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
