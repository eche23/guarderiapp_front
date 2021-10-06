<template>
  <div id="app">
    <div id="nav" v-if="$route.path !== '/login'">
      <input type="checkbox" id="btn-menu" />
      <label for="btn-menu" id="border-menu">
        <menu-icon id="icon-menu" />
      </label>
      <div class="menu">
        <img id="logo" alt="Vue logo" src="./assets/logo-baby.png" />
        <ul>
          <li>
            <h2>NIÑOS</h2>
            <ul>
              <li>
                <router-link to="/" class="menu-item"
                  >Entradas/Salidas</router-link
                >
              </li>
              <li>
                <router-link to="/new" class="menu-item">Agendas</router-link>
              </li>
              <li>
                <router-link to="/about" class="menu-item"
                  >Base de Datos</router-link
                >
              </li>
            </ul>
          </li>
          <li>
            <h2>FACTURACION</h2>
            <ul>
              <li>
                <router-link to="/about" class="menu-item"
                  >Facturación</router-link
                >
              </li>
              <li>
                <router-link to="/about" class="menu-item">Gastos</router-link>
              </li>
            </ul>
          </li>
          <li>
            <router-link to="/about" class="menu-item"
              >NOTIFICACIONES</router-link
            >
          </li>
          <li>
            <router-link to="/about" class="menu-item"
              >CERRAR SESION</router-link
            >
          </li>
        </ul>
      </div>
    </div>
    <router-view />
  </div>
</template>

<style>
html {
  height: 100%;
}
body {
  margin: 0;
  background: #f4f4f4;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#btn-menu {
  display: none;
}

#icon-menu {
  display: none;
}

#nav {
  padding: 10px;
  background: #32a651;
  display: flex;
  position: fixed;
  width: 100%;
}

#logo {
  height: 80px;
  width: auto;
}
ul {
  list-style: none;
  display: flex;
  align-items: center;
}

.menu {
  display: flex;
}

#nav > li {
  float: right;
}

#nav li a {
  color: #ffffff;
  text-decoration: none;
  display: block;
}

#nav li ul {
  background-color: #32a651;
  display: none;
  position: absolute;
  padding: 10px 12px;
  min-width: 140px;
  border-radius: 15px;
}

#nav li:hover > ul {
  display: block;
}

#nav li ul li {
  position: relative;
}

#nav li ul li ul {
  right: -140px;
  top: 0px;
}

#nav h2 {
  font-weight: bold;
  margin: 0 10px;
  color: #ffffff;
}

#nav a {
  font-weight: bold;
  margin: 0 10px;
  color: #ffffff;
}

#nav a.router-link-exact-active {
  color: #a64244;
}

.menu-item {
  text-decoration: none;
  font-size: 24px;
}

h1 {
  color: #f1797b;
  text-align: left;
  margin-top: 10%;
}

h2 {
  color: #F26163;
}

@media (max-width: 768px) {
  #icon-menu {
    display: block;
    color: #ffffff;
    cursor: pointer;
    border: #ffffff solid 1px;
    border-radius: 6px;
    padding: 5px;
    margin: 5px;
  }

  #border-menu {
    max-width: 46px;
  }

  #nav {
    position: absolute;
    display: flex;
    justify-content: start;
  }

  .menu {
    display: none;
  }

  #btn-menu:checked ~ .menu {
    display: flex;
    justify-content: space-around;
    height: 100%;
  }
}

@media (max-width: 576px){
  h1{
    margin-top: 15%;
  }
}
</style>
