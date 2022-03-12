<template>
  <div class="card">
    <img :src="cast?.person?.image?.medium" :alt="cast.person.name" />
    <p>
      {{ cast.person.name }} <br />
      as <br />{{ cast.character.name }}
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
