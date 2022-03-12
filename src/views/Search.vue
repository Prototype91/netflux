<template>
  <section class="search-section">
    <p>Titres associés à : {{ this.$route.query.q }}</p>

    <div class="results-ctnr">
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

.results-ctnr {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}
</style>
