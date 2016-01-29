import React from 'react';
import { connect } from 'react-redux';

/**
 * Displays a chart comparing the value of two or more stocks over time
 */
class Chart2 extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(symbols, start, end) {
  }

  render() {
    return (
      <div>
        chart here
        <pre>{JSON.stringify(this.props.data, null, 2)}</pre>
      </div>
    );
  }
}

export default connect(state => state.chart2)(Chart2);
