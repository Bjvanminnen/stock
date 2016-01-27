import React from 'react';
import SimplePriceWithDividendsChart from './SimplePriceWithDividendsChart';

const styles = {
  pre: {
    height: 200,
    // width: '48%',
    overflow: 'scroll',
    border: '1px solid black',
    fontSize: 10,
    margin: 5,
    display: 'inline-block'
  }
};

export default class YahooResponseView extends React.Component {
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
