<template>
  <div class="sliding-buttons">
    <button @click="ScrollLeft">
      <i class="fa-solid fa-chevron-left"></i>
    </button>
    <button @click="ScrollRight">
      <i class="fa-solid fa-chevron-right"></i>
    </button>
  </div>
</template>

<script>
export default {
  name: "SlidingButtons",
  methods: {
    ScrollRight() {
      console.log(this.$el);
      console.log(this.$el.parentNode);
      this.$el.parentNode.scrollLeft += this.$el.parentNode.clientWidth;
    },
    ScrollLeft() {
      console.log(this.$el);
      console.log(this.$el.parentNode);
      this.$el.parentNode.scrollLeft -= this.$el.parentNode.clientWidth;
    },
  },
};
</script>

<style>
.sliding-buttons {
  display: flex;
  justify-content: space-between;
  width: calc(100vw - 50px);
  height: 100%;
  position: absolute;
}

.sliding-buttons button {
  cursor: pointer;
  background: rgba(20, 20, 20, 0.5);
  color: white;
  width: 4%;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  border: 0px;
}
</style>
