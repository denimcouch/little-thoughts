<template>
  <div id="app">
    <main>
      <router-view />
    </main>
  </div>
</template>

<style lang="scss">
  #app {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;
  }

  .navDrawer {
    a {
      font-weight: bold;
      color: #2c3e50;
      text-decoration: none;

      &:hover {
        color: #c5463d;
      }
    }

    .v-list-item {
      text-align: left;
      margin: 4px 0;
    }
  }
</style>
