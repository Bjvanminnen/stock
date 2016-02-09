import { CHANGE_PORTFOLIO_NAME, CREATE_PORTFOLIO, ADD_STOCK } from './actions';

const initialState = {
  name: 'New Portfolio',
  keys: [0],
  values: [
    {
      symbol: 'MSFT',
      purchaseDate: 1370242800000, // jun 3 2013
      purchasePrice: 34.92,
      shares: 100
    }
  ]
};

export default function (state = initialState, action) {
  if (action.type === CHANGE_PORTFOLIO_NAME) {
    const { newName } = action;
    return {
      ...state,
      name: newName
    };
  }

  // TODO - probably want a similar approach to portfolios, where there's a list
  // of ids, and then values
  // if (action.type === ADD_STOCK) {
  //   return {
  //     ...state,
  //     stocks: state.stocks.concat('')
  //   };
  // }

  return state;
}
