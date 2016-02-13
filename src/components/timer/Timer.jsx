import React from 'react';
import { connect } from 'react-redux'

import DailyChange from './DailyChange';
import PlayStateButtons from './PlayStateButtons';

import { load } from '../../redux/timerActions';

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
    this.onTick = this.onTick.bind(this);
    this.handleChangeSlider = this.handleChangeSlider.bind(this);

    this.state = {
      date: null,
      isPlaying: false,
      index: 600,
      speed: 0.5
    };
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(load());

    // TODO - the right time to start this might be elsewhere?
    setTimeout(this.onTick, INTERVAL);
  }

  onTick() {
    if (!this.state.isPlaying) {
      return;
    }

    // TODO - would i prefer to capture this in redux?
    this.setState({ index: this.state.index + 1});

    console.log(INTERVAL * 2 * this.state.speed);
    setTimeout(this.onTick, INTERVAL * 2 * this.state.speed);
  }

  togglePlay() {
    const isPlaying = !this.state.isPlaying;
    this.setState({ isPlaying });
    if (isPlaying) {
      setTimeout(this.onTick, INTERVAL);
    }
  }

  handleChangeSlider(value) {
    this.setState({ speed: 1 - value });
  }

  render() {
    const { data } = this.props;
    const { isPlaying, index } = this.state;

    return (
      <div>
        <div style={{width: 400, textAlign: 'center'}}>
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
        </div>
        <PlayStateButtons
          isPlaying={isPlaying}
          onChangeSlider={this.handleChangeSlider}
          onTogglePlay={this.togglePlay}
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
