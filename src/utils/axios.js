/*
 * @Author: mr.mshao 
 * @Date: 2018-03-29 00:20:58 
 * @Last Modified by: mr.mshao
 * @Last Modified time: 2018-03-29 23:44:21
 */
import axios from 'axios'
import qs from 'qs'
import { Toast } from 'antd-mobile'
import config from './config'
axios.defaults.timeout = config.TimeOut
axios.defaults.baseURL = config.BaseURL
axios.defaults.transformRequest = [function (data) {
  let sendData = { ...data }
  return qs.stringify(sendData)
}]

axios.interceptors.request.use((config) => {
  Toast.loading('加载中...', 30)
  return config
}, (err) => {
  return Promise.reject(err)
})

axios.interceptors.response.use((response) => {
  setTimeout(() => Toast.hide(), 700)
  console.log(response)
  let data = response.data
  return data
}, (err) => {
  return Promise.reject(err)
})

export default axios