<template>
    <v-container fluid fill-height class="home-hero" style="max-height: 100vh">
        <v-layout justify-center align-center column pa-5>
            <div class="display-4 font-weight-black dark--text text-xs-center">TODO APP</div>
            <div class="display-4 font-weight-black black--text text-xs-center mb-3">FOR YOUR SCHEDULES</div>
            <div class="display-1 font-weight-bold black--text text-xs-center">Finally an app that can take note of your todos</div>
            <v-btn fab class="mt-5 brown darken-4">
            <v-icon large color="dark">expand_more</v-icon>
            </v-btn>
        </v-layout>
    </v-container>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .hello {
   background-color: blue;
 }
</style>
