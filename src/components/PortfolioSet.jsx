import React from 'react';
import { connect } from 'react-redux'

import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';

import Portfolio from './Portfolio';

/**
 * Displays a chart comparing a stock's value without dividends vs. with
 * dividends (not reinvesting) over time.
 */
class PortfolioSet extends React.Component {
  constructor(props) {
    super(props);

    this.handleTabChange = this.handleTabChange.bind(this);
    this.addTab = this.addTab.bind(this);

    this.state = {
      index: -1,
      tabs: []
    };
  }

  addTab() {
    this.setState({
      tabs: this.state.tabs.concat('New Portfolio')
    });
    setTimeout(() => {
      this.setState({index: this.state.tabs.length - 1});
    }, 1);
  }

  handleTabChange(index) {
    this.setState({index});
  }

  render() {
    console.log(this.state.tabs);
    return (
      <Tabs index={this.state.index} onChange={this.handleTabChange}>
        {this.state.tabs.map((tab, index) => (
          <Tab key={index} label={tab} value={index}>
            <Portfolio/>
          </Tab>
        ))}
        <Tab label="+" onActive={this.addTab}></Tab>
      </Tabs>
    );
  }
}

export default connect(state => state.portfolio)(PortfolioSet);
