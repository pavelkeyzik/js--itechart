import React from 'react';
import ReactDOM from 'react-dom';
import App from '@/containers/App';
import { BrowserRouter } from 'react-router-dom';
import appReducers from '@/reducers';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.scss';

const store = createStore(appReducers);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);