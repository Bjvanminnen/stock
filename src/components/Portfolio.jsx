import React from 'react';

import {Button} from 'react-toolbox/lib/button';
import Input from 'react-toolbox/lib/input';

export default class Portfolio extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.name
    };
  }

  render() {
    const { name } = this.state;
    console.log(name);
    return (
      <div>
        <Button raised>Rename</Button>
        <Input type="text" value={this.name} label="bar"/>
      </div>
    );
  }
}
