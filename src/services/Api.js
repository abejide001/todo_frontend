import axios from 'axios'
import store from '../store/store'

export default () => {
  return axios.create({
    baseURL: `https://todolisapp.herokuapp.com`,
    headers: {
      Authorization: `${store.state.token}`
    }
  })
}
