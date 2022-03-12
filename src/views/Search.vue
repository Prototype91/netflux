<template>
  <Loader :isLoading="isLoading" />
  <section class="search-section" v-if="!isLoading">
    <p v-if="results?.length">Titres associés à : {{ this.$route.query.q }}</p>

    <p v-else class="no-results">
      No results for your search : "{{ this.$route.query.q }}"
    </p>

    <div class="results-ctnr" v-if="results?.length">
      <ShowCard
        v-for="(result, index) in results"
        :key="index"
        :show="result"
      />
    </div>
  </section>
</template>

<script>
import ShowCard from "../components/ShowCard.vue";
import ShowsClient from "../services/clients/shows.client";
import ShowsMapper from "../services/mappers/shows.mapper";
import Loader from "../components/Loader.vue";

export default {
  name: "Search",
  components: { ShowCard, Loader },
  data() {
    return {
      results: [],
      isLoading: true,
    };
  },
  methods: {
    search() {
      this.results = [];
      ShowsClient.getSearchedShows(this.$route.query.q).then((res) => {
        this.results = ShowsMapper.mapToSearchedShows(res.data);
        setTimeout(() => {
          this.isLoading = false;
        }, 1000);
      });
    },
  },
  mounted() {
    this.search();
  },
  watch: {
    "$route.query.q"() {
      this.isLoading = true;
      this.search();
    },
  },
};
</script>

<style scoped>
.search-section {
  padding: 50px;
}

.search-section p {
  color: #808080;
}

.search-section .no-results {
  color: white;
  text-align: center;
}

.results-ctnr {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}
</style>
