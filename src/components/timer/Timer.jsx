import React from 'react';
import { connect } from 'react-redux'

import DailyChange from './DailyChange';
import PausePlay from './PausePlay';

import { timerLoad } from '../../redux/actions';

const styles = {
  pre: {
    height: 200,
    overflow: 'scroll',
    fontSize: 10,
    paddingTop: 50
  }
};

class Timer extends React.Component {
  constructor(props) {
    super(props);

    this.togglePlay = this.togglePlay.bind(this);

    this.state = {
      date: null,
      isPlaying: false
    };
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(timerLoad());
  }

  togglePlay() {
    this.setState({ isPlaying: !this.state.isPlaying });
  }

  render() {
    const { data } = this.props;
    const { isPlaying } = this.state;

    return (
      <div>
        <DailyChange val={1.23} percent={0.54}/>
        <PausePlay isPlaying={isPlaying} onClick={this.togglePlay}/>
        <pre style={styles.pre}>{data}</pre>
      </div>
    );
  }
}

const selector = (state) => {
  const { timer } = state;

  return {
    data: JSON.stringify(timer.data, null, 2)
  };
};

export default connect(selector)(Timer);
