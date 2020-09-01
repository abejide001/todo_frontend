import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: `https://todolisapp.herokuapp.com/api/v1`
  })
}
