<template>
  <div class="card">
    <img v-if="cast.image" :src="cast.image" :alt="cast.personName" />
    <img v-else src="../assets/no-image.jpg" alt="" />
    <p>
      {{ cast.personName }} <br />
      as <br />{{ cast.characterName }}
    </p>
  </div>
</template>

<script>
export default {
  name: "CastCard",
  props: {
    cast: {},
  },
};
</script>

<style scoped></style>
