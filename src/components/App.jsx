import React from 'react';

import InputRow from './InputRow';
import YahooResponseView from './YahooResponseView';

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
    fetch(`http://localhost:8000/?symbol=${symbol}&startDate=${start}&endDate=${end}`)
      .then(response => {
        response.json().then(json => {          
          this.setState({lastQuoteResponse: json});
        });
      })
      .catch(err => console.error(err));

    fetch(`http://localhost:8000/?symbol=${symbol}&startDate=${start}&endDate=${end}&dividend=true`)
      .then(response => {
        response.json().then(json => {
          this.setState({lastDividendResponse: json});
        });
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
