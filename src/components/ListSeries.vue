<template>
  <div class="best-shows">
    <h3>{{ title }} shows :</h3>
    <div class="shows-ctnr">
      <div class="scroll-ctn">
        <ShowCard
          v-for="(show, index) in filteredArray"
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

export default {
  name: "ListSeries",
  components: {
    ShowCard,
    SlidingButtons,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    filteredArray: {
      type: [],
      required: true,
    },
  },
};
</script>

<style>
.best-shows h3 {
  color: #e5e5e5;
  margin-top: 0;
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
