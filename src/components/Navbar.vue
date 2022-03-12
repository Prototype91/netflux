<template>
  <nav>
    <div>
      <router-link to="/" class="netflux">Netflux</router-link>
      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>
      </ul>
    </div>
    <form v-if="searchMode" @submit="handleSubmit">
      <button>
        <svg viewBox="0 0 512 512">
          <!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc.-->
          <path
            fill="white"
            d="M500.3 443.7 380.6 324c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723 99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9 53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0 15.606-15.64 15.606-41.04.006-56.64zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128-57.42 128-128 128-128-57.4-128-128z"
          />
        </svg>
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
      <svg viewBox="0 0 512 512">
        <!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc.-->
        <path
          fill="white"
          d="M500.3 443.7 380.6 324c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723 99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9 53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0 15.606-15.64 15.606-41.04.006-56.64zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128-57.42 128-128 128-128-57.4-128-128z"
        />
      </svg>
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
    handleSubmit(e) {
      e.preventDefault();
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

nav button {
  all: unset;
  display: flex;
  cursor: pointer;
}

nav svg {
  width: 20px;
  pointer-events: none;
}
</style>
