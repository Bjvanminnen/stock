import { CHANGE_PORTFOLIO_NAME, CREATE_PORTFOLIO } from './actions';

const initialState = {
  name: 'New Portfolio',
  stocks: ['MSFT']
};

export default function (state = initialState, action) {
  if (action.type === CHANGE_PORTFOLIO_NAME) {
    const { newName } = action;
    return {
      ...state,
      name: newName
    };
  }

  return state;
}
