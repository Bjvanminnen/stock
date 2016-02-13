import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'
import createLogger from 'redux-logger';


import App from './components/App';
import reducer from './redux/reducer';
import { TICK } from './redux/timerActions';

const logger = createLogger({
  collapsed: true
});

const wrappedLogger = store => next => action => {
  if (action.type === TICK) {
    next(action);
  } else {
    logger(store)(next)(action);
  }
};

const setLocal = store => next => action => {
  next(action);
  const newState = store.getState();
  localStorage.setItem('redux', JSON.stringify(newState));
};

const cachedStore = localStorage.getItem('redux');
const initialState = cachedStore ? JSON.parse(cachedStore) : undefined;

// create a store that has redux-thunk middleware enabled
const createStoreWithMiddleware = applyMiddleware(
  thunk,
  setLocal,
  wrappedLogger
)(createStore);

const store = createStoreWithMiddleware(reducer, initialState);

window.__getState = () => store.getState();

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('app'));
