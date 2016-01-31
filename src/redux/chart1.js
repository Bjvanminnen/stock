// TODO - better name

import { REQUEST_CHART1_DATA } from './actions';
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
  const symbol = state.symbol;
  if (!symbol || state.combined) {
    return state;
  }

  const chartTicker = ticker[symbol];
  const chartDividend = dividend[symbol];
  if (!chartTicker || !chartDividend) {
    return state;
  }

  return {
    ...state,
    combined: normalizeData(chartTicker, chartDividend)
  };
};
