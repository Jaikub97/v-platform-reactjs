import React from 'react';
import ReactDOM from 'react-dom';
import App from './router';
import registerServiceWorker from './registerServiceWorker';
import initReactFastclick from 'react-fastclick';
initReactFastclick();

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
registerServiceWorker();
