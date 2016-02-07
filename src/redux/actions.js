import { getTickerData, getDividendData } from '../yahooData';

export const REQUEST_CHART1_DATA = 'stock/CHART_1/REQUEST_DATA';
export const REQUEST_CHART2_DATA = 'stock/CHART_2/REQUEST_DATA';
export const GOT_TICKER_DATA = 'stock/GOT_TICKER_DATA';
export const GOT_DIVIDEND_DATA = 'stock/GOT_DIVIDEND_DATA';

export const CHANGE_PORTFOLIO_NAME = 'stock/portfolio/CHANGE_PORTFOLIO_NAME';
export const CREATE_PORTFOLIO = 'stock/portfolio/CREATE_PORTFOLIO';

export const CLEAR_STATE = 'stock/main/CLEAR_STATE';
export const clearState = () => ({type: CLEAR_STATE});

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

export const getSingleData = (symbol, start, end) => {
  return dispatch => {
    dispatch({
      type: REQUEST_CHART1_DATA,
      symbol,
      start,
      end
    });

    getData([symbol], start, end)(dispatch);
  };
}

export const getDataComparison = (index, symbol, start, end) => {
  return dispatch => {
    dispatch({
      type: REQUEST_CHART2_DATA,
      index,
      symbol,
      start,
      end
    });

    getData([index, symbol], start, end)(dispatch);
  };
}

export const changePortfolioName = (id, newName) => {
  return {
    type: CHANGE_PORTFOLIO_NAME,
    id,
    newName
  };
};

export const createPortfolio = () => ({ type: CREATE_PORTFOLIO });
