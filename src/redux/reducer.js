import { GOT_TICKER_DATA, GOT_DIVIDEND_DATA } from './actions';

const combineTickerAndDividend = (tickerData, dividendData) => {
  const startVal = tickerData[0].close;
  const numShares = 10000 / startVal;

  const divByDate = dividendData.reduce((obj, entry) => {
    obj[entry.date] = entry.dividends * numShares;
    return obj;
  }, {});

  // assumes quote data is ordered by date
  let totalDividends = 0;
  const data = tickerData.map(entry => {
    const { date } = entry;
    totalDividends += (divByDate[date] || 0);

    return [
      date,
      (entry.close * numShares),
      (entry.close * numShares) + totalDividends
    ];
  });
  return data;
};

/**
 * Imports new data
 */
const applyAction = (state, action) => {
  if (action.type === GOT_TICKER_DATA) {
    return {
      ...state,
      ticker: action.data
    };
  }

  if (action.type === GOT_DIVIDEND_DATA) {
    return {
      ...state,
      dividend: action.data
    };
  }
  return state;
};

/**
 * Does necessary data processing
 */
const processData = (state) => {
  if (state.ticker && state.dividend && !state.combined) {
    return {
      ...state,
      combined: combineTickerAndDividend(state.ticker, state.dividend)
    };
  }

  return state;
};

export default function reducer(state={}, action) {
  return processData(applyAction(state, action));
};