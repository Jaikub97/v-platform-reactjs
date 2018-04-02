import React from 'react';
import ReactDOM from 'react-dom';
import App from './Layout';
import './utils/userInfo'
import './assets/common.less'
import registerServiceWorker from './registerServiceWorker'
import config from './utils/config'
document.addEventListener('deviceready', function() {
  config.setUserInfo().then(() => {
    ReactDOM.render(
      <App />,
      document.getElementById('root')
    );
    registerServiceWorker();
  })
})