<!-- eslint disable -->
<template>
  <v-app>
    <v-layout>
      <v-flex xs6 offset-xs3>
        <div class="white elevation-1">
          <v-toolbar flat dense class="cyan" dark>
            <v-toolbar-title>
              Login
            </v-toolbar-title>
          </v-toolbar>
          <div class="pl-4 pr-4 pt-4 pb-2">
            <v-form>
              <v-container>
                 <v-row>
                    <span v-if="error">
                      <v-alert type="error">
                      {{ errorMessage }}
                      </v-alert>
                    </span>
                    </v-row>
                <v-col>
                <v-col>
                    <v-text-field
                      label="Email"
                      class="email"
                      v-model="email"
                      v-on:keyup.enter="login"
                    ></v-text-field>
                    </v-col>
                    <v-col>
                    <v-text-field
                      label="Password"
                      type="password"
                      v-model="password"
                      v-on:keyup.enter="login"
                    ></v-text-field>
                    </v-col>
                    </v-col>
                    <v-row class="center">
                      <v-btn  @click="login">Login </v-btn>
                    </v-row>
                  </v-container>
              </v-form>
        </div>
        </div>
      </v-flex>
    </v-layout>
  </v-app>
  </template>

<script>
import AuthenticationService from '../services/AuthenticationService'

export default {
  data () {
    return {
      email: '',
      password: '',
      error: false,
      errorMessage: this.errorMessage
    }
  },
  methods: {
    async login () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.data.token)
        this.$store.dispatch('setUser', response.data.data.user)
        this.$router.push({
          name: 'todos'
        })
      } catch (error) {
        this.error = true
        this.errorMessage = error.response.data.message
        console.log(error.response.data.message)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  color: red;
}
.center {
display: flex;
justify-content: center;
align-items: center;
}
</style>
