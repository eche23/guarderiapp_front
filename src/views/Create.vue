<template>
  <div class="create_form">
    <h1>Create Children</h1>
    <h2>Children Information</h2>
    <h3>{{error_msg}}</h3>
    <div class="ctn-info" id="children_info">
      <inputText
        :variable="{ value: 'Name*', required: true, data: children.name }"
        @input="getName"
      />
      <inputText
        :variable="{
          value: 'Last Name 1*',
          required: true,
          data: children.lastName1,
        }"
        @input="getLastName1"
      />
      <inputText
        :variable="{
          value: 'Last Name 2',
          required: false,
          data: children.lastName2,
        }"
        @input="getLastName2"
      />
      <inputDNI
        :variable="{ required: false, data: children.dni }"
        @dni="getDni"
      />
      <inputDate
        :variable="{
          value: 'Birthdate*',
          required: true,
          data: children.birthdate,
        }"
        @date="getBirthdate"
      />
      <inputGender
        :variable="{ required: true, data: children.gender }"
        @gender="getGender"
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
      <inputSelect
        :variable="{
          list: rates,
          placeholder: 'Rates*',
          required: true,
          data: children.rate,
        }"
        @select="getRate"
      />
      <div class=""></div>
      <inputTextArea
        :variable="{
          value: 'Other Data',
          required: false,
          data: children.other_data,
        }"
        @textArea="getOtherData"
      />

      <div class="">
        <inputFiles
          :variable="{
            value: 'DNI',
            person_info: {
              name: children.name,
              lastName1: children.lastName1,
              lastName2: children.lastName2,
            },
          }"
          @file="getDniUrl"
        />
        <inputFiles
          :variable="{
            value: 'Healt Card',
            person_info: {
              name: children.name,
              lastName1: children.lastName1,
              lastName2: children.lastName2,
            },
          }"
          @file="getHealtCardUrl"
        />
        <inputFiles
          :variable="{
            value: 'Family Book',
            person_info: {
              name: children.name,
              lastName1: children.lastName1,
              lastName2: children.lastName2,
            },
          }"
          @file="getFamilyBookUrl"
        />
      </div>
    </div>

    <h2>Tutor data</h2>

    <div class="ctn-btn">
      <button class="btn" @click="openModal"><span>+</span></button>
    </div>

    <div class="tutor-cnt">
      <h3>Tutor:</h3>
      <tutorList :list="listTutor" />
    </div>

    <modal
      v-model="openModal"
      :modal="modal"
      @modal="modalState"
      @user="getTutor"
    />

    <h2>Feeding Information</h2>

    <div class="ctn-info" id="feeding_info">
      <inputSelect
        :variable="{
          list: listNumbers,
          placeholder: 'Daily Meals*',
          required: true,
          data: feeding.daily_meals,
        }"
        @select="getDailyMeals"
      />
      <inputSelect
        :variable="{
          list: listNumbers,
          placeholder: 'Hours Meals*',
          required: true,
          data: feeding.hours_meals,
        }"
        @select="getHoursMeals"
      />
      <inputBoolean
        :variable="{
          value: 'Allergies Feeding*',
          required: true,
          data: feeding.allergies,
        }"
        @boolean="getAllergies"
      />
      <inputText
        :variable="{
          value: 'Types Allergies Feeding',
          required: false,
          data: feeding.type_allergies,
        }"
        @input="getTypeAllergies"
      />
      <inputTextArea
        :variable="{
          value: 'Observations',
          required: false,
          data: feeding.observations,
        }"
        @textArea="getObservationsFeeding"
      />
    </div>

    <h2>Health Information</h2>

    <div class="ctn-info" id="health_info">
      <inputBoolean
        :variable="{
          value: 'Problems Childbirth*',
          required: true,
          data: healt.problems_childbirth,
        }"
        @boolean="getProblemsChildbirth"
      />
      <inputText
        :variable="{
          value: 'Types Problems Childbirth',
          required: false,
          data: healt.type_problems_childbirth,
        }"
        @input="getTypeProblemsChildbirth"
      />
      <inputBoolean
        :variable="{
          value: 'Handicap*',
          required: true,
          data: healt.handicap,
        }"
        @boolean="getHandicap"
      />
      <inputText
        :variable="{
          value: 'Types Handicap',
          required: false,
          data: healt.type_handicap,
        }"
        @input="getTypeHandicap"
      />
      <inputBoolean
        :variable="{
          value: 'Serious Diseases*',
          required: true,
          data: healt.serious_diseases,
        }"
        @boolean="getDiseases"
      />
      <inputText
        :variable="{
          value: 'Types Serious Diseases',
          required: false,
          data: healt.type_diseases,
        }"
        @input="getTypeDiseases"
      />
      <inputBoolean
        :variable="{
          value: 'Operations*',
          required: true,
          data: healt.operations,
        }"
        @boolean="getOperations"
      />
      <inputText
        :variable="{
          value: 'Types Operations',
          required: false,
          data: healt.type_operations,
        }"
        @input="getTypeOperations"
      />
      <inputBoolean
        :variable="{
          value: 'Medication*',
          required: true,
          data: healt.medication,
        }"
        @boolean="getMedication"
      />
      <inputText
        :variable="{
          value: 'Types Medication',
          required: false,
          data: healt.type_medication,
        }"
        @input="getTypeMedication"
      />
      <inputBoolean
        :variable="{
          value: 'Drug Allergies*',
          required: true,
          data: healt.drug_allergies,
        }"
        @boolean="getDrugAllergies"
      />
      <inputText
        :variable="{
          value: 'Types Drug Allergies',
          required: false,
          data: healt.type_drug_allergies,
        }"
        @input="getTypeDrugAllergies"
      />
      <inputTextArea
        :variable="{
          value: 'Observations',
          required: false,
          data: healt.observations,
        }"
        @textArea="getObservationsHealt"
      />
    </div>

    <h2>Sleep Information</h2>

    <div class="ctn-info">
      <inputBoolean
        :variable="{
          value: 'Sleep Alone*',
          required: true,
          data: sleep.sleep_alone,
        }"
        @boolean="getSleepAlone"
      />
      <inputText
        :variable="{
          value: 'Who does he/she sleep with?',
          required: false,
          data: sleep.sleep_who,
        }"
        @input="getSleepWho"
      />
      <inputBoolean
        :variable="{
          value: 'Sleeping Object*',
          required: true,
          data: sleep.sleeping_object,
        }"
        @boolean="getSleepingObject"
      />
      <inputText
        :variable="{
          value: 'Type Sleeping Object',
          required: false,
          data: sleep.type_sleeping_object,
        }"
        @input="getTypeSleepingObject"
      />
      <inputSelect
        :variable="{
          list: listNightDream,
          placeholder: 'Night Dream*',
          required: true,
          data: sleep.night_dream,
        }"
        @select="getNightDream"
      />
      <inputText
        :variable="{
          value: 'Sleeping Posture*',
          required: true,
          data: sleep.sleeping_posture,
        }"
        @input="getSleepingPosture"
      />
      <inputTextArea
        :variable="{
          value: 'Observations',
          required: false,
          data: sleep.observations,
        }"
        @textArea="getObservationsSleep"
      />
    </div>

    <h2>Emotional State</h2>

    <div class="ctn-info">
      <inputSelect
        :variable="{
          list: listEmotionalState,
          placeholder: 'State*',
          required: true,
          data: emotional_state.state,
        }"
        @select="getState"
      />
      <inputTextArea
        :variable="{
          value: 'Observations',
          required: false,
          data: emotional_state.observations,
        }"
        @textArea="getObservationsEmotionalState"
      />
    </div>

    <div id="rules">
      <inputCheckbox
        :variable="{
          value: '',
          required: true,
          data: acceptRules,
        }"
        @boolean="getSleepingObject"
      />
      <span
        >The parents/guardians of the child have been informed of the
        <a href="#" target="_blank">regulations</a> of the center and accept
        said regulations*</span
      >
    </div>

    <div class="ctn-btn">
      <button class="btn" id="create-children" @click="nextPage">Next</button>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

