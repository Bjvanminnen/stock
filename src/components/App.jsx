import React from 'react';

import InputRow from './InputRow';
import YahooResponseView from './YahooResponseView';

import { getTickerData, getDividendData } from '../yahooData';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lastQuoteResponse: "",
      lastDividendResponse: ""
    };
  }

  handleChange(symbol, start, end) {
    console.log(symbol, start, end);

    getTickerData(symbol, start, end)
    .then(json => {
      this.setState({lastQuoteResponse: json});
    })
    .catch(err => console.log(err));

    getDividendData(symbol, start, end)
    .then(json => {
      this.setState({lastDividendResponse: json});
    })
    .catch(err => console.error(err));
  }

  render() {
    return (
      <div>
        <InputRow onChange={this.handleChange.bind(this)}/>
        <YahooResponseView quote={this.state.lastQuoteResponse} dividends={this.state.lastDividendResponse}/>
      </div>
    );
  }
}
