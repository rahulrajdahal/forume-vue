<template>
  <aside class="users">
    <button class="btn">+ Start a New Topic</button>

    <div class="users-card">
      <h4>Top Users</h4>

      <div class="user-card" v-for="(author, index) in authors" :key="index">
        <div class="user-info">
          <img src="../assets/user.png" alt class="nav-img" />
          <b>{{ author }}</b>
        </div>
        <div class="user-score">
          <p>15.5k</p>
          <font-awesome-icon icon="arrow-up" />
        </div>
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  name: "AsideUsers",
  data() {
    return {
      authors: ["Rahul", "Aakash", "Ashmita"]
    };
  }
};
</script>

<style scoped>
.users {
  grid-area: users;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.users button {
  margin-bottom: 2rem;
}

.users-card {
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 10px;
  opacity: 1;
  align-items: center;
  padding: 0.5rem;
}

.user-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-img {
  width: 8%;
}

.user-info,
.user-score {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.btn {
  padding: 0.75rem 2rem;
  background: #3d5af1 0% 0% no-repeat padding-box;
  border-radius: 5px;
  opacity: 1;
  text-align: left;
  font: Regular 16px/22px Circular Std Book;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
  border: none;
}
</style>