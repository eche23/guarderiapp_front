<template>
  <div id="app">
    <div id="nav" v-if="$route.path!=='/login'">
      <input type="checkbox" id="btn-menu" />
      <label for="btn-menu" id="border-menu">
        <menu-icon id="icon-menu" />
      </label>
      <div class="menu">
        <img id="logo" alt="Vue logo" src="./assets/logo-baby.png" />
        <router-link to="/" class="menu-item">Entradas/Salidas</router-link>
        <router-link to="/about" class="menu-item">Base de Datos</router-link>
        <router-link to="/about" class="menu-item">Facturación</router-link>
        <router-link to="/about" class="menu-item">Gastos</router-link>
        <router-link to="/about" class="menu-item">Notificaciones</router-link>
        <router-link to="/about" class="menu-item">Agendas</router-link>
        <router-link to="/about" class="menu-item">Cerrar Sesión</router-link>
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
  height: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-wrap: wrap;
  height: 100%;
}

#btn-menu {
  display: none;
}

#icon-menu {
  display: none;
}

#nav {
  padding: 10px;
  display: flex;
  background: #79f29a;
  justify-content: center;
}

.menu {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

#nav a {
  font-weight: bold;
  color: #ffffff;
}

#nav a.router-link-exact-active {
  color: #a64244;
}

.menu-item {
  text-decoration: none;
  font-size: 20px;
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
    height: 100%;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: start;
  }

  .menu {
    display: none;
  }

  #btn-menu:checked ~ .menu {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
  }
}
</style>
