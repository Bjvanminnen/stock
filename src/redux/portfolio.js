import { CHANGE_PORTFOLIO_NAME } from './actions';

const initialState = {
  names: ['one', 'two']
};

const replaceNth = (array, n, val) => {
  return array.slice(0, n)
    .concat(val)
    .concat(array.slice(n + 1, array.length));
};

export default function (state = initialState, action) {
  if (action.type === CHANGE_PORTFOLIO_NAME) {
    const { index, newName } = action;
    return {
      ...state,
      names: replaceNth(state.names, index, newName)
    };
  }
  return state;
}
