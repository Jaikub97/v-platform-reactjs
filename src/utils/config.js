/*
 * @Author: mr.mshao 
 * @Date: 2018-03-29 00:08:57 
 * @Last Modified by: mr.mshao
 * @Last Modified time: 2018-03-29 16:49:24
 */
import './userInfo'
const env = process.env.NODE_ENV
const isDev = env === 'development'
const devURL = 'http://gank.io/api/data/' // 开发环境URL
const prodURL = 'http://gank.io/api/data/' // 生产环境URL
const setUserInfo = function (ENV = isDev) {
  if (ENV) {
    // 开发环境
    window.USERINFO.id = '16362'
    window.USERINFO.orgId = '142'
  } else {
    // 生产环境
    try {
      window.cordova.exec(
        function (obj) {
          window.USERINFO.id = obj.userId;
          window.USERINFO.orgId = obj.currentOrg.orgId;
        },
        function (e) {
          if (e) { alert(e) } else { alert("获取用户信息失败") }
        }
        , "UsersInfo", "getUsersInfo", [])
    } catch (error) {
      alert(error)
    }
  }
}
export default {
  TimeOut: 3000,
  BaseURL: isDev ? devURL : prodURL,
  getUserInfo: window.USERINFO,
  setUserInfo: setUserInfo
}