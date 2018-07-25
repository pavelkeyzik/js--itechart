import React from 'react';
import ReactDOM from 'react-dom';
import App from '@/containers/App';
import appReducers from '@/reducers';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.scss';

const store = createStore(appReducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);