import inputText from "@/components/InputText";
import inputDNI from "@/components/InputDNI";
import inputDate from "@/components/InputDate";
import inputGender from "@/components/InputGender";
import inputSelect from "@/components/InputSelect";
import inputTextArea from "@/components/InputTextArea";
import inputFiles from "@/components/InputFiles";
import modal from "@/components/ModalWindows";
import tutorList from "@/components/TutorList";
import inputBoolean from "@/components/InputBoolean";
import inputCheckbox from "@/components/InputCheckbox";

export default {
  components: {
    inputText,
    inputDNI,
    inputDate,
    inputGender,
    inputSelect,
    inputTextArea,
    inputFiles,
    modal,
    tutorList,
    inputBoolean,
    inputCheckbox,
  },
  data() {
    return {
      children: {
        name: "",
        lastName1: "",
        lastName2: "",
        dni: "",
        birthdate: "",
        rate: "",
        gender: "",
        address: "",
        other_data: "",
        documents: {
          dni: "",
          healt_card: "",
          family_book: "",
        },
      },
      error_msg: "",
      rates: [],
      listAddressType: [],
      address: {
        type: "",
        street: "",
        number: "",
        block: "",
        floor: "",
        letter: "",
      },
      listNumbers: [],
      modal: false,
      tutor: [],
      listTutor: [],
      feeding: {
        daily_meals: "",
        hours_meals: "",
        allergies: "",
        type_allergies: "",
        observations: "",
      },
      healt: {
        problems_childbirth: "",
        type_problems_childbirth: "",
        handicap: "",
        type_hadicap: "",
        serious_diseases: "",
        type_diseases: "",
        operations: "",
        type_operations: "",
        medication: "",
        type_medication: "",
        drug_allergies: "",
        type_drug_allergies: "",
        observations: "",
      },
      sleep: {
        sleep_alone: "",
        sleep_who: "",
        sleeping_object: "",
        type_sleeping_object: "",
        night_dream: "",
        sleeping_posture: "",
        observations: "",
      },
      listNightDream: [],
      emotional_state: {
        state: "",
        observations: "",
      },
      listEmotionalState: [],
      acceptRules: false,
    };
  },
  created() {
    this.getRates();
    this.getListAddressType();
    this.getListNumbers();
    this.getListNightDream();
    this.getListEmotionalState();
    if (JSON.parse(localStorage.getItem("children")))
      this.children = JSON.parse(localStorage.getItem("children"));
  },
  methods: {
    getRates() {
      Vue.axios
        .get("http://localhost:3000/api/v1/rates")
        .then((rates) => {
          this.rates = rates.data.data;
        })
        .catch((err) => {
          console.log("Error getting rates:" + err);
        });
    },
    getListAddressType() {
      this.listAddressType = require("../data/addressType.json");
    },
    getListNumbers() {
      this.listNumbers = require("../data/numbers.json");
    },
    getListNightDream() {
      this.listNightDream = require("../data/night_dream.json");
    },
    getListEmotionalState() {
      this.listEmotionalState = require("../data/emotionalState.json");
    },
    nextPage() {
      let checked = this.checkChildren();
      if (checked) {
        const address = this.address;
        const newChildren = {};
        newChildren.children = this.children;
        newChildren.tutor = this.tutor;
        Vue.axios
          .post("http://localhost:3000/api/v1/address", address)
          .then((res) => {
            newChildren.children.address = res.data._id;
            const feeding = this.feeding;
            Vue.axios
              .post("http://localhost:3000/api/v1/feeding", feeding)
              .then((res) => {
                newChildren.feeding = res.data._id;
                const health = this.healt;
                Vue.axios
                  .post("http://localhost:3000/api/v1/health", health)
                  .then((res) => {
                    newChildren.healt = res.data._id;
                    const sleep = this.sleep;
                    Vue.axios
                      .post("http://localhost:3000/api/v1/sleep", sleep)
                      .then((res) => {
                        newChildren.sleep = res.data._id;
                        const emotional = this.emotional_state;
                        Vue.axios
                          .post(
                            "http://localhost:3000/api/v1/emotional_state",
                            emotional
                          )
                          .then((res) => {
                            newChildren.emotional_state = res.data._id;
                            Vue.axios
                              .post(
                                "http://localhost:3000/api/v1/childrens",
                                newChildren
                              )
                              .then((res) => {
                                console.log("CREADO"+res.data);
                              })
                              .catch((err) => {
                                this.error_msg = "Error create children:" + err;
                              });
                          })
                          .catch((err) => {
                            this.error_msg = "Error create children:" + err;
                          });
                      })
                      .catch((err) => {
                        this.error_msg = "Error create children:" + err;
                      });
                  })
                  .catch((err) => {
                    this.error_msg = "Error create children:" + err;
                  });
              })
              .catch((err) => {
                this.error_msg = "Error create children:" + err;
              });
          })
          .catch((err) => {
            this.error_msg = "Error create children:" + err;
          });
      }
    },
    getName(input) {
      this.error_msg = input.error_msg;
      this.children.name = input.value;
    },
    getLastName1(input) {
      this.error_msg = input.error_msg;
      this.children.lastName1 = input.value;
    },
    getLastName2(input) {
      this.error_msg = input.error_msg;
      this.children.lastName2 = input.value;
    },
    getDni(dni) {
      this.error_msg = dni.error_msg;
      this.children.dni = dni.value;
    },
    getBirthdate(date) {
      this.error_msg = date.error_msg;
      this.children.birthdate = date.value;
    },
    getGender(gender) {
      this.error_msg = gender.error_msg;
      this.children.gender = gender.value;
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
    getRate(rate) {
      this.error_msg = rate.error_msg;
      this.children.rate = rate.value;
    },
    getOtherData(other_data) {
      this.error_msg = other_data.error_msg;
      this.children.other_data = other_data.value;
    },
    getDniUrl(file) {
      this.error_msg = file.error_msg;
      this.children.documents.dni = file.url;
    },
    openModal() {
      this.modal = !this.modal;
    },
    modalState(modalWindows) {
      this.modal = modalWindows;
    },
    getTutor(tutor) {
      this.tutor.push(tutor.id);
      this.listTutor.push(tutor);
    },
    getHealtCardUrl(file) {
      this.error_msg = file.error_msg;
      this.children.documents.healt_card = file.url;
    },
    getFamilyBookUrl(file) {
      this.error_msg = file.error_msg;
      this.children.documents.family_book = file.url;
    },
    getDailyMeals(number) {
      this.error_msg = number.error_msg;
      this.feeding.daily_meals = number.value;
    },
    getHoursMeals(number) {
      this.error_msg = number.error_msg;
      this.feeding.hours_meals = number.value;
    },
    getAllergies(boolean) {
      this.error_msg = boolean.error_msg;
      this.feeding.allergies = boolean.value;
    },
    getTypeAllergies(input) {
      this.error_msg = input.error_msg;
      this.feeding.type_allergies = input.value;
    },
    getObservationsFeeding(other_data) {
      this.error_msg = other_data.error_msg;
      this.feeding.observations = other_data.value;
    },
    getProblemsChildbirth(boolean) {
      this.error_msg = boolean.error_msg;
      this.healt.problems_childbirth = boolean.value;
    },
    getTypeProblemsChildbirth(input) {
      this.error_msg = input.error_msg;
      this.healt.type_problems_childbirth = input.value;
    },
    getHandicap(boolean) {
      this.error_msg = boolean.error_msg;
      this.healt.handicap = boolean.value;
    },
    getTypeHandicap(input) {
      this.error_msg = input.error_msg;
      this.healt.type_handicap = input.value;
    },
    getDiseases(boolean) {
      this.error_msg = boolean.error_msg;
      this.healt.serious_diseases = boolean.value;
    },
    getTypeDiseases(input) {
      this.error_msg = input.error_msg;
      this.healt.type_diseases = input.value;
    },
    getOperations(boolean) {
      this.error_msg = boolean.error_msg;
      this.healt.operations = boolean.value;
    },
    getTypeOperations(input) {
      this.error_msg = input.error_msg;
      this.healt.type_operations = input.value;
    },
    getMedication(boolean) {
      this.error_msg = boolean.error_msg;
      this.healt.medication = boolean.value;
    },
    getTypeMedication(input) {
      this.error_msg = input.error_msg;
      this.healt.type_medication = input.value;
    },
    getDrugAllergies(boolean) {
      this.error_msg = boolean.error_msg;
      this.healt.drug_allergies = boolean.value;
    },
    getTypeDrugAllergies(input) {
      this.error_msg = input.error_msg;
      this.healt.type_drug_allergies = input.value;
    },
    getObservationsHealt(other_data) {
      this.error_msg = other_data.error_msg;
      this.healt.observations = other_data.value;
    },
    getSleepAlone(boolean) {
      this.error_msg = boolean.error_msg;
      this.sleep.sleep_alone = boolean.value;
    },
    getSleepWho(input) {
      this.error_msg = input.error_msg;
      this.sleep.sleep_who = input.value;
    },
    getSleepingObject(boolean) {
      this.error_msg = boolean.error_msg;
      this.sleep.sleeping_object = boolean.value;
    },
    getTypeSleepingObject(input) {
      this.error_msg = input.error_msg;
      this.sleep.type_sleeping_object = input.value;
    },
    getNightDream(input) {
      this.error_msg = input.error_msg;
      this.sleep.night_dream = input.value;
    },
    getSleepingPosture(input) {
      this.error_msg = input.error_msg;
      this.sleep.sleeping_posture = input.value;
    },
    getObservationsSleep(other_data) {
      this.error_msg = other_data.error_msg;
      this.sleep.observations = other_data.value;
    },
    getState(input) {
      this.error_msg = input.error_msg;
      this.emotional_state.state = input.value;
    },
    getObservationsEmotionalState(other_data) {
      this.error_msg = other_data.error_msg;
      this.emotional_state.observations = other_data.value;
    },
    checkChildren() {
      const children = this.children;
      const address = this.address;
      const feeding = this.feeding;
      const healt = this.healt;
      const sleep = this.sleep;
      const emotional_state = this.emotional_state;
      const tutorList = this.tutorList;
      const acepptRules = this.acepptRules;
      if (
        children.name == "" ||
        children.lastName1 == "" ||
        children.gender == "" ||
        children.birthdate == "" ||
        children.address == "" ||
        address.type == "" ||
        address.street == "" ||
        address.number == "" ||
        children.rate == "" ||
        feeding.daily_meals == "" ||
        feeding.hours_meals == "" ||
        feeding.allergies == "" ||
        healt.problems_childbirth == "" ||
        healt.handicap == "" ||
        healt.serious_diseases == "" ||
        healt.operations == "" ||
        healt.medication == "" ||
        healt.drug_allergies == "" ||
        sleep.sleep_alone == "" ||
        sleep.sleeping_object == "" ||
        sleep.night_dream == "" ||
        sleep.sleeping_posture == "" ||
        emotional_state.state == "" ||
        acepptRules == false
      ) {
        this.error_msg = "All fields with * are required";
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
