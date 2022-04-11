<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/scroll">Smooth Scroll</router-link> |
    <router-link to="/dropdown">Dropdown</router-link> |
    <router-link to="/rendering">Conditional Rendering</router-link> |
    <router-link to="/modals">Modals</router-link> |
    <router-link to="/plugins">Plugins</router-link> |
    <router-link to="/dialogs">Confirmation Dialogs</router-link> |
    <router-link to="/svgs">Inline SVGs</router-link> |
    <router-link to="/tabs">Tabs</router-link>
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #38bdf8;
}
</style>
