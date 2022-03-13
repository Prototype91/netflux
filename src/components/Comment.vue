<template>
  <div class="comment">
    <div class="comment-header">
      <i class="fa-solid fa-circle-user"></i>
      <div>
        <p class="username">{{ comment.username }}</p>
        <p>{{ fromNowDate(comment.date) }}</p>
      </div>
    </div>
    <p class="comment-content">{{ comment.text }}</p>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "Comment",
  props: { comment: {} },
  methods: {
    fromNowDate(date) {
      return moment(date * 1000).fromNow();
    },
  },
};
</script>

<style scoped>
p {
  margin: 0;
}

.comment {
  text-align: left;
  border: 1px solid #757474;
  width: 40%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.comment .comment-header {
  display: flex;
  align-items: center;
  gap: 10px;
}

.comment-header svg {
  width: 8%;
  height: 8%;
}

.comment .username {
  font-weight: 500;
  margin-bottom: 5px;
}

.comment {
  word-break: break-word;
}

.comment p:not(.username, .comment-content) {
  font-weight: 300;
  font-size: 14px;
}

.comment-content {
  line-height: 1.5;
}
</style>
