// TODO - better name

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

export default function reducer(state={}, action, dataResponses) {
  const { ticker, dividend } = dataResponses;
  if (ticker && dividend && !state.combined) {
    const symbol = Object.keys(ticker)[0];
    return {
      ...state,
      combined: combineTickerAndDividend(ticker[symbol], dividend[symbol])
    };
  }

  return state;
};
