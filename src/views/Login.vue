<template>
  <div class id="login">
    <div class="cnt-login">
      <div class="grip-logo">
        <div class></div>
        <div class>
          <img src="../assets/logo-baby.png" alt id="logo-login" />
        </div>
      </div>
      <div class="border-login">
        <div class="inputs">
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
            v-model="username"
            class="input-login"
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            v-model="password"
            class="input-login"
          />
        </div>
        <div class="cnt-btn-login">
          <button class="btn-login" @click="login">Login</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: username,
      password: password,
    };
  },
  methods: {
    login() {
      console.log(this.username + this.password);
      this.$router.push("/");
    }
  }
};
</script>

<style scope>
.grip-logo {
  display: grid;
  grid-template-columns: 10% auto;
}

.cnt-login {
  display: flex;
  flex-direction: column;
  width: 70%;
  flex: 1;
}

#logo-login {
  position: relative;
  top: 12%;
  display: flex;
  margin-top: 10%;
}

#login {
  display: flex;
  align-items: center;
  flex: 1;
  flex-direction: column;
}

.border-login {
  border: #a64244 solid 3px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 30px;
}

.inputs {
  display: flex;
  justify-content: space-around;
  flex-direction: column;
}

.input-login {
  padding: 5px;
  margin: 10px;
}

.cnt-btn-login {
  display: flex;
  justify-content: flex-end;
}
</style>