import React from 'react';
import { connect } from 'react-redux'

import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';

import Portfolio from './Portfolio';

import { changePortfolioName, createPortfolio, addStock } from '../../redux/actions';

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

  changePortfolioName(portfolioId, newName) {
    const { dispatch } = this.props;
    dispatch(changePortfolioName(portfolioId, newName));
  }

  addStock(portfolioId) {
    const { dispatch } = this.props;
    dispatch(addStock(portfolioId));
  }

  render() {
    const { portfolios, activePortfolioIndex } = this.props;

    return (
      <Tabs>
        {portfolios.map(({id, portfolio}) => (
          <Tab key={id} label={portfolio.name} value={id}>
            <Portfolio
              name={portfolio.name}
              stocks={portfolio.values}
              id={id}
              onChangeName={this.changePortfolioName}
              addStock={this.addStock.bind(this, id)}/>
          </Tab>
        ))}
        <Tab label="+" onActive={this.addTab}></Tab>
      </Tabs>
    );
  }
}

const selector = (state) => {
  const { ids, values } = state.portfolios;
  return {
    portfolios: ids.map(id => ({
      id: id,
      portfolio: values[id]
    }))
  };

  // TODO activePortfolioIndex
};

export default connect(selector)(PortfolioSet);
