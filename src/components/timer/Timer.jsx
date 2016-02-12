import React from 'react';
import { connect } from 'react-redux'

import { timerLoad } from '../../redux/actions';

class Timer extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(timerLoad());
  }

  render() {
    const { data } = this.props;
    return (
      <div>
        Timer
        <pre>{data}</pre>
      </div>
    );
  }
}

const selector = (state) => {
  const { timer } = state;

  return {
    data: JSON.stringify(timer.data)
  };
};

export default connect(selector)(Timer);
