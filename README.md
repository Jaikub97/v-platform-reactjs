### 简要说明
------

#### 主要说明src目录下（我们平时编写代码主要就在这个目录里面）
|目录|备注|其他说明|
|:-------:|:-------------:| :----------:|
|assets|这里主要放静态资源文件|单独的样式文件也可以参考本项目的方式，全局的样式文件建议在此申明|
|components|木偶组建目录|在最外层index.js中	`export ` ,具体参考示例|
|containers|HOC||
|utils|包含：config, axios,userInfo, wpt等js文件|userInfo.js文件定义全局`USERINFO`变量，引用参考container.js|
|index.js|项目入口文件||
|Layout.jsx|Layout|这里定义路由过渡效果|
|Router.js|路由|react-router-dom v4.2版本，具体实用参考其官方文档|

-----

#### 项目依赖

* 主要依赖

```javascript
"antd-mobile": "^2.1.3",
"axios": "^0.17.1",
"react": "^16.2.0",
"react-dom": "^16.2.0",
"react-router-dom": "^4.2.2",
"webpack": "3.8.1",
```
* 其他依赖

```javascript
"react-addons-css-transition-group": "^15.6.2",
"style-loader": "0.19.0",
"less": "^2.7.3",
"less-loader": "^4.0.5",
```

-----
#### 其他说明
> ###### axios.js 说明，简单配置
> 
```javascript
import axios from 'axios'
import qs from 'qs'
import { Toast } from 'antd-mobile' // API参考antd-mobile
import config from './config' // 引入配置
// 定义错误提示
const errMsgObj = {
	403: '',
	404: '',
	500: ''
}
// 对请求的数据处理
axios.defaults.transformRequest = [function (data) {
  let sendData = { ...data }
  return qs.stringify(sendData)
  // or
  // return JSON.stringify(sendData)
}]
// 请求前拦截，一般在这里显示loading，判断权限之类
axios.interceptors.request.use((config) => {
  Toast.loading('加载中...', 30)
  return config
}, (err) => {
  return Promise.reject(err)
})
// 返回数据之后拦截，处理数据，定义错误类型之类可以在此判断
axios.interceptors.response.use((response) => {
  setTimeout(() => Toast.hide(), 700)
  /*
  *
  *let code = response.status
  *if (code >= 400 && code <= 500) {
  *	// 错误提示
  *}
  */
  let data = response.data
  return data
}, (err) => {
  return Promise.reject(err)
})
```

----

> ###### config.js 说明，简单配置
> 
```javascript
import './userInfo' // 导入定于的全局USERINFO对象，是否要加密看情况自行决定
const env = process.env.NODE_ENV // 获取当前环境
const isDev = env === 'development'
const devURL = 'http://gank.io/api/data/' // 开发环境URL
const prodURL = 'http://gank.io/api/data/' // 生产环境URL
const setUserInfo = function (ENV = isDev) {
	// 判断当前环境,代码略...
	if (ENV) {
		// ...
	} else {
		// ...
	}
}
export default {
  TimeOut: 3000, 
  BaseURL: isDev ? devURL : prodURL,
  getUserInfo: window.USERINFO,
  setUserInfo: setUserInfo
}
```

----

> ###### Router.js 说明略...

----











