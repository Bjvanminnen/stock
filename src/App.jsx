import React from 'react';

import InputRow from './InputRow';
import YahooResponseView from './YahooResponseView';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lastResult: ""
    };
  }

  handleChange(symbol, start, end) {
    console.log(symbol, start, end);
    fetch(`http://localhost:8000/${symbol}/${start}/${end}`)
      .then(response => {
        response.json().then(json => {
          this.setState({lastResult: json});
        });
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div>
        <InputRow onChange={this.handleChange.bind(this)}/>
        <YahooResponseView response={this.state.lastResult}/>
      </div>
    );
  }
}
