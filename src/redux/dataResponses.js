import { GOT_TICKER_DATA, GOT_DIVIDEND_DATA } from './actions';

const dataResponseReducer = (state = {}, action) => {
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
export default dataResponseReducer;
