import React from 'react';
import ReactDOM from 'react-dom';
import App from '@/shared/components/App';
import rootReducer from './rootReducer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.scss';

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);