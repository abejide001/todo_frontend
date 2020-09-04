<template>
  <v-app>
    <v-layout>
      <v-flex xs4 offset-xs3>
        <div class="white elevation-1">
          <v-toolbar flat dense class="cyan" dark>
            <v-toolbar-title>Create todo</v-toolbar-title>
          </v-toolbar>
          <div class="pl-4 pr-4 pt-4 pb-2">
            <v-form>
                  <v-col>
                    <v-text-field
                      label="Name"
                      class="name"
                      v-model="todo.name"
                      v-on:keyup.enter="create"
                    ></v-text-field>
                  </v-col>
                  <v-col>
                    <v-text-field
                      label="Description"
                      class="description"
                      v-model="todo.description"
                      v-on:keyup.enter="create"
                    ></v-text-field>
                  </v-col>
                  <v-col>
                    <v-select
                      :items="items"
                      label="Priority"
                      v-model="todo.priority"
                      v-on:keyup.enter="create"
                    ></v-select>
                  </v-col>
                <v-row>
                  <div class="red--text">{{error}}</div>
                </v-row>
                <v-row class="center">
                  <v-btn @click="create">Create</v-btn>
                </v-row>
            </v-form>
          </div>
        </div>
      </v-flex>
    </v-layout>
  </v-app>
</template>
<script>
import TodosService from '../services/TodosService'
export default {
  data () {
    return {
      items: ['low', 'medium', 'high'],
      todo: {
        name: null,
        description: null,
        priority: null,
        comnpleted: null
      }
    }
  },
  methods: {
    async create () {
      // call API
      try {
        await TodosService.createPost(this.todo)
        this.$router.push({
          name: 'todos'
        })
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .center {
display: flex;
justify-content: center;
align-items: center;
}
.white {
  margin-top: 70px
}
</style>
