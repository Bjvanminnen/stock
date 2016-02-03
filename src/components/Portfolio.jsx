import React from 'react';

import RaisedButton from 'material-ui/lib/raised-button';

export default class Portfolio extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <RaisedButton>Rename</RaisedButton>
    );
  }
}
