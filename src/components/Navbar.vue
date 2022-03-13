<template>
  <nav v-bind:class="{ search: searchMode }">
    <div>
      <router-link to="/" class="netflux">Netflux</router-link>
      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>
      </ul>
    </div>
    <form v-if="searchMode" @submit.prevent="handleSubmit">
      <button>
        <i class="fa-solid fa-magnifying-glass"></i>
      </button>
      <input
        type="text"
        ref="searchInput"
        @blur="searchMode = false"
        @change="handleChange"
        placeholder="Search a show ..."
      />
    </form>
    <button v-else @click="setSearchMode">
      <i class="fa-solid fa-magnifying-glass"></i>
    </button>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return { searchMode: false, searchQuery: null };
  },
  methods: {
    setSearchMode() {
      this.searchMode = true;

      this.$nextTick(() => {
        this.$refs.searchInput.focus();
      });
    },
    handleChange(e) {
      this.searchQuery = e.target.value;
    },
    handleSubmit() {
      this.$router.push(`/search?q=${this.searchQuery}`);
    },
  },
};
</script>

<style scoped>
nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
  margin: 0;
  box-shadow: 0 7px 8px 0 #000000;
  height: 68px;
}

nav div {
  display: flex;
  align-items: center;
}

nav ul {
  list-style: none;
  display: flex;
  gap: 20px;
}

nav a {
  text-decoration: none;
}

nav ul a {
  color: white;
}

nav ul a:hover {
  color: #b3b3b3;
}

.netflux {
  text-transform: uppercase;
  color: red;
  font-weight: 900;
  letter-spacing: 2px;
}

nav form {
  display: flex;
  align-items: center;
  padding: 7px;
  gap: 10px;
  border: 1px solid white;
}

nav form input {
  all: unset;
  color: white;
}

@media (max-width: 580px) {
  nav.search {
    height: 100px;
    flex-direction: column;
    justify-content: flex-start;
  }
}

nav button {
  all: unset;
  display: flex;
  cursor: pointer;
}

nav button > * {
  color: white;
  width: 20px;
  pointer-events: none;
}
</style>
