import Api from './Api'

export default {
  getAllTodos () {
    return Api().get('todos')
  },
  createPost (todo) {
    return Api().post("todos", todo)
  },
  deletePost (todoId) {
      return Api().delete(`todos/${todoId}`)
  }
}
