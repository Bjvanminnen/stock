import React from 'react';
import { Chart } from 'react-google-charts';

const options = {
  title: 'Price over time (non-reinvested dividends)',
  vAxis: {title: 'Close'}
};

const StockVsIndexChart = ({data, symbol, index}) => {
  const columns = [
    {
      type: 'date',
      label: 'Date'
    },
    {
      type: 'number',
      label: symbol
    },
    {
      type: 'number',
      label: index
    }
  ];

  const chartData = data.map(row => {
    const [dateString, symbol, index] = row;
    return [new Date(dateString), symbol, index];
  });

  return <Chart
    chartType="LineChart"
    width={1000}
    height={400}
    options={options}
    rows={chartData}
    columns={columns}/>;
};
export default StockVsIndexChart;
