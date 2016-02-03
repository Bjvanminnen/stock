import React from 'react';

import {Button} from 'react-toolbox/lib/button';

export default class Portfolio extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <Button raised>Rename</Button>
    );
  }
}
