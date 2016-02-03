import React from 'react';
import { connect } from 'react-redux';

import Dropdown from 'react-toolbox/lib/dropdown';

class PortfolioPicker extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.state = {
      value: 'None'
    };
  }

  handleChange(value) {
    this.setState({value: value});
  }

  render() {
    const data = [
      { value: 'None', label: '' },
      { value: 'Value1', label: 'Label1' },
      { value: 'Value2', label: 'Label2' },
      { value: 'Value3', label: 'Label3' },
    ];
    return (
      <Dropdown
        onChange={this.handleChange}
        source={data}
        value={this.state.value}
      />
    );
  }
}

export default connect(state => state.portfolio)(PortfolioPicker);
