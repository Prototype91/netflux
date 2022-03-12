<template>
  <Loader :isLoading="isLoading" />
  <section v-if="show && !this.isLoading">
    <img :src="episodes[0]?.image" :alt="show.name" />
    <div class="content">
      <h1>{{ show.name }}</h1>
      <p class="rating">
        <i class="fa-regular fa-star"></i> {{ show?.rating }}
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

    <div>
      <h2>Comments</h2>

      <form class="comment-form">
        <textarea placeholder="Write a comment here ..." />
        <button>Send</button>
      </form>
    </div>
  </section>
</template>

<script>
import CastCard from "../components/CastCard";
import EpisodeCard from "../components/EpisodeCard";
import Loader from "../components/Loader.vue";
import ShowsClient from "../services/clients/shows.client";
import ShowsMapper from "../services/mappers/shows.mapper";
import SeasonsMapper from "../services/mappers/seasons.mapper";
import EpisodesMapper from "../services/mappers/episodes.mapper";
import CastMapper from "../services/mappers/cast.mapper";
import ShowsHelper from "../services/helpers/shows.helper";

export default {
  name: "ShowDetails",
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
      return ShowsHelper.getSummary(this.show.summary);
    },
  },
  methods: {
    getDetails() {
      ShowsClient.getShowDetails(this.$route.params.id)
        .then((res) => {
          this.show = ShowsMapper.mapToShow(res.data);
          console.log(res.data);
          this.seasons = SeasonsMapper.mapToSeasons(res.data._embedded.seasons);
          this.episodes = EpisodesMapper.mapToEpisodes(
            res.data._embedded.episodes
          );
          this.cast = CastMapper.mapToCast(res.data._embedded.cast);
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
  color: #fff;
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
  margin: 0 auto 100px auto;
  width: 80%;
}
.content p:not(.rating) {
  text-align: left;
}

.comment-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.comment-form textarea {
  background-color: rgb(20, 20, 20);
  padding: 10px;
  width: 50%;
  height: 200px;
}

.comment-form button {
  all: unset;
  background-color: white;
  color: black;
  padding: 0.5em 1.5em;
  cursor: pointer;
  font-weight: 700;
}

.comment-form button:hover {
  background-color: #c00;
  color: #fff;
}
</style>
