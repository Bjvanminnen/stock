import React from 'react';
import IconButton from 'material-ui/lib/icon-button';
import FloatingActionButton from 'material-ui/lib/floating-action-button';
import Play from 'material-ui/lib/svg-icons/av/play-arrow';
import Pause from 'material-ui/lib/svg-icons/av/pause';
import Rewind from 'material-ui/lib/svg-icons/av/fast-rewind';
import FastForward from 'material-ui/lib/svg-icons/av/fast-forward';

const styles = {
  main: {
    marginTop: 10
  },
  button: {
    margin: 5
  }
};

// TODO stateless component
export default class PlayStateButtons extends React.Component {
  render() {
    const { isPlaying, onTogglePlay, onRewind, onFastForward } = this.props;

    const PlayPauseIcon = isPlaying ? Pause : Play;
    return (
      <div style={styles.main}>
        <FloatingActionButton mini={true} style={styles.button} onClick={onRewind}>
          <Rewind />
        </FloatingActionButton>
        <FloatingActionButton mini={true} style={styles.button} onClick={onTogglePlay}>
          <PlayPauseIcon />
        </FloatingActionButton>
        <FloatingActionButton mini={true} style={styles.button} onClick={onFastForward}>
          <FastForward />
        </FloatingActionButton>
      </div>
    );
  }
}
