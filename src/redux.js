import { getTickerData, getDividendData } from './yahooData';

export const GOT_TICKER_DATA = 'stock/GOT_TICKER_DATA';
export const GOT_DIVIDEND_DATA = 'stock/GOT_DIVIDEND_DATA';

export const getData = (symbol, start, end) => {
  return dispatch => {
    // TODO - do something with errors beyond console.log?
    getTickerData(symbol, start, end)
    .then(json => {
      dispatch({
        type: GOT_TICKER_DATA,
        data: json
      });
    })
    .catch(err => console.log(err));

    getDividendData(symbol, start, end)
    .then(json => {
      dispatch({
        type: GOT_DIVIDEND_DATA,
        data: json
      });
    })
    .catch(err => console.error(err));
  };
};

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

export const reducer = (state={}, action) => {
  let newState = state;
  if (action.type === GOT_TICKER_DATA) {
    newState = {
      ...state,
      ticker: action.data
    };
  }

  if (action.type === GOT_DIVIDEND_DATA) {
    newState = {
      ...state,
      dividend: action.data
    };
  }

  if (newState.ticker && newState.dividend) {
    newState = {
      ...newState,
      combined: combineTickerAndDividend(newState.ticker, newState.dividend)
    };
  }

  return newState;
};
