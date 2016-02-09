import dataResponses from './dataResponses';
import chart1 from './chart1';
import chart2 from './chart2';
import portfolios from './portfolios';
import portfolioChart from './portfolioChart';

import { CLEAR_STATE } from './actions';

export default function reducer(state = {}, action) {
  if (action.type === CLEAR_STATE) {
    state = {};
  }

  const newData = dataResponses(state.dataResponses, action);

  return {
    dataResponses: newData,
    chart1: chart1(state.chart1, action, newData),
    chart2: chart2(state.chart2, action, newData),
    portfolios: portfolios(state.portfolios, action),
    portfolioChart: portfolioChart(state.portfolioChart, action, newData)
  };
};
