<template>
  <router-link class="card" :to="'/show/' + show.id">
    <img v-if="show.image !== undefined" :src="show.image" :alt="show.name" />
    <img v-else src="../assets/no-image.jpg"  alt=""/>
    <p class="rating"><i class="fa-regular fa-star"></i> {{ show.rating ? show.rating : "N/A" }}</p>
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
