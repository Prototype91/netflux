<template>
  <Loader :isLoading="isLoading" />
  <section v-if="!isLoading">
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
import Loader from "../components/Loader.vue";

export default {
  name: "EpisodeDetails",
  components: { Loader },
  data() {
    return {
      episode: {},
      isLoading: true,
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
        .then((res) => {
          this.episode = res.data;
          setTimeout(() => {
            this.isLoading = false;
          }, 1000);
        })
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

.content {
  width: 80%;
  margin: 0 auto;
}

img {
  max-width: 60%;
  display: flex;
  margin: 0 auto;
}
</style>
