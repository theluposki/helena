<template>
  <Navigation :active="active" />
  <div class="content-main">
    <Header :active="active" />
    <router-view />
  </div>
</template>

<script>
import Navigation from "./components/Navigation.vue";
import Header from "./components/Header.vue";

export default {
  components: {
    Navigation,
    Header,
  },
  data() {
    return {
      active: true,
    };
  },
};
</script>

<style>
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;

  text-decoration: none;
  list-style: none;
  outline: none;
}

:root {
  --color-white: #fafafa;
  --color-gren: #42b983;
  --color-gren-two: #2c3e50;

  --bg-one: #16191e;
  --bg-two: #1b1f24;
}

html,
body {
  width: 100vw;
  height: 100vh;
  max-width: 100vw;
  max-height: 100vh;
  background: var(--bg-one);
}

#app {
  position: relative;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--color-gren-two);

  display: flex;
  max-width: 100vw;
  max-height: 100vh;
}

.content-main {
  flex: 1;
  display: flex;
  flex-direction: column;
}
</style>
