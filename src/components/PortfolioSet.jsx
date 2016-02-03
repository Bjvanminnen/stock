import React from 'react';
import { connect } from 'react-redux'

import {Tab, Tabs} from 'react-toolbox/lib/tabs';

import Portfolio from './Portfolio';

/**
 * Displays a chart comparing a stock's value without dividends vs. with
 * dividends (not reinvesting) over time.
 */
class PortfolioSet extends React.Component {
  constructor(props) {
    super(props);

    this.handleTabChange = this.handleTabChange.bind(this);

    this.state = {
      index: 0,
      tabs: []
    };
  }

  handleTabChange(index) {
    if (index === this.state.tabs.length) {
      this.setState({
        tabs: this.state.tabs.concat('New Portfolio')
      });
    }
    this.setState({index});
    setTimeout(() => {
      this.setState({index});
    }, 1);
  }

  render() {
    console.log(this.state.tabs);
    return (
      <Tabs index={this.state.index} onChange={this.handleTabChange}>
        {this.state.tabs.map((tab, index) => (
          <Tab key={index} label={tab}>
            <Portfolio/>
          </Tab>
        ))}
        <Portfolio/>
        <Tab label="+"></Tab>
      </Tabs>
    );
  }
}

export default connect(state => state.portfolio)(PortfolioSet);
