import { GOT_TICKER_DATA, GOT_DIVIDEND_DATA } from './actions';

const initialState = {
  ticker: {
    start: null,
    end: null,
    data: {}
  },
  dividend: {
    start: null,
    end: null,
    data: {}
  }
};

const dataResponseReducer = (state = initialState, action) => {
  if (action.type === GOT_TICKER_DATA) {
    const { start, end, data } = action;
    return {
      ...state,
      // TODO - eventually we want this to merge data
      ticker: {
        start,
        end,
        data
      }
    };
  }

  if (action.type === GOT_DIVIDEND_DATA) {
    const { start, end, data } = action;

    return {
      ...state,
      // TODO - eventually we want this to merge data
      dividend: {
        start,
        end,
        data
      }
    };
  }
  return state;
};
export default dataResponseReducer;

export const getData = (ticker, symbol, start, end) => {
  // TODO - this will need to change when data is merged instead of replaced
  if (!ticker.start || !ticker.end || ticker.start !== start ||
      ticker.end !== end) {
    return false;
  }

  return ticker.data[symbol];
};
