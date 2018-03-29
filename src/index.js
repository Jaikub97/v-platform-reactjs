import React from 'react';
import ReactDOM from 'react-dom';
import App from './Router';
import './utils/userInfo'
import './assets/common.less'
import registerServiceWorker from './registerServiceWorker'
import config from './utils/config'
document.addEventListener('deviceready', function() {
  config.setUserInfo()
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
  registerServiceWorker();
})