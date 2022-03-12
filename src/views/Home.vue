<template>
  <div class="best-shows">
    <h3>The best shows :</h3>

    <div class="shows-ctnr">
      <div class="scroll-ctn">
        <ShowCard
          v-for="(show, index) in shows.filter(
            (item) => item.rating.average >= 8.5
          )"
          :key="index"
          :show="show"
        />
      </div>
      <SlidingButtons @scroll-right="ScrollRight" @scroll-left="ScrollLeft" />
    </div>
  </div>

  <div class="best-shows">
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
      <SlidingButtons @scroll-right="ScrollRight" @scroll-left="ScrollLeft" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import SlidingButtons from "@/components/SlidingButtons";
import ShowCard from "../components/ShowCard";

export default {
  name: "Home",
  components: { ShowCard, SlidingButtons },
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
