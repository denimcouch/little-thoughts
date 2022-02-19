<template>
  <v-app id="app">
    <v-navigation-drawer
      class="navDrawer"
      expand-on-hover
      rail
    >
      <v-list>
        <v-list-item
          prepend-avatar="https://randomuser.me/api/portraits/men/35.jpg"
          title="Alex Mata"
          subtitle="Roaster"
        ></v-list-item>
      </v-list>

      <v-divider></v-divider>
      
      <v-list class="navDrawer__link-list" density="compact" nav>
        <v-list-item 
          prepend-icon="mdi-home" 
          title="Home" 
          value="home" 
          rounded="shaped"
          to="/"
        >
        </v-list-item>
        <v-list-item 
          prepend-icon="mdi-fire" 
          title="Log a roast" 
          value="logroast" 
          rounded="shaped"
          to="/roasts/new"
        >
        </v-list-item>
        <v-list-item 
          prepend-icon="mdi-bookmark" 
          title="Bookmarked roasts" 
          value="bookmarkedroasts" 
          rounded="shaped"
          to="/"
        >
        </v-list-item>
        <v-list-item 
          prepend-icon="mdi-information" 
          title="About" 
          value="about" 
          rounded="shaped"
          to="/about"
        >
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <v-container fluid>        
        <router-view/>
      </v-container>
    </v-main>
  </v-app>
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
