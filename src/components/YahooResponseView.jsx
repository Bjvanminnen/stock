import React, { PropTypes } from 'react';
import SimplePriceWithDividendsChart from './SimplePriceWithDividendsChart';
import ResponseViewer from './ResponseViewer';

import { getTickerData, getDividendData } from '../yahooData';

const processAllData = (tickerData, dividendData) => {
  const startVal = tickerData[0].close;
  const numShares = 10000 / startVal;

  const divByDate = dividendData.reduce((obj, entry) => {
    obj[entry.date] = entry.dividends * numShares;
    return obj;
  }, {});

  // assumes quote data is ordered by date
  let totalDividends = 0;
  const data = tickerData.map(entry => {
    const { date } = entry;
    totalDividends += (divByDate[date] || 0);

    return [
      date,
      (entry.close * numShares),
      (entry.close * numShares) + totalDividends
    ];
  });
  return data;
};


// TODO - may want to rename
export default class YahooResponseView extends React.Component {
  static propTypes = {
    symbol: PropTypes.string,
    startDate: PropTypes.string,
    endDate: PropTypes.string
  }

  constructor(props) {
    super(props);

    this.state = {
      quotes: null,
      dividends: null,
      data: null
    };
  }

  // TODO - redux
  createData(props) {
    const { symbol, start, end } = props;

    if (!symbol || !start || !end) {
      return;
    }

    let tickerData, dividendData;
    const processData = () => {
      if (tickerData && dividendData) {
        this.setState({
          data: processAllData(tickerData, dividendData)
        });
      }
    };

    getTickerData(symbol, start, end)
    .then(json => {
      tickerData = json;
      this.setState({quotes: json});
      processData();
    })
    .catch(err => console.log(err));

    getDividendData(symbol, start, end)
    .then(json => {
      dividendData = json;
      this.setState({dividends: json});
      processData();
    })
    .catch(err => console.error(err));
  }

  componentWillMount() {
    this.createData(this.props);
  }

  componentWillReceiveProps(newProps) {
    this.createData(newProps);
  }

  shouldComponentUpdate(nextProps, nextState) {
    // TODO - might need deep equality check?
    if (this.props === nextProps && this.state === nextState) {
      debugger;
      return false;
    }
    return true;
  }

  render() {
    const { quotes, dividends, data } = this.state;

    return (
      <div>
        <SimplePriceWithDividendsChart data={data}/>
        <ResponseViewer data={quotes}/>
        <ResponseViewer data={dividends}/>
      </div>
    );
  }
}
