import React from 'react';

import TextField from 'material-ui/lib/text-field';

export default class Portfolio extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <TextField floatingLabelText="Portfolio name" defaultValue={name}/>
    );
  }
}
