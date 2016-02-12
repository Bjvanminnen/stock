import { TIMER_LOAD } from './actions';
import { getData } from './dataResponses';

const initialState = {
  symbol: null,
  start: null,
  end: null,
  data: {foo: 'bar'}
};

export default function reducer(state = initialState, action, dataResponses) {
  if (action.type === TIMER_LOAD) {
    const { symbol, start, end } = action;
    return {
      ...state,
      symbol,
      start,
      end
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
