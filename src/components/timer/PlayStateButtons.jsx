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
  buttonDiv: {
    width: 400,
    textAlign: 'center'
  },
  button: {
    margin: 5
  }
};

export default class PlayStateButtons extends React.Component {
  render() {
    const { isPlaying, onTogglePlay } = this.props;

    const PlayPauseIcon = isPlaying ? Pause : Play;
    return (
      <span style={styles.main}>
        <div style={styles.buttonDiv}>
          <FloatingActionButton mini={true} style={styles.button} onClick={onTogglePlay}>
            <PlayPauseIcon />
          </FloatingActionButton>
        </div>
      </span>
    );
  }
}
