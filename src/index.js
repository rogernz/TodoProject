import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import UserContext from 'userContext';
import store from './store';
import App from './components/app';

import 'sanitize.css/sanitize.css';
import './index.css';

const target = document.getElementById('root');
const state = {
  googleAccessToken: localStorage.getItem('accessToken'),
  accessToken: localStorage.getItem('accessToken'),
  todos: '',
  setGoogleAccessToken: (accessToken) => {
    if (accessToken && accessToken !== localStorage.getItem('accessToken')) {
      console.log('context api set new accessToken: ', accessToken.slice(-5));
      localStorage.setItem('accessToken', accessToken);
      state.setGoogleAccessToken = accessToken;
    }
  },
  setAccessToken: (accessToken) => {
    state.accessToken = accessToken;
  },
};

render(
  <Provider store={store}>
    <Router>
      <UserContext.Provider value={state}>
        <div>
          <App />
        </div>
      </UserContext.Provider>
    </Router>
  </Provider>,
  target,
);
