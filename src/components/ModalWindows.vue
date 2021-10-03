<template>
  <div v-if="modal">
    <transition name="modal">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-windows">
            <button type="button" class="close" @click="close">
              <span>&times;</span>
            </button>
            <div class="modal-cnt">
              <span class="error_msg" v-if="error_msg != ''">{{
                error_msg
              }}</span>
              <inputSelect
                :variable="{
                  list: tutorType,
                  placeholder: 'Type*',
                  required: true,
                  data: user.information.type,
                }"
                @select="getType"
              />
              <inputEmail
                :variable="{
                  required: true,
                  data: user.email,
                }"
                @email="getEmail"
              />
              <inputPassword
                :variable="{
                  required: true,
                  data: user.password,
                }"
                @password="getPassword"
              />
              <inputText
                :variable="{
                  value: 'Name*',
                  required: true,
                  data: user.information.name,
                }"
                @input="getName"
              />
              <inputText
                :variable="{
                  value: 'Last Name 1*',
                  required: true,
                  data: user.information.lastName1,
                }"
                @input="getLastName1"
              />
              <inputText
                :variable="{
                  value: 'Last Name 2',
                  required: false,
                  data: user.information.lastName2,
                }"
                @input="getLastName2"
              />
              <inputDNI
                :variable="{ required: false, data: user.information.dni }"
                @dni="getDni"
              />
              <inputTelephone
                :variable="{
                  required: false,
                  data: user.information.telephone,
                }"
                @telephone="getTelephone"
              />
              <inputSelect
                :variable="{
                  list: listAddressType,
                  placeholder: 'Address Type*',
                  required: true,
                  data: address.type,
                }"
                @select="getAddressType"
              />
              <inputText
                :variable="{
                  value: 'Address*',
                  required: true,
                  data: address.street,
                }"
                @input="getStreet"
              />
              <inputText
                :variable="{
                  value: 'Number*',
                  required: true,
                  data: address.number,
                }"
                @input="getNumber"
              />
              <inputText
                :variable="{
                  value: 'Block',
                  required: false,
                  data: address.block,
                }"
                @input="getBlock"
              />
              <inputText
                :variable="{
                  value: 'Floor',
                  required: false,
                  data: address.floor,
                }"
                @input="getFloor"
              />
              <inputText
                :variable="{
                  value: 'Letter',
                  required: false,
                  data: address.letter,
                }"
                @input="getLetter"
              />
              <inputFiles
                :variable="{
                  value: 'DNI',
                  person_info: {
                    name: user.information.name,
                    lastName1: user.information.lastName1,
                    lastName2: user.information.lastName2,
                  },
                }"
                @file="getDniUrl"
              />
              <div class="ctn-btn">
                <button class="btn" @click="createUser">Save</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import Vue from "vue";

import inputEmail from "@/components/InputEmail";
import inputPassword from "@/components/InputPassword";
import inputSelect from "@/components/InputSelect";
import inputText from "@/components/InputText";
import inputDNI from "@/components/InputDNI";
import inputTelephone from "@/components/InputTelephone";
import inputFiles from "@/components/InputFiles";
import tutorType from "@/data/tutorType";

