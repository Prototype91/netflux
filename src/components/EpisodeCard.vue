<template>
  <router-link class="card" :to="'/episode/' + episode.id">
    <img v-if="episode.image" :src="episode.image" :alt="episode.name" />
    <img v-else src="../assets/no-image.jpg" alt="" />
    <p class="rating">
      <i class="fa-regular fa-star"></i> {{ episode.rating }}
    </p>
    <p>{{ episode.name }}</p>
  </router-link>
</template>

<script>
export default {
  name: "EpisodeCard",
  props: {
    episode: {},
  },
};
</script>

<style scoped>
.card {
  position: relative;
  text-decoration: none;
  color: white;
}

.rating {
  margin: 0;
  position: absolute;
  top: 10px;
  right: 10px;
  color: orange;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 1px 2px;
}
</style>
