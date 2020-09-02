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
              <v-container>
                <v-col>
                  <v-col cols="12" sm="6" md="3">
                    <v-text-field
                      label="Name"
                      outlined
                      class="name"
                      v-model="todo.name"
                      v-on:keyup.enter="create"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="3">
                    <v-text-field
                      label="Description"
                      outlined
                      class="description"
                      v-model="todo.description"
                      v-on:keyup.enter="create"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="3">
                    <v-select
                      :items="items"
                      label="Priority"
                      v-model="todo.priority"
                      v-on:keyup.enter="create"
                      outlined
                    ></v-select>
                  </v-col>
                </v-col>
                <v-row>
                  <div class="red--text">{{error}}</div>
                </v-row>
                <v-row>
                  <v-btn @click="create">Create</v-btn>
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
import TodosService from "../services/TodosService";
export default {
  data() {
    return {
      items: ["low", "medium", "high"],
      todo: {
        name: null,
        description: null,
        priority: null
      },
    };
  },
  methods: {
   async create() {
      // call API
      try {
        await TodosService.createPost(this.todo)
        this.$router.push({
            name: "todos"
        })
      } catch (error) {
          console.log(error)
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
