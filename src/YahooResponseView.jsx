import React from 'react';
// import { Chart } from 'react-google-charts';
var Chart = require('react-google-charts').Chart;

export default class YahooResponseView extends React.Component {
  render() {
    const styles = {
      pre: {
        height: 300,
        overflow: 'scroll'
      }
    };

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

    let chart;
    if (this.props.response) {
      const rows = this.props.response.map(entry => [new Date(entry.date), entry.close]);
      console.log(columns, rows);
      chart = <Chart
        chartType="LineChart"
        width={1000}
        height={400}
        options={options}
        rows={rows}
        columns={columns}/>;
    }

    return (
      <div>
        {chart}
        <pre style={styles.pre}>{JSON.stringify(this.props.response, null, 2)}</pre>
      </div>
    );
  }
}
