import React from 'react';
import SimplePriceWithDividendsChart from './SimplePriceWithDividendsChart';

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
    const { quote, dividends } = this.props;

    let chart;
    if (quote && dividends) {
      chart = <SimplePriceWithDividendsChart
        quoteData={quote}
        dividendData={dividends}/>
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
