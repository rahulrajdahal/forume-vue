<template>
  <main class="main-section">
    <div class="main-card" v-for="discussion in discussions" :key="discussion.title">
      <div class="likes">
        <font-awesome-icon icon="arrow-up" />
        <p>65</p>
        <font-awesome-icon icon="arrow-down" />
      </div>

      <div class="card">
        <router-link :to="{ name:'Discuss', params: { slug:discussion.slug } }">
          <div class="card-header">
            <h4>{{ discussion.question }}</h4>
            <span class="badge">Question</span>
          </div>
        </router-link>

        <div class="card-body">
          <p>{{ discussion.content }}</p>
        </div>

        <div class="card-footer">
          <div class="author">
            <img src="../assets/user.png" alt class="nav-img" />
            <p>
              Postd by:
              <b>{{ discussion.author }}</b>
            </p>
            <div class="time">12hrs ago</div>
          </div>

          <div class="views">
            <font-awesome-icon icon="tv" />60+
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import store from "@/store.js";
export default {
  name: "Home",
  data() {
    return {
      discussions: store.discussions
    };
  }
};
</script>


<style scoped>
.main-section {
  grid-area: main-section;
  background: #fcfcfc 0% 0% no-repeat padding-box;
  border-radius: 10px;
  opacity: 1;
}
a {
  text-decoration: none;
  color: inherit;
}

.main-card,
.reply-main-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  margin-bottom: 2rem;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 10px;
  opacity: 1;
}

.likes {
  align-self: flex-start;
  margin-right: 1rem;
}

.card-header {
  display: flex;
  align-items: center;
}

.card-header span {
  margin-left: 1rem;
}

.card-body {
  text-align: left;
  font: Regular 16px/29px Circular Std Book;
  letter-spacing: 0px;
  color: #8b8b8b;
  opacity: 1;
  padding: 1rem 0;
  border-bottom: 1px solid #f3f3f3;
}

.card-footer {
  padding: 1rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.author {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.author p {
  justify-self: flex-start;
  margin-left: -10rem;
}

.nav-img {
  width: 8%;
}

.badge {
  padding: 0.2rem;
  background: #3d5af1 0% 0% no-repeat padding-box;
  border-radius: 3px;
  opacity: 1;
  text-align: left;
  font: Regular 12px/16px Circular Std Medium;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
}
</style>