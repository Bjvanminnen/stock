import React from 'react';
import { Chart } from 'react-google-charts';

const options = {
  title: 'Close over time',
  vAxis: {title: 'Close'}
};

const columns = [
  {
    type: 'date',
    label: 'Date'
  },
  {
    type: 'number',
    label: 'No Dividend'
  },
  {
    type: 'number',
    label: 'Dividend'
  }
];

const SimplePriceWithDividendsChart = ({data}) => {
  if (!data) {
    return <div>Loading...</div>;
  }
  return <Chart
    chartType="LineChart"
    width={1000}
    height={400}
    options={options}
    rows={data}
    columns={columns}/>;
};
export default SimplePriceWithDividendsChart;
