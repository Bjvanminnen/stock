import React from 'react';
import { connect } from 'react-redux'

import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';

import Portfolio from './Portfolio';

import { changePortfolioName, createPortfolio } from '../redux/actions';

/**
 * Displays a chart comparing a stock's value without dividends vs. with
 * dividends (not reinvesting) over time.
 */
class PortfolioSet extends React.Component {
  constructor(props) {
    super(props);

    this.addTab = this.addTab.bind(this);
    this.changePortfolioName = this.changePortfolioName.bind(this);

    this.state = {
      index: -1
    };
  }

  addTab() {
    const { dispatch } = this.props;
    dispatch(createPortfolio());
  }

  changePortfolioName(index, newName) {
    const { dispatch } = this.props;
    dispatch(changePortfolioName(index, newName));
  }

  render() {
    const { names, activePortfolioIndex } = this.props;

    return (
      <Tabs>
        {names.map((name, index) => (
          <Tab key={index} label={name} value={index}>
            <Portfolio
              name={name}
              index={index}
              onChangeName={this.changePortfolioName}/>
          </Tab>
        ))}
        <Tab label="+" onActive={this.addTab}></Tab>
      </Tabs>
    );
  }
}

const selector = (state) => {
  return {
    names: state.portfolio.names
  };
};

export default connect(selector)(PortfolioSet);
