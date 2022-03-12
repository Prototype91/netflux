<template>
  <div class="best-shows">
    <h3>The best shows :</h3>

    <div class="shows-ctnr">
      <ShowCard
        v-for="(show, index) in shows.filter(
          (item) => item.rating.average >= 8.5
        )"
        :key="index"
        :show="show"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ShowCard from "@/components/ShowCard";

export default {
  name: "Home",
  components: { ShowCard },
  data() {
    return { shows: [] };
  },
  mounted() {
    axios
      .get("https://api.tvmaze.com/shows")
      .then((res) => (this.shows = res.data));
  },
};
</script>

<style>
.best-shows {
  padding: 50px 0 0 50px;
}

.best-shows h3 {
  color: #e5e5e5;
}

.shows-ctnr {
  display: flex;
  gap: 20px;
  overflow: scroll;
}
</style>
