<template>
  <div class="input-file">
    <label for="file">{{ variable.value }}:</label>
    <input type="file" id="file" @change="previewFile" accept="image/*" />
    <span>Progress: {{ uploadValue.toFixed() + "%" }}</span>
    <button v-if="fileData != null" @click="onUpload" class="btn">
      Upload
    </button>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "inputFiles",
  props: {
    variable: {
      value: String,
      person_info: {
        name: String,
        lastName1: String,
        lastName2: String,
      },
    },
  },
  data() {
    return {
      fileData: null,
      picture: null,
      uploadValue: 0,
      file: {
        url: "",
        error_msg: "",
      },
    };
  },
  methods: {
    previewFile(event) {
      this.uploadValue = 0;
      this.picture = null;
      this.fileData = event.target.files[0];
    },
    onUpload() {
      this.picture = null;
      let nameFile = this.nameFile().toUpperCase();
      let type = this.variable.value.replace(" ", "_").toUpperCase();

      if (nameFile != null) {
        const storageRef = firebase
          .storage()
          .ref(`${nameFile}/${type}_${nameFile}`)
          .put(this.fileData);
        storageRef.on(
          `state_changed`,
          (snapshot) => {
            this.uploadValue =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          },
          (error) => {
            this.file.error_msg = error.message;
            this.$emit("file", this.file);
          },
          () => {
            this.uploadValue = 100;
            storageRef.snapshot.ref.getDownloadURL().then((url) => {
              this.file.url = url;
              this.$emit("file", this.file);
            });
          }
        );
      }
    },
    nameFile() {
      if (
        this.variable.person_info.name == "" ||
        this.variable.person_info.lastName1 == ""
      ) {
        this.file.error_msg =
          "Name and Last Name must be defined to upload the files.";
        return null;
      } else {
        this.file.error_msg = "";
        let name;
        if (this.variable.person_info.lastName2 == "") {
          name =
            this.variable.person_info.lastName1.replace(" ", "_") +
            "_" +
            this.variable.person_info.name.replace(" ", "_");
        } else {
          name =
            this.variable.person_info.lastName1.replace(" ", "_") +
            "_" +
            this.variable.person_info.lastName2.replace(" ", "_") +
            "_" +
            this.variable.person_info.name.replace(" ", "_");
        }
        return name;
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.input-file {
  padding: 10px;
  margin: 1%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.input-file * {
  margin: 0 5px;
}

.btn {
  background: #32a651;
  font-weight: bold;
  font-size: 20px;
  color: #ffffff;
  border: #a64244 1px solid;
}
</style>
