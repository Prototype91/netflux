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
  margin: 0;
  box-shadow: 0 7px 8px 0 #000000;
  height: 68px;
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
