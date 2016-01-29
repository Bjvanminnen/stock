import React from 'react';
import { connect } from 'react-redux';

import InputRow from './InputRow';

/**
 * Displays a chart comparing the value of two or more stocks over time
 */
class Chart2 extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(symbols, start, end) {
    console.log(symbols);
  }

  render() {
    return (
      <div>
        <div>Select multiple symbols</div>
        <InputRow onChange={this.handleChange}/>
        <pre>{JSON.stringify(this.props.data, null, 2)}</pre>
      </div>
    );
  }
}

export default connect(state => state.chart2)(Chart2);
