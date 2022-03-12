<template>
  <div class="card">
    <img :src="show.image" :alt="show.name" />
    <p class="rating">{{ show.rating }}</p>
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
  background-color: rgba(0, 0, 0, 0.6);
  padding: 1px 2px;
}
</style>
