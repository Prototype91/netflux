<template>
  <Loader :isLoading="isLoading" />
  <section v-if="show && !this.isLoading">
    <img :src="episodes[0]?.image?.original" :alt="show.name" />
    <div class="content">
      <h1>{{ show.name }}</h1>
      <p class="rating">
        <i class="fa-regular fa-star"></i> {{ show?.rating?.average }}
      </p>
      <p v-if="show.summary">{{ finalSummary }}</p>
    </div>

    <div>
      <h2>Seasons</h2>
      <div v-for="(season, seasonIndex) in seasons" :key="seasonIndex">
        <h3>Season {{ seasonIndex + 1 }}</h3>

        <div class="season-ctnr">
          <EpisodeCard
            v-for="(episode, episodeIndex) in episodes.filter(
              (item) => item.season === seasonIndex + 1
            )"
            :key="episodeIndex"
            :episode="episode"
          />
        </div>
      </div>
    </div>

    <div>
      <h2>Cast</h2>

      <div class="season-ctnr">
        <CastCard v-for="(actor, index) in cast" :key="index" :cast="actor" />
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import CastCard from "../components/CastCard";
import EpisodeCard from "../components/EpisodeCard";
import Loader from "../components/Loader.vue";

export default {
  name: "Details",
  components: { CastCard, EpisodeCard, Loader },
  data() {
    return {
      show: {},
      seasons: [],
      episodes: [],
      cast: [],
      isLoading: true,
    };
  },
  computed: {
    finalSummary() {
      return this.show.summary
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
        .get(
          `https://api.tvmaze.com/shows/${id}?embed[]=seasons&embed[]=episodes&embed[]=cast`
        )
        .then((res) => {
          this.show = res.data;
          this.seasons = res.data._embedded.seasons;
          this.episodes = res.data._embedded.episodes;
          this.cast = res.data._embedded.cast;
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

section h3 {
  text-align: left;
}

img {
  max-width: 60%;
  margin: 0 auto;
  display: flex;
}

.season-ctnr {
  display: flex;
  gap: 20px;
  overflow: scroll;
}

.content {
  margin-bottom: 100px;
}
.content p:not(.rating) {
  text-align: left;
}
</style>
