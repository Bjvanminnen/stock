import React from 'react';
import SimplePriceWithDividendsChart from './SimplePriceWithDividendsChart';
import ResponseViewer from './ResponseViewer';

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
        <ResponseViewer data={quote}/>
        <ResponseViewer data={dividends}/>
      </div>
    );
  }
}
