<!-- eslint disable -->
<template>
  <v-app>
    <v-layout>
      <v-flex xs6 offset-xs3>
        <div class="white elevation-1">
          <v-toolbar flat dense class="cyan" dark>
            <v-toolbar-title>
              Register
            </v-toolbar-title>
          </v-toolbar>
          <div class="pl-4 pr-4 pt-4 pb-2">
            <v-form>
              <v-container>
                <v-col>
                <v-col>
                    <v-text-field
                      label="Email"
                      required
                      :rules="[required]"
                      class="email"
                      v-model="email"
                      v-on:keyup.enter="register"
                    ></v-text-field>
                    </v-col>
                    <v-col>
                    <v-text-field
                      label="Name"
                      class="name"
                      v-model="name"
                      v-on:keyup.enter="register"
                    ></v-text-field>
                    </v-col>
                    <v-col>
                    <v-text-field
                      label="Password"
                      type="password"
                      v-model="password"
                      v-on:keyup.enter="register"
                    ></v-text-field>
                    </v-col>
                    <v-col>
                    <v-text-field
                      label="PasswordConfirm"
                      type="password"
                      v-model="passwordConfirm"
                      v-on:keyup.enter="register"
                    ></v-text-field>
                    </v-col>
                    </v-col>
                    <v-row>
                      <div class="red--text">{{error}} </div>
                    </v-row>
                    <v-row class="center">
                      <v-btn  @click="register">Register </v-btn>
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
      name: '',
      password: '',
      passwordConfirm: '',
      error: null
    }
    rules: {
      required: (value) => !!value || 'Required'
    }
  },
  methods: {
    async register () {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          name: this.name,
          password: this.password,
          passwordConfirm: this.passwordConfirm
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.$router.push({
          name: 'login'
        })
      } catch (error) {
        this.error = error.response.data.error
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
