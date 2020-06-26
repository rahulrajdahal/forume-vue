<template>
  <main class="main-section">
    <div class="main-card">
      <div class="likes">
        <i class="fa fa-arrow-up"></i>
        <p>65</p>
        <i class="fa fa-arrow-down"></i>
      </div>

      <div class="card">
        <div class="card-header">
          <h4>{{ discussion.question }}</h4>
          <span class="badge">Question</span>
        </div>

        <div class="card-body">
          <p>{{ discussion.content }}</p>
        </div>

        <div class="reply-card-footer">
          <div class="reply-main-card">
            <div class="reply-likes">
              <i class="fa fa-arrow-up"></i>
              <p>65</p>
              <i class="fa fa-arrow-down"></i>
            </div>

            <div v-for="(reply,index) in discussion.replies" :key="index" class="card">
              <div class="card-header">
                <div class="reply-author">
                  <!-- <img src="{{ asset($reply->user->avatar)}}" alt="" class="nav-img" /> -->
                  <p>
                    <b>{{ reply.user_id }}</b>
                  </p>
                </div>

                <div class="views">Views</div>
              </div>

              <div class="card-body">
                <p>{{ reply.reply }}</p>
              </div>

              <div class="reply-footer">
                <p>Reply</p>
                <p>Share</p>
                <p>Report</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import store from "@/store.js";
export default {
  data() {
    return {};
  },
  computed: {
    discussion() {
      return store.discussions.find(
        discussion => discussion.slug === this.slug
      );
    }
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

.reply-likes {
  margin-right: 2rem;
}

.reply-card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.5rem;
}

.reply-author {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.reply-author p {
  margin-left: 2rem;
}

.reply-footer {
  display: flex;
  justify-content: stretch;
  align-items: center;
  padding-top: 1rem;
}

.reply-footer p {
  margin-right: 2rem;
}
</style>