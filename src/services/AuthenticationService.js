import Api from './Api'

export default {
  register (credentials) {
    return Api().post('api/v1/auth/sign-up', credentials)
  },
  login (credentials) {
    return Api().post('api/v1/auth/sign-in', credentials)
  },
  socailLogin () {
    return Api().get('auth/google/callback')
  }
}
