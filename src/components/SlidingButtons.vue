<template>
  <button class="left" @click="ScrollLeft">
    <i class="fa-solid fa-chevron-left"></i>
  </button>
  <button class="right" @click="ScrollRight">
    <i class="fa-solid fa-chevron-right"></i>
  </button>
</template>

<script>
export default {
  name: "SlidingButtons",
  methods: {
    ScrollRight() {
      this.$el.parentNode.querySelector(".scroll-ctn").scrollLeft +=
        this.$el.parentNode.querySelector(".scroll-ctn").clientWidth;
    },
    ScrollLeft() {
      this.$el.parentNode.querySelector(".scroll-ctn").scrollLeft -=
        this.$el.parentNode.querySelector(".scroll-ctn").clientWidth;
    },
  },
};
</script>

<style scoped>
button {
  position: absolute;
  cursor: pointer;
  background: rgba(20, 20, 20, 0.5);
  color: white;
  width: 4%;
  min-width: 40px;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  border: 0;
  height: 100%;
  top: 0;
}

.left {
  left: 0;
}

.right {
  right: 0;
}
</style>
