import React from 'react';
import IconButton from 'material-ui/lib/icon-button';
import FloatingActionButton from 'material-ui/lib/floating-action-button';
import Play from 'material-ui/lib/svg-icons/av/play-arrow';
import Pause from 'material-ui/lib/svg-icons/av/pause';

const styles = {
  button: {
    margin: 5
  }
};

// TODO stateless component
export default class PausePlay extends React.Component {
  render() {
    const { isPlaying, onClick } = this.props;

    const Icon = isPlaying ? Pause : Play;
    return (
      <FloatingActionButton mini={true} style={styles.button} onClick={onClick}>
        <Icon />
      </FloatingActionButton>
    );
  }
}
