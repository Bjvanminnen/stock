import React from 'react';

import TextField from 'material-ui/lib/text-field';

import StockList from './StockList';

export default class Portfolio extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const newName = event.target.value;
    const { id, onChangeName } = this.props;
    onChangeName(id, newName);
  }

  render() {
    const { name } = this.props;
    return (
      <div>
        <TextField
          floatingLabelText="Portfolio name"
          onChange={this.handleChange}
          defaultValue={name}/>
        <StockList/>
      </div>
    );
  }
}
