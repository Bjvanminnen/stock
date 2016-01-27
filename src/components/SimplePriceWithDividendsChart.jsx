import React, { PropTypes } from 'react';
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
    label: 'Value'
  }
];


// To start with, we don't reinvest dividends
const generateRows = (quoteData, dividendData, includeDividends) => {
  const startVal = quoteData[0].close;
  const numShares = 10000 / startVal;

  const divByDate = dividendData.reduce((obj, entry) => {
    obj[entry.date] = entry.dividends * numShares;
    return obj;
  }, {});

  // assumes quote data is ordered by date
  let totalDividends = 0;
  const data = quoteData.map(entry => {
    const { date } = entry;
    if (includeDividends) {
      totalDividends += (divByDate[date] || 0);
    }
    return [
      date,
      (entry.close * numShares) + totalDividends
    ];
  });
  return data;
};

const SimplePriceWithDividendsChart = ({quoteData, dividendData}) => {
  return <Chart
    chartType="LineChart"
    width={1000}
    height={400}
    options={options}
    rows={generateRows(quoteData, dividendData)}
    columns={columns}/>;
};
export default SimplePriceWithDividendsChart;
