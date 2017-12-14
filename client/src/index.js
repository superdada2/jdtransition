import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {history, store} from './store'
import {Provider} from 'react-redux'
import {ConnectedRouter} from 'react-router-redux'

ReactDOM.render(
  <Provider store={store}>
  <ConnectedRouter history={history}>
    <App/>
  </ConnectedRouter>
</Provider>, document.getElementById('root'));
registerServiceWorker();