export default {
  name: "ModalTutor",
  components: {
    inputEmail,
    inputPassword,
    inputSelect,
    inputText,
    inputDNI,
    inputTelephone,
    inputFiles,
  },
  props: {
    value: {
      required: true,
    },
    modal: Boolean,
  },
  data() {
    return {
      modalWindows: JSON.parse(this.modal),
      user: {
        information: {
          type: "",
          name: "",
          lastName1: "",
          lastName2: "",
          dni: "",
          telephone: "",
          address: "",
          documents: [
            {
              dni: "",
            },
          ],
        },
      },
      address: {
        type: "",
        street: "",
        number: "",
        block: "",
        floor: "",
        letter: "",
      },
      error_msg: "",
      tutorType: [],
      listAddressType: [],
    };
  },
  created() {
    this.getListAddressType();
    this.tutorType = tutorType;
  },
  methods: {
    getListAddressType() {
      this.listAddressType = require("../data/addressType.json");
    },
    close() {
      this.$emit("modal", this.modalWindows);
    },
    getType(type) {
      this.error_msg = type.error_msg;
      this.user.information.type = type.value;
    },
    getEmail(email) {
      this.error_msg = email.error_msg;
      this.user.email = email.value;
    },
    getPassword(password) {
      this.error_msg = password.error_msg;
      this.user.password = password.value;
    },
    getName(input) {
      this.error_msg = input.error_msg;
      this.user.information.name = input.value;
    },
    getLastName1(input) {
      this.error_msg = input.error_msg;
      this.user.information.lastName1 = input.value;
    },
    getLastName2(input) {
      this.error_msg = input.error_msg;
      this.user.information.lastName2 = input.value;
    },
    getDni(dni) {
      this.error_msg = dni.error_msg;
      this.user.information.dni = dni.value;
    },
    getTelephone(telephone) {
      this.error_msg = telephone.error_msg;
      this.user.information.telephone = telephone.value;
    },
    getAddressType(type) {
      this.error_msg = type.error_msg;
      this.address.type = type.value;
    },
    getStreet(input) {
      this.error_msg = input.error_msg;
      this.address.street = input.value;
    },
    getNumber(input) {
      this.error_msg = input.error_msg;
      this.address.number = input.value;
    },
    getBlock(input) {
      this.error_msg = input.error_msg;
      this.address.block = input.value;
    },
    getFloor(input) {
      this.error_msg = input.error_msg;
      this.address.floor = input.value;
    },
    getLetter(input) {
      this.error_msg = input.error_msg;
      this.address.letter = input.value;
    },
    getDniUrl(file) {
      this.error_msg = file.error_msg;
      this.user.information.documents.dni = file.url;
    },
    createUser() {
      if (this.checkUser()) {
        const newUser = this.user;
        const address = this.address;
        Vue.axios
          .post("http://localhost:3000/api/v1/address", address)
          .then((res) => {
            newUser.information.address = res.data._id;
            Vue.axios
              .post("http://localhost:3000/api/v1/users", newUser)
              .then((user) => {
                newUser.id = user.data.id;
                this.$emit("user", newUser);
                this.newUser();
                this.close();
              })
              .catch((err) => {
                this.error_msg = "Error create user:" + err;
              });
          })
          .catch((err) => {
            this.error_msg = "Error create user:" + err;
          });
      }
    },
    checkUser() {
      if (
        this.user.email == "" ||
        this.user.password == "" ||
        this.user.information.type == "" ||
        this.user.information.name == "" ||
        this.user.information.lastName1 == "" ||
        this.user.information.dni == "" ||
        this.user.information.telephone == "" ||
        this.user.information.documents == "" ||
        this.address.type == "" ||
        this.address.street == "" ||
        this.address.number == ""
      ) {
        this.error_msg = "All fields with * are required";
        return false;
      } else {
        return true;
      }
    },
    newUser() {
      this.user = {
        information: {
          type: "",
          name: "",
          lastName1: "",
          lastName2: "",
          dni: "",
          telephone: "",
          documents: [
            {
              dni: "",
            },
          ],
        },
      };
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-windows {
  background: white;
  border-radius: 15px;
  margin: 5%;
}

.close {
  margin: 10px;
  float: right;
  background-color: #a64244;
  border-radius: 5px;
  border: 1px solid #32a651;
}

.close span {
  color: #ffffff;
  font-size: 15px;
}

.modal-cnt {
  padding: 5%;
  display: grid;
  grid-template-columns: repeat(2, 50%);
  align-items: center;
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
@media (max-width: 768px) {
  .modal-cnt {
    grid-template-columns: repeat(1, 100%);
  }
}
</style>
