<template>
  <div class="card">
    <img :src="show.image.medium" :alt="show.name" />
    <p class="rating">{{ show.rating.average }}</p>
  </div>
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
}
</style>
