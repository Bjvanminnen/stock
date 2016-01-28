import React, { PropTypes } from 'react';
import SimplePriceWithDividendsChart from './SimplePriceWithDividendsChart';
import ResponseViewer from './ResponseViewer';

import { getTickerData, getDividendData } from '../yahooData';

// TODO - may want to rename
export default class YahooResponseView extends React.Component {
  static propTypes = {
    quotes: PropTypes.object,
    dividends: PropTypes.object,
    data: PropTypes.array
  }

  render() {
    const { quotes, dividends, data } = this.props;

    return (
      <div>
        <SimplePriceWithDividendsChart data={data}/>
        <ResponseViewer data={quotes}/>
        <ResponseViewer data={dividends}/>
      </div>
    );
  }
}
