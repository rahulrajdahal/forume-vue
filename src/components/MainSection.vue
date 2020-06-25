<template>
  <main class="main-section">
    <div class="main-card" v-for="(discussion, index) in discussions" :key="index">
      <div class="likes">
        <font-awesome-icon icon="arrow-up" />
        <p>65</p>
        <font-awesome-icon icon="arrow-down" />
      </div>

      <div class="card">
        <div class="card-header">
          <h4>{{ discussion.discussionQuestion }}</h4>
          <span class="badge">Question</span>
        </div>

        <div class="card-body">
          <p>{{ discussion.discussionContent }}</p>
        </div>

        <div class="card-footer">
          <div class="author">
            <img src="../assets/user.png" alt class="nav-img" />
            <p>
              Postd by:
              <b>{{ discussion.discussionAuthor }}</b>
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
export default {
  name: "MainSection",
  data() {
    return {
      discussions: [
        {
          discussionQuestion: "What does the fox Say?",
          discussionContent:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto vitae soluta eos, magni officia enim culpa quaerat delectus quibusdam ea et vel reprehenderit possimus aliquam quas, suscipit fugiat repellendus asperiores iusto laborum repellat in nemo tenetur quis. In a, architecto reprehenderit unde ad cum voluptas dolorem dicta, placeat pariatur facere.",
          discussionAuthor: "Author"
        },
        {
          discussionQuestion: "What does the fox Say?",
          discussionContent:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto vitae soluta eos, magni officia enim culpa quaerat delectus quibusdam ea et vel reprehenderit possimus aliquam quas, suscipit fugiat repellendus asperiores iusto laborum repellat in nemo tenetur quis. In a, architecto reprehenderit unde ad cum voluptas dolorem dicta, placeat pariatur facere.",
          discussionAuthor: "Author"
        },
        {
          discussionQuestion: "What does the fox Say?",
          discussionContent:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto vitae soluta eos, magni officia enim culpa quaerat delectus quibusdam ea et vel reprehenderit possimus aliquam quas, suscipit fugiat repellendus asperiores iusto laborum repellat in nemo tenetur quis. In a, architecto reprehenderit unde ad cum voluptas dolorem dicta, placeat pariatur facere.",
          discussionAuthor: "Author"
        },
        {
          discussionQuestion: "What does the fox Say?",
          discussionContent:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto vitae soluta eos, magni officia enim culpa quaerat delectus quibusdam ea et vel reprehenderit possimus aliquam quas, suscipit fugiat repellendus asperiores iusto laborum repellat in nemo tenetur quis. In a, architecto reprehenderit unde ad cum voluptas dolorem dicta, placeat pariatur facere.",
          discussionAuthor: "Author"
        }
      ]
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