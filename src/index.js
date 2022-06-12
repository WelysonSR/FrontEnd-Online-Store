import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ApiProvaider from './context/ApiProvider';

ReactDOM.render(
  <ApiProvaider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApiProvaider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
