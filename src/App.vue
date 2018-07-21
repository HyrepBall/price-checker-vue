<template>
  <div id="app">
    <v-toolbar class="app-toolbar" height="58" fixed >
      <v-toolbar-side-icon class="hidden-sm-and-down"></v-toolbar-side-icon>

      <v-toolbar-title >Title</v-toolbar-title>

      <v-spacer class="hidden-md-and-up"></v-spacer>

      <v-menu :nudge-width="100" class="hidden-md-and-up">
        <v-toolbar-title slot="activator">
          <span>Меню</span>
          <v-icon dark>arrow_drop_down</v-icon>
        </v-toolbar-title>

        <v-list>
          <v-list-tile :to="linkItem.link" v-for="linkItem in nav" :key="linkItem.link">
            <v-list-tile-title>{{linkItem.title}}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>

      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn :to="linkItem.link" v-for="linkItem in nav" :key="linkItem.link" flat >
          {{linkItem.title}}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-app class="main">
      <div class="wrapper">
        <router-view/>
      </div>
    </v-app>

  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      nav: [
        {
          link: '/home',
          title: 'Home',
        },
        {
          link: '/about',
          title: 'About us',
        },
        {
          link: '/contact',
          title: 'Contact us',
        },
        {
          link: '/',
          title: 'Главная',
        },
        {
          link: '/add',
          title: 'Добавить',
        },
      ],
    };
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  font-size: 13px;
}
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
}

.app-toolbar {
  background: #f1f1f1;
}

.main {
  padding-top: 100px;
  min-height: 1500px;
}

.wrapper {
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
  padding: 0 15px;
}
</style>
