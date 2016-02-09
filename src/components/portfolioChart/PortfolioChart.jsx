import React from 'react';

import SelectField from 'material-ui/lib/select-field';
import MenuItem from 'material-ui/lib/menus/menu-item';

export default class PortfolioChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'brent'
    };
  }

  handleChange() {
    console.log('handle change');
  }

  render() {
    return (
      <div>
        <div>
          <SelectField value={this.state.value} onChange={this.handleChange}>
            <MenuItem value="brent" primaryText="Brent"/>
            <MenuItem value="second" primaryText="Second"/>
          </SelectField>
        </div>
        Portfolio chart here
      </div>
    );
  }
}
