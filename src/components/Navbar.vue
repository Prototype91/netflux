<template>
  <nav>
    <router-link to="/" class="netflux">Netflux</router-link>
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
nav {
  display: flex;
  align-items: center;
  padding: 0 50px;
  background-color: rgb(20, 20, 20);
  margin: 0;
}

nav ul {
  list-style: none;
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
</style>
