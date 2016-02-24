import { CHANGE_PORTFOLIO_NAME, CREATE_PORTFOLIO } from './actions';

import portfolio from './portfolio';

const initialState = {
  ids: [],
  values: {}
};

const nextId = (currentIds) => {
  const lastId = currentIds.length ? currentIds[currentIds.length - 1] : 0;
  let newId = lastId;
  do {
    newId++;
  } while (currentIds.indexOf(newId) !== -1);
  return newId;
};

export default function (state = initialState, action) {
  if (action.type === CREATE_PORTFOLIO) {
    const { ids, values } = state;
    const newId = nextId(ids);
    return {
      ...state,
      ids: ids.concat(newId),
      values: {
        ...values,
        [newId]: portfolio(undefined, CREATE_PORTFOLIO)
      }
    };
  }

  const { id } = action;
  if (id !== undefined) {
    return {
      ...state,
      values: {
        ...state.values,
        [id]: portfolio(state.values[id], action)
      }
    };
  }

  return state;
}
