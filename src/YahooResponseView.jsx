import React from 'react';
// import { Chart } from 'react-google-charts';
var Chart = require('react-google-charts').Chart;

const styles = {
  pre: {
    height: 300,
    overflow: 'scroll',
    border: '1px solid black'
  }
};

export default class YahooResponseView extends React.Component {
  generateRows(data) {
    const startVal = data[0].close;
    const multiplier = 10000 / startVal;

    return data.map(entry => [
      new Date(entry.date),
      (entry.close * multiplier)
    ]);
  }

  render() {
    const options = {
      title: 'Close over time',
      // hAxis: {title: 'Age', minValue: 0, maxValue: 15},
      vAxis: {title: 'Close'},
      // legend: 'none'
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

    const { quote, dividends } = this.props;

    let chart;
    if (quote) {
      chart = <Chart
        chartType="LineChart"
        width={1000}
        height={400}
        options={options}
        rows={this.generateRows(quote)}
        columns={columns}/>;
    }

    return (
      <div>
        {chart}
        <pre style={styles.pre}>{JSON.stringify(quote, null, 2)}</pre>
        <pre style={styles.pre}>{JSON.stringify(dividends, null, 2)}</pre>
      </div>
    );
  }
}
