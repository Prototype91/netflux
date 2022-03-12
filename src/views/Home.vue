<template>
  <Loader :isLoading="isLoading" />
  <div class="best-shows" v-if="!isLoading">
    <h3>The best shows :</h3>

    <div class="shows-ctnr">
      <div class="scroll-ctn">
        <ShowCard
          v-for="(show, index) in shows.filter((item) => item.rating >= 8.5)"
          :key="index"
          :show="show"
        />
      </div>
      <SlidingButtons />
    </div>
  </div>
  <div class="best-shows" v-if="!isLoading">
    <h3>Science-fiction shows :</h3>

    <div class="shows-ctnr">
      <div class="scroll-ctn">
        <ShowCard
          v-for="(show, index) in shows.filter((item) =>
            item.genres.includes('Science-Fiction')
          )"
          :key="index"
          :show="show"
        />
      </div>
      <SlidingButtons />
    </div>
  </div>
</template>

<script>
import SlidingButtons from "../components/SlidingButtons";
import ShowCard from "../components/ShowCard";
import ShowsRepository from "../services/repositories/shows.repository";
import ShowsService from "../services/clients/shows.client";
import ShowsMapper from "../services/mappers/shows.mapper";
import Loader from "../components/Loader.vue";

export default {
  name: "Home",
  components: { ShowCard, SlidingButtons, Loader },
  data() {
    return {
      shows: [],
      isLoading: true,
    };
  },
  methods: {
    getShows() {
      ShowsService.getShows().then((res) => {
        this.shows = ShowsMapper.mapToHomeShows(res.data);
        this.storeShows();
        setTimeout(() => {
          this.isLoading = false;
        }, 1000);
      });
    },
    storeShows() {
      ShowsRepository.storeShows(this.shows);
    },
  },
  mounted() {
    this.getShows();
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap");

* {
  font-family: "Inter", sans-serif;
}

.best-shows {
  padding: 50px 0 0 50px;
}

.best-shows h3 {
  color: #e5e5e5;
}

.shows-ctnr {
  position: relative;
}

.shows-ctnr .scroll-ctn {
  display: flex;
  gap: 20px;
  overflow: scroll;
  position: relative;
  -ms-overflow-style: none;
  scroll-behavior: smooth;
}

.shows-ctnr .scroll-ctn::-webkit-scrollbar {
  display: none;
}
</style>
