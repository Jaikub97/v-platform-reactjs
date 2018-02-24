import React from 'react';
import ReactDOM from 'react-dom';
import App from './router';
import './assets/common.less'
import configureStore from './store/index'
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
const store = configureStore()
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
