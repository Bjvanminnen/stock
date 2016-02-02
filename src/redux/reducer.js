import dataResponses from './dataResponses';
import chart1 from './chart1';
import chart2 from './chart2';
import portfolio from './portfolio';

export default function reducer(state = {}, action) {
  const newData = dataResponses(state.dataResponses, action);

  return {
    dataResponses: newData,
    chart1: chart1(state.chart1, action, newData),
    chart2: chart2(state.chart2, action, newData),
    portfolio: portfolio(state.portfolio, action)
  };
};
