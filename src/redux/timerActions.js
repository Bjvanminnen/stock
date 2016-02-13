import { getTickerData, getDividendData } from '../yahooData';

import { GOT_TICKER_DATA, GOT_DIVIDEND_DATA } from './actions';


export const LOAD = 'stock/timer/LOAD';
export const load = () => {
  return dispatch => {
    const now = new Date();
    const start = '1993-01-01';
    const symbol = 'SPY';
    const end = (now.getYear() + 1900) + '-' + (now.getMonth() + 1) + '-' + now.getDate();

    dispatch({
      type: LOAD,
      symbol,
      start,
      end
    });

    dispatch(getData([symbol], start, end));
  }
};

export const TICK = 'stock/timer/TICK';
export const tick = () => ({ type: TICK });

// TODO - share with actions?
const getData = (symbols, start, end) => {
  return dispatch => {
    // TODO - do something with errors beyond console.log?
    getTickerData(symbols, start, end)
    .then(json => {
      dispatch({
        type: GOT_TICKER_DATA,
        data: json,
        start,
        end
      });
    })
    .catch(err => console.log(err));

    getDividendData(symbols, start, end)
    .then(json => {
      dispatch({
        type: GOT_DIVIDEND_DATA,
        data: json,
        start,
        end
      });
    })
    .catch(err => console.error(err));
  };
};
