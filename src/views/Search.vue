<template>
  <section class="search-section">
    <p v-if="results.length > 0">
      Titres associés à : {{ this.$route.query.q }}
    </p>

    <p v-else class="no-results">
      No results for your search : "{{ this.$route.query.q }}"
    </p>

    <div class="results-ctnr" v-if="results.length > 0">
      <ShowCard
        v-for="(result, index) in results"
        :key="index"
        :show="result.show"
      />
    </div>
  </section>
</template>

<script>
import axios from "axios";
import ShowCard from "@/components/ShowCard";

export default {
  name: "Search",
  components: { ShowCard },
  data() {
    return {
      results: [],
    };
  },
  mounted() {
    this.results = [];
    let query = this.$route.query.q;

    axios
      .get(`https://api.tvmaze.com/search/shows?q=${query}`)
      .then((res) => (this.results = res.data));
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
