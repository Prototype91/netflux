<template>
  <Loader :isLoading="isLoading"/>
  <section v-if="!isLoading">
    <ListSeries title="Best Shows" :filtered-array="BestShows"/>
    <ListSeries title="Science-Fiction" :filtered-array="ScienceFictionShows"/>
    <ListSeries title="Horror" :filtered-array="HorrorShows"/>
  </section>
</template>

<script>
import ListSeries from "../components/ListSeries";
import ShowsService from "../services/clients/shows.client";
import ShowsMapper from "../services/mappers/shows.mapper";
import Loader from "../components/Loader.vue";

export default {
  name: "Home",
  components: {Loader, ListSeries},
  data() {
    return {
      shows: [],
      isLoading: true,
    };
  },
  computed: {
    BestShows() {
      return this.shows.filter((item) => item.rating >= 8.5);
    },
    ScienceFictionShows() {
      return this.shows.filter((item) =>
          item.genres.includes("Science-Fiction")
      );
    },
    HorrorShows() {
      return this.shows.filter((item) => item.genres.includes("Horror"));
    },
  },
  methods: {
    getShows() {
      ShowsService.getShows().then((res) => {
        this.shows = ShowsMapper.mapToShows(res.data);
        setTimeout(() => {
          this.isLoading = false;
        }, 1000);
      });
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

section {
  padding: 50px 0 50px 50px;
  display: flex;
  flex-direction: column;
  gap: 40px;
}
</style>
