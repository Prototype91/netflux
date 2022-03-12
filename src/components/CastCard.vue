<template>
  <div class="card">
    <img :src="cast?.image" :alt="cast.personName" />
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
