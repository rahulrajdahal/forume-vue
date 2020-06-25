<template>
  <div id="app">
    <nav-bar />
    <div class="wrapper">
      <aside-menu class="menu" />
      <main-section class="main-section" />
      <aside-users class="users" />
    </div>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import AsideMenu from "./components/AsideMenu.vue";
import MainSection from "./components/MainSection.vue";
import AsideUsers from "./components/AsideUsers.vue";

export default {
  name: "App",
  components: {
    "nav-bar": NavBar,
    "aside-menu": AsideMenu,
    "main-section": MainSection,
    "aside-users": AsideUsers
  }
};
</script>

<style scoped>
@font-face {
  font-family: CircularStd;
  src: url(./assets/CircularStd-Book.ttf);
}

#app {
  font-family: "CircularStd";
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  background: #fcfcfc 0% 0% no-repeat padding-box;
  opacity: 1;
}

.wrapper {
  display: grid;
  grid-template-areas: "menu main-section users";
  grid-template-columns: 1fr 3fr 1fr;
  grid-template-rows: 1fr;
  grid-gap: 1rem;
  padding: 2rem 0;
}

.menu {
  grid-area: menu;
}

.main-section {
  grid-area: main-section;
}

.users {
  grid-area: users;
}
</style>
