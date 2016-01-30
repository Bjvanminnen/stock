import { getTickerData, getDividendData } from '../yahooData';

export const GOT_TICKER_DATA = 'stock/GOT_TICKER_DATA';
export const GOT_DIVIDEND_DATA = 'stock/GOT_DIVIDEND_DATA';

export const getData = (symbols, start, end) => {
  return dispatch => {
    // TODO - do something with errors beyond console.log?
    getTickerData(symbols, start, end)
    .then(json => {
      dispatch({
        type: GOT_TICKER_DATA,
        data: json
      });
    })
    .catch(err => console.log(err));

    getDividendData(symbols, start, end)
    .then(json => {
      dispatch({
        type: GOT_DIVIDEND_DATA,
        data: json
      });
    })
    .catch(err => console.error(err));
  };
};
