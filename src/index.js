import React from 'react';
import ReactDOM from 'react-dom';
import './Assets/sass/_index.scss';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
