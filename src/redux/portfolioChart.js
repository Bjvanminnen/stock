import { CHANGE_ACTIVE_PORTFOLIO } from './actions';

const initialState = {
  current: undefined,
  data: undefined
};

export default function portfolioChart(state = initialState, action, dataResponses) {
  let newState = state;
  if (action.type === CHANGE_ACTIVE_PORTFOLIO) {
    newState = setCurrentChart(state, id);
  }

  // TODO - to make progress, we need a proper data store
  newState = setChartData(newState, dataResponses);

  return newState;
}

function setCurrentChart(state, id) {
  return {
    ...state,
    current: id
  };
}

function setChartData(state, stockData) {
  return state;
}
