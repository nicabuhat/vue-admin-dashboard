<template>
  <router-view />
</template>

<script>
export default {
  name: "App",
  mounted() {
    const isDarkMode = this.$store.getters.isDarkMode;
    document.body.style.background = isDarkMode ? "#212c4f" : "#f0f3f5";
  },
};
</script>

<style lang="scss">
@import "@/global-styles/colors.scss";
@import "@/global-styles/typography.scss";

* {
  box-sizing: border-box;
}

body {
  background-color: $dark-blue;
}

h1 {
  @include heading-1;
}

p {
  @include large-text;
}

#app {
  font-family: $sytem-font-family;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $white;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: $white;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
