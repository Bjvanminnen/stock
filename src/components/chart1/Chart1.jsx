import React from 'react';
import { connect } from 'react-redux'

import InputRow from '../InputRow';
import SimplePriceWithDividendsChart from './SimplePriceWithDividendsChart';
import Loader from '../Loader';

import { getSingleData } from '../../redux/actions';

/**
 * Displays a chart comparing a stock's value without dividends vs. with
 * dividends (not reinvesting) over time.
 */
class Chart1 extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(symbols, start, end) {
    const { dispatch } = this.props;
    dispatch(getSingleData(symbols[0], start, end));
  }

  render() {
    const { combined } = this.props;

    return (
      <div>
        <div>Select a single symbol</div>
        <InputRow onChange={this.handleChange}/>
        <Loader isLoaded={!!combined}>
          <SimplePriceWithDividendsChart data={combined}/>
        </Loader>
      </div>
    );
  }
}

export default connect(state => state.chart1)(Chart1);
