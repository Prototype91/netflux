<template>
  <Loader :isLoading="isLoading" />
  <section v-if="show && !this.isLoading">
    <img
      v-if="episodes[0].image"
      :src="episodes[0].image"
      :alt="episodes[0].name"
    />
    <img v-else src="../assets/no-image.jpg" alt="" />
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
          <div class="scroll-ctn">
          <EpisodeCard
            v-for="(episode, episodeIndex) in episodes.filter(
              (item) => item.season === seasonIndex + 1
            )"
            :key="episodeIndex"
            :episode="episode"
          />
        </div>
        <SlidingButtons />
          
        </div>
      </div>
    </div>
    <div>
      <h2>Cast</h2>
      <div class="season-ctnr">
        <div class="scroll-ctn">
          <CastCard v-for="(actor, index) in cast" :key="index" :cast="actor" />
        </div>
        <SlidingButtons />
      </div>
    </div>
    <div>
      <h2>Comments</h2>
      <form class="comment-form" @submit.prevent="addComment()">
        <textarea
          v-model="comment.text"
          placeholder="Write a comment here ..."
        />
        <button type="submit">Send</button>
      </form>
      <div>
        <p v-for="(c, index) in comments" :key="index">
          {{ c.comment.username }} - {{ c.comment.text }} - {{ c.comment.date }}
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import CastCard from "../components/CastCard";
import EpisodeCard from "../components/EpisodeCard";
import SlidingButtons from "../components/SlidingButtons";
import Loader from "../components/Loader.vue";
import ShowsClient from "../services/clients/shows.client";
import ShowsMapper from "../services/mappers/shows.mapper";
import SeasonsMapper from "../services/mappers/seasons.mapper";
import EpisodesMapper from "../services/mappers/episodes.mapper";
import CastMapper from "../services/mappers/cast.mapper";
import ShowsHelper from "../services/helpers/shows.helper";
import ShowsRepository from "../services/repositories/shows.repository";
import moment from "moment";

export default {
  name: "ShowDetails",
  components: { CastCard, EpisodeCard, Loader, SlidingButtons },
  data() {
    return {
      show: {},
      seasons: [],
      episodes: [],
      cast: [],
      isLoading: true,
      comment: {
        id: null,
        text: null,
        username: "Anonymous",
      },
    };
  },
  computed: {
    comments() {
      return this.$store.getters.getComments(this.show.id);
    },
    finalSummary() {
      return ShowsHelper.getSummary(this.show.summary);
    },
  },
  methods: {
    getDetails() {
      ShowsClient.getShowDetails(this.$route.params.id)
        .then((res) => {
          this.show = ShowsMapper.mapToShow(res.data);
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
    addComment() {
      if (this.comment.text?.trim()?.length) {
        ShowsRepository.storeComment({
          ...this.comment,
          id: this.show.id,
          date: moment(new Date()).local(true).format("DD/MM/YYYY - HH:mm"),
        });
      }
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
  position: relative;
}

.season-ctnr .scroll-ctn {
  display: flex;
  gap: 20px;
  overflow: scroll;
  position: relative;
  -ms-overflow-style: none;
  scroll-behavior: smooth;
}

.season-ctnr .scroll-ctn::-webkit-scrollbar {
  display: none;
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
  color: white;
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
