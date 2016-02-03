import React from 'react';

import TextField from 'material-ui/lib/text-field';

export default class Portfolio extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const newName = event.target.value;
    const { index, onChangeName } = this.props;
    onChangeName(index, newName);
  }

  render() {
    const { name } = this.props;
    return (
      <TextField
        floatingLabelText="Portfolio name"
        onChange={this.handleChange}
        defaultValue={name}/>
    );
  }
}
