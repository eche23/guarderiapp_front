<template>
  <div class="create_form">
    <h1>Create Rates</h1>
    <h3>{{ error_msg }}</h3>
    <div class="ctn-info">
      <inputText
        :variable="{ value: 'Name*', required: true, data: rate.name }"
        @input="getName"
      />
      <inputNumber
        :variable="{ value: 'Hours*', required: true, data: rate.hours }"
        @number="getHours"
      />
      <inputNumber
        :variable="{ value: 'Price*', required: true, data: rate.price }"
        @number="getPrice"
      />
    </div>
    <div class="ctn-btn">
      <button class="btn" id="create-rate" @click="create">Create</button>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

import inputText from "@/components/InputText";
import inputNumber from "@/components/InputNumber";

export default {
  components: {
    inputText,
    inputNumber,
  },
  data() {
    return {
      rate: {
        name: "",
        hours: "",
        price: "",
      },
      error_msg: "",
    };
  },
  created() {},
  methods: {
    getName(input) {
      this.error_msg = input.error_msg;
      this.rate.name = input.value;
    },
    getHours(number) {
      this.error_msg = number.error_msg;
      this.rate.hours = number.value;
    },
    getPrice(number) {
      this.error_msg = number.error_msg;
      this.rate.price = number.value;
    },
    create() {
      let checked = this.checkRate();
      if (checked) {
        const rate = this.rate;
        Vue.axios
          .post("http://localhost:3000/api/v1/rates", rate)
          .then((res) => {
            console.log("CREADO" + res.data);
            this.$router.push("/");
          })
          .catch((err) => {
            this.error_msg = "Error create children:" + err;
          });
      }
    },
    checkRate() {
      const rate = this.rate;
      if (rate.name == "" || rate.hours == "" || rate.price == "") {
        this.error_msg = "All fields with * are required";
        console.log(rate);
        return false;
      } else {
        return true;
      }
    },
  },
};
</script>

<style scope>
.create_form {
  padding: 5%;
}

.ctn-info {
  display: grid;
  grid-template-columns: repeat(2, 50%);
  align-items: center;
}

.tutor-cnt {
  display: flex;
}

.btn {
  background: #32a651;
  font-weight: bold;
  font-size: 20px;
  color: #ffffff;
  border-radius: 10px;
  padding: 10px;
  border: #a64244 1px solid;
}

.ctn-btn {
  display: flex;
  justify-content: flex-end;
}
.btn {
  background: #32a651;
  font-weight: bold;
  font-size: 20px;
  color: #ffffff;
  border-radius: 10px;
  padding: 10px;
  border: #a64244 1px solid;
}

#rules {
  display: flex;
}

@media (max-width: 576px) {
  .ctn-info {
    grid-template-columns: repeat(1, 100%);
  }
}
</style>
