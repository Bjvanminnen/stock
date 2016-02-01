// TODO - better name

import { REQUEST_CHART1_DATA } from './actions';
import { getData } from './dataResponses';

import normalizeData from './normalizeData';

export default function reducer(state={}, action, dataResponses) {
  if (action.type === REQUEST_CHART1_DATA) {
    const { symbol, start, end} = action;
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
    combined: normalizeData(symbolTicker, symbolDividend)
  };
};
