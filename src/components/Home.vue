<template>
  <v-app>
    <v-layout>
      <v-flex xs6 offset-xs3>
        <div class="hello">
        </div>
      </v-flex>
    </v-layout>
  </v-app>
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
