import axios from 'axios'
import qs from 'qs'
axios.defaults.timeout = 5000
axios.defaults.baseURL = 'http://gank.io/api/data/'
axios.defaults.transformRequest = [function (data) {
  let sendData = { ...data }
  return qs.stringify(sendData)
}]

// axios.interceptors.request.use((config) => {
//   return config
// }, (err) => {
//   return Promise.reject(err)
// })

axios.interceptors.response.use((response) => {
  let data = response.data
  return data
}, (err) => {
  
  return Promise.reject(err)
})

export default axios