import React from 'react';
import { connect } from 'react-redux'

import InputRow from './InputRow';
import SimplePriceWithDividendsChart from './SimplePriceWithDividendsChart';

import { getData } from '../redux/actions';

// TODO - could write a stateless component?
class Chart1 extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(symbol, start, end) {
    const { dispatch } = this.props;
    dispatch(getData(symbol, start, end));
  }

  render() {
    const { ticker, dividend, combined } = this.props;

    return (
      <div>
        <InputRow onChange={this.handleChange}/>
        <SimplePriceWithDividendsChart data={combined}/>
      </div>
    );
  }
}

export default connect(state => state.chart1)(Chart1);
