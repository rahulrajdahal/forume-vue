<template>
  <div>
    <nav class="navbar">
      <router-link to="/">
        <div class="logo">
          <font-awesome-icon icon="wallet" class="wallet" />
          <h2>Forume</h2>
        </div>
      </router-link>

      <div class="search">
        <font-awesome-icon icon="search" class="search-icon" />
        <input type="text" class="search-input" placeholder="Search for Topics" />
      </div>

      <div class="nav-links">
        <font-awesome-icon icon="bell" class="bell-icon" />
        <img src="../assets/user.png" alt class="nav-img" />
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavBar"
};
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 1px 15px #00000017;
  opacity: 1;
}
a {
  text-decoration: none;
  color: inherit;
}
.logo {
  display: flex;
  justify-content: space-between;
  align-items: center;
  opacity: 1;
  color: #3d5af1;
}

.wallet {
  margin: 0 1rem;
}

.search {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f3f3f3 0% 0% no-repeat padding-box;
  border-radius: 5px;
  opacity: 1;
  padding: 0 1rem;
  width: 50%;
  margin-left: 20rem;
}

.search-icon {
  color: #aaaaaa;
}

.search-input {
  background: #f3f3f3 0% 0% no-repeat padding-box;
  border-radius: 5px;
  opacity: 1;
  border: none;
  padding: 1rem;
  width: 100%;
  outline: none;
}

.nav-links {
  margin-left: 10rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.bell-icon {
  margin-left: 10rem;
}

.nav-img {
  width: 8%;
}
</style>