import Api from './Api'

export default {
  register (credentials) {
    return Api().post('auth/sign-up', credentials)
  },

  login (credentials) {
    return Api().post('auth/sign-in', credentials)
  }
}
