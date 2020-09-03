<template>
  <v-app>
    <v-layout>
      <v-flex xs6 offset-xs3>
        <div class="white elevation-1">
          <v-toolbar flat dense class="cyan" dark>
            <v-toolbar-title>Todos</v-toolbar-title>
          </v-toolbar>
          <div class="pl-4 pr-4 pt-4 pb-2">
            <v-simple-table light="true">
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left">Name</th>
                    <th class="text-left">Description</th>
                    <th class="text-left">Priority</th>
                    <th class="text-left">Completed</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="todo in todos" :key="todo.name">
                    <td>{{ todo.name }}</td>
                    <td>{{ todo.description }}</td>
                    <td>{{ todo.priority }}</td>
                    <td>{{ todo.completed }}</td>
                    <td>
                      <v-btn class="ma-2" tile outlined color="success">
                        <v-icon left>mdi-pencil</v-icon>Edit
                      </v-btn>
                      <v-btn class="ma-2" tile outlined color="red" @click="destroy(todo._id)">
                        <v-icon left>mdi-delete</v-icon>Delete
                      </v-btn>
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
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
      todos: null
    }
  },

  async mounted () {
    this.todos = (await TodosService.getAllTodos()).data.data
  },

  methods: {
    async destroy (id) {
      try {
        await TodosService.deleteTodo(id)
        location.reload()
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
