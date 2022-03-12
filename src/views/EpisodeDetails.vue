<template>
  <Loader :isLoading="isLoading" />
  <section v-if="!isLoading">
    <img v-if="episode.image" :src="episode.image" :alt="episode.name" />
    <img v-else src="../assets/no-image.jpg" alt="" />
    <div class="content">
      <h1>{{ episode.name }}</h1>
      <p class="rating">
        <i class="fa-regular fa-star"></i> {{ episode?.rating }}
      </p>
      <p v-if="episode.summary">{{ finalSummary }}</p>
    </div>
  </section>
</template>

<script>
import Loader from "../components/Loader.vue";
import EpisodesClient from "../services/clients/episodes.client";
import EpisodesMapper from "../services/mappers/episodes.mapper";
import ShowsHelper from "../services/helpers/shows.helper";

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
      return ShowsHelper.getSummary(this.episode.summary);
    },
  },
  methods: {
    getDetails() {
      EpisodesClient.getEpisodeDetails(this.$route.params.id)
        .then((res) => {
          this.episode = EpisodesMapper.mapToEpisode(res.data);
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
