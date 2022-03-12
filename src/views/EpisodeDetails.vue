<template>
  <section>
    <img :src="episode?.image?.original" :alt="episode.name" />
    <div class="content">
      <h1>{{ episode.name }}</h1>
      <p class="rating">
        <i class="fa-regular fa-star"></i> {{ episode?.rating?.average }}
      </p>
      <p v-if="episode.summary">{{ finalSummary }}</p>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "EpisodeDetails",
  data() {
    return {
      episode: {},
    };
  },
  computed: {
    finalSummary() {
      return this.episode.summary
        .replaceAll("<p>", "")
        .replaceAll("</p>", "")
        .replaceAll("<b>", "")
        .replaceAll("</b>", "");
    },
  },
  methods: {
    getDetails() {
      let id = this.$route.params.id;

      axios
        .get(`https://api.tvmaze.com/episodes/${id}`)
        .then((res) => (this.episode = res.data))
        .catch((err) => console.error(err));
    },
  },
  mounted() {
    this.getDetails();
  },
};
</script>

<style scoped>
section {
  padding: 50px;
  color: white;
  text-align: center;
}

section p:not(.rating) {
  text-align: left;
}

img {
  max-width: 60%;
  display: flex;
  margin: 0 auto;
}
</style>
