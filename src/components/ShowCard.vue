<template>
  <router-link class="card" :to="'/details/' + show.id">
    <img :src="show.image?.medium" :alt="show.name" />
    <p class="rating">{{ show.rating.average }}</p>
  </router-link>
</template>

<script>
export default {
  name: "ShowCard",
  props: {
    show: Object,
  },
};
</script>

<style scoped>
.card {
  position: relative;
}
.rating {
  margin: 0;
  position: absolute;
  top: 10px;
  right: 10px;
  color: orange;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 1px 2px;
}
</style>
