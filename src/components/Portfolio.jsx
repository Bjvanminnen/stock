import React from 'react';
import { connect } from 'react-redux'

import {Tab, Tabs} from 'react-toolbox/lib/tabs';

/**
 * Displays a chart comparing a stock's value without dividends vs. with
 * dividends (not reinvesting) over time.
 */
class Portfolio extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0
    };
  }

  handleTabChange(index) {
    this.setState({index});
  }

  render() {
    // return <div>Portfolio</div>
    return (
      <Tabs index={this.state.index} onChange={this.handleTabChange}>
        <Tab label='Primary'><small>Primary content</small></Tab>
        <Tab label='Secondary'><small>Secondary content</small></Tab>
        <Tab label='Third'><small>Disabled content</small></Tab>
        <Tab label='Fourth'><small>Fourth content hidden</small></Tab>
        <Tab label='Fifth'><small>Fifth content</small></Tab>
      </Tabs>
    );
  }
}

export default connect(state => state.portfolio)(Portfolio);
