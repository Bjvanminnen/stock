import React from 'react';
import { connect } from 'react-redux';

import InputRow from './InputRow';
import Loader from './Loader';
import StockVsIndexChart from './StockVsIndexChart';

import { getDataComparison } from '../redux/actions';

/**
 * Displays a chart comparing the value of two or more stocks over time
 */
class Chart2 extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(symbols, start, end) {
    const { dispatch } = this.props;
    const index = this.refs.index.value;
    dispatch(getDataComparison(index, symbols[0], start, end));
  }

  render() {
    const { processed, symbol, index } = this.props;

    return (
      <div>
        Index symbol: <input ref="index" defaultValue="SPY"/>
        <InputRow onChange={this.handleChange}/>
        <Loader isLoaded={!!processed}>
          <StockVsIndexChart data={processed} symbol={symbol} index={index}/>
        </Loader>
      </div>
    );
  }
}

function selector(state) {
  return state.chart2;
}

export default connect(selector)(Chart2);
