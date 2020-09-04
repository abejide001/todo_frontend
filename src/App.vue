<template>
  <div id="app">
    <v-app>
    <page-header/>
    <main>
      <v-container fluid>
        <router-view/>
      </v-container>
    </main>
    </v-app>
  </div>
</template>

<script>
import PageHeader from './components/Header'
export default {
  name: 'App',
  components: {
    PageHeader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-image: url("./assets/todo.png");
  background-repeat: no-repeat;
  background-size: 100%;
  background-color: white;
  background-blend-mode: multiply;
  /* color: #2c3e50; */
}
</style>
