import React from 'react';

import InputRow from './InputRow';
import YahooResponseView from './YahooResponseView';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      symbol: null,
      start: null,
      end: null
    };
  }

  handleChange(symbol, start, end) {
    this.setState({symbol, start, end});
  }

  render() {
    const { symbol, start, end } = this.state;

    return (
      <div>
        <InputRow onChange={this.handleChange.bind(this)}/>
        <YahooResponseView symbol={symbol} start={start} end={end}/>
      </div>
    );
  }
}
