import Api from './Api'

export default {
  getAllTodos () {
    return Api().get('api/v1/todos')
  },
  createPost (todo) {
    return Api().post('api/v1/todos', todo)
  },
  deleteTodo (todoId) {
    return Api().delete(`api/v1/todos/${todoId}`)
  }
}
