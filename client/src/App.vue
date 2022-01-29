<template>
  <div id="app">
    <div id="nav" v-if="this.$route.path != '/tmbr'">
      <router-link to="/">Home</router-link> |
      <router-link to="/settings">Settings</router-link> |
      <router-link to="/tmbr">Tmbr</router-link>
      {{ this.$route.path }}
    </div>
    <router-view />
  </div>
</template>

<style>
html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  /* padding: env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left); */
  touch-action: manipulation;
}
#app {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
router-view {
  width: 100%;
  height: 100%;
}
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
* {
  max-width: 100%;
  height: auto;
}
pre,
code {
  max-width: auto;
  /* white-space: pre-wrap; */
  overflow-x: scroll;
}
</style>
