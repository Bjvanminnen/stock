import { CHANGE_PORTFOLIO_NAME, CREATE_PORTFOLIO } from './actions';

const initialState = {
  names: []
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

  if (action.type === CREATE_PORTFOLIO) {
    return {
      ...state,
      names: state.names.concat('New Portfolio')
    };
  }
  return state;
}
