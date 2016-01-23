import React from 'react';

import InputRow from './InputRow';

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
          console.log(json);
          this.setState({lastResult: json});
        });
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div>
        <InputRow onChange={this.handleChange.bind(this)}/>
        <pre>{JSON.stringify(this.state.lastResult, null, 2)}</pre>
      </div>
    );
  }
}
