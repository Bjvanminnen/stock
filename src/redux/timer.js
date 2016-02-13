import { LOAD, TICK } from './timerActions';
import { getData } from './dataResponses';

const initialState = {
  symbol: null,
  start: null,
  end: null,
  index: 600,  
  data: null
};

export default function reducer(state = initialState, action, dataResponses) {
  if (action.type === LOAD) {
    const { symbol, start, end } = action;
    return {
      ...state,
      symbol,
      start,
      end
    };
  }

  if (action.type === TICK) {
    return {
      ...state,
      index: state.index + 1
    };
  }

  const { ticker, dividend } = dataResponses;
  const { symbol, start, end } = state;
  if (!symbol || state.combined) {
    return state;
  }

  const symbolTicker = getData(ticker, symbol, start, end);
  const symbolDividend = getData(dividend, symbol, start, end);
  if (!symbolTicker || !symbolDividend) {
    return state;
  }

  return {
    ...state,
    data: { symbolTicker }
  };
}
