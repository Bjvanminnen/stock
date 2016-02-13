import React from 'react';
import { connect } from 'react-redux'

import DailyChange from './DailyChange';
import PlayStateButtons from './PlayStateButtons';

import { timerLoad } from '../../redux/actions';

const INTERVAL = 1000;

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
    this.handleRewind = this.handleRewind.bind(this);
    this.handleFastForward = this.handleFastForward.bind(this);
    this.onTick = this.onTick.bind(this);

    this.state = {
      date: null,
      isPlaying: false,
      index: 600,
      speed: 0.5
    };
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(timerLoad());

    // TODO - the right time to start this might be elsewhere?
    setTimeout(this.onTick, INTERVAL);
  }

  onTick() {
    if (!this.state.isPlaying) {
      return;
    }

    // TODO - would i prefer to capture this in redux?
    this.setState({ index: this.state.index + 1});

    setTimeout(this.onTick, INTERVAL * 2 * this.state.speed);
  }

  togglePlay() {
    const isPlaying = !this.state.isPlaying;
    this.setState({ isPlaying });
    if (isPlaying) {
      setTimeout(this.onTick, INTERVAL);
    }
  }

  handleRewind() {
    if (this.state.index === 0) {
      return;
    }

    this.setState({ index: this.state.index - 1 });
  }

  handleFastForward() {
    if (this.state.index + 1 === this.props.numDays) {
      return;
    }

    this.setState({ index: this.state.index + 1 });
  }

  handleChangeSlider(speed) {
    this.setState({ speed });
  }

  render() {
    const { data } = this.props;
    const { isPlaying, index } = this.state;

    return (
      <div>
        <DailyChange
          data={data}
          index={index - 2}
          />
        <DailyChange
          data={data}
          index={index - 1}
          />
        <DailyChange
          data={data}
          index={index}
          />
        <PlayStateButtons
          isPlaying={isPlaying}
          onChangeSlider={this.handleChangeSlider}
          onTogglePlay={this.togglePlay}
          onRewind={this.handleRewind}
          onFastForward={this.handleFastForward}
          />
        <pre style={styles.pre}>{JSON.stringify(data, null ,2)}</pre>
      </div>
    );
  }
}

const selector = (state) => {
  const { timer } = state;

  return {
    data: timer.data.symbolTicker,
    numDays: timer.data.symbolTicker.length
  };
};

export default connect(selector)(Timer);
