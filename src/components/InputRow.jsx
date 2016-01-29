import React from 'react';

export default class InputRow extends React.Component {
  static propTypes = {
    onChange: React.PropTypes.func.isRequired
  }

  handleChange() {
    const symbols = this.refs.symbols.value;
    const start = this.refs.start.value;
    const end = this.refs.end.value;
    // TODO - could do some validate here

    this.props.onChange(symbols.split(','), start, end);
  }

  render() {
    return (
      <div>
        Symbols: <input ref="symbols" defaultValue="SPY"/>
        Start: <input type="date" defaultValue="2015-01-01" ref="start"/>
        End: <input type="date" defaultValue="2015-12-31" ref="end"/>
        <button onClick={this.handleChange.bind(this)}>Change</button>
      </div>
    );
  }
}
