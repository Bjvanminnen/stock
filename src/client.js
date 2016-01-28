import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './redux/reducer';
import { Provider } from 'react-redux'
import createLogger from 'redux-logger';

import Chart1 from './components/Chart1';

const logger = createLogger();

// create a store that has redux-thunk middleware enabled
const createStoreWithMiddleware = applyMiddleware(
  thunk,
  logger
)(createStore);

const store = createStoreWithMiddleware(reducer);

window.__getState = () => store.getState();

ReactDOM.render(
  <Provider store={store}>
    <Chart1/>
  </Provider>,
  document.getElementById('app'));
