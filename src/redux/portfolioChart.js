import { CHANGE_ACTIVE_PORTFOLIO } from './actions';

const initialState = {
  current: undefined
};

export default function portfolioChart(state = initialState, action) {
  if (action.type === CHANGE_ACTIVE_PORTFOLIO) {
    return {
      ...state,
      current: action.id
    };
  }

  return state;
}
