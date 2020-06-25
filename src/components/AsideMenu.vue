<template>
  <aside class="menu">
    <h3>Menu</h3>

    <ul class="menu-links">
      <li class="menu-link">
        <font-awesome-icon icon="home" />
        <b>Home</b>
      </li>
      <li class="menu-link">
        <font-awesome-icon icon="compass" />
        <b>Explore</b>
      </li>
      <li class="menu-link">
        <font-awesome-icon icon="question" />
        <b class="topic">My Topics</b>
      </li>
      <li class="menu-link">
        <font-awesome-icon icon="tv" />
        <b class="answer">My Answers</b>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  name: "AsideMenu"
};
</script>

<style scoped>
.menu {
  opacity: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  color: #8b8b8b;
}

.menu-link {
  display: flex;
  padding: 0.75rem;
  cursor: pointer;
  align-items: center;
}

.menu-link b {
  margin-left: 1rem;
}
</style>