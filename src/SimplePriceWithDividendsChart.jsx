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

// TODO - stateless component from react v.14?
export default class SimplePriceWithDividendsChart extends React.Component {
  static propTypes = {
    quoteData: PropTypes.array.isRequired,
    dividendData: PropTypes.array.isRequired
  }

  generateRows(data) {
    const startVal = data[0].close;
    const multiplier = 10000 / startVal;

    return data.map(entry => [
      new Date(entry.date),
      (entry.close * multiplier)
    ]);
  }


  render() {
    const { quoteData, dividendData } = this.props;

    // TODO - integrate dividend data

    return <Chart
      chartType="LineChart"
      width={1000}
      height={400}
      options={options}
      rows={this.generateRows(quoteData)}
      columns={columns}/>;
  }
}
