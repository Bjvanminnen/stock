import React from 'react';
import IconButton from 'material-ui/lib/icon-button';
import FloatingActionButton from 'material-ui/lib/floating-action-button';
import Play from 'material-ui/lib/svg-icons/av/play-arrow';
import Pause from 'material-ui/lib/svg-icons/av/pause';
import Rewind from 'material-ui/lib/svg-icons/av/fast-rewind';
import FastForward from 'material-ui/lib/svg-icons/av/fast-forward';
import Slider from 'material-ui/lib/slider';

const styles = {
  main: {
    marginTop: 10
  },
  button: {
    margin: 5
  },
  slider: {
    marginBottom: 10,
    width: 400
  }
};

export default class PlayStateButtons extends React.Component {
  changeSlider(event, value) {
    this.props.onChangeSlider(value);
  }

  render() {
    const { isPlaying, onTogglePlay } = this.props;

    const PlayPauseIcon = isPlaying ? Pause : Play;
    return (
      <span style={styles.main}>
        <Slider defaultValue={0.5} style={styles.slider} onChange={this.changeSlider.bind(this)}/>
        <div>
          <FloatingActionButton mini={true} style={styles.button} onClick={onTogglePlay}>
            <PlayPauseIcon />
          </FloatingActionButton>
        </div>
      </span>
    );
  }
}
