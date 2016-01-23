import React from 'react';

export default class InputRow extends React.Component {
  static propTypes = {
    onChange: React.PropTypes.func.isRequired
  }

  handleChange() {
    const symbol = this.refs.symbol.value;
    const start = this.refs.start.value;
    const end = this.refs.end.value;
    // TODO - could do some validate here

    this.props.onChange(symbol, start, end);
  }

  render() {
    return (
      <div>
        Symbol: <input ref="symbol"/>
        Start: <input type="date" defaultValue="2016-01-01" ref="start"/>
        End: <input type="date" defaultValue="2016-01-05" ref="end"/>
        <button onClick={this.handleChange.bind(this)}>Change</button>
      </div>
    );
  }
}
