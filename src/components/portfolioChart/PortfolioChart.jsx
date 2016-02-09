import React from 'react';
import { connect } from 'react-redux'

import { changeActivePortfolio } from '../../redux/actions';

import SelectField from 'material-ui/lib/select-field';
import MenuItem from 'material-ui/lib/menus/menu-item';

class PortfolioChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'brent'
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, index, value) {
    const { dispatch } = this.props;
    dispatch(changeActivePortfolio(value));
  }

  componentDidMount() {
    const { dispatch, portfolios, currentPortfolio } = this.props;
    if (currentPortfolio === undefined && portfolios.length) {
      dispatch(changeActivePortfolio(portfolios[0].id));
    }
  }

  render() {
    const { portfolios, currentPortfolio } = this.props;

    return (
      <div>
        <div>
          <SelectField value={currentPortfolio} onChange={this.handleChange}>
            {portfolios.map(portfolio => (
              <MenuItem
                key={portfolio.id}
                value={portfolio.id}
                primaryText={portfolio.name}/>
            ))}
          </SelectField>
        </div>
        Portfolio chart here
      </div>
    );
  }
}

const selector = (state) => {
  const { portfolios, portfolioChart } = state;
  const { ids, values } = portfolios;

  return {
    portfolios: ids.map(id => ({
      id: id,
      name: values[id].name
    })),
    currentPortfolio: portfolioChart.current
  };

  // TODO activePortfolioIndex
};

export default connect(selector)(PortfolioChart);
