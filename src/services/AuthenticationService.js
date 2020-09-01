import Api from './Api'

export default {
  register (credentials) {
    return Api().post('sign-up', credentials)
  }
}

export default {
  register (credentials) {
    return Api().post('sign-in', credentials)
  }
}
