import React from 'react';

import Paper from 'material-ui/lib/paper';

const styles = {
  main: {
    display: 'inline-block',
    padding: 5
  },
  positive: {
    color: 'green'
  },
  negative: {
    color: 'red'
  }
};


class DailyChange extends React.Component {
  render() {
    const { val, percent } = this.props;
    const diffStyle = val >= 0 ? styles.positive : styles.negative;

    return (
      <div>
        <Paper zDepth={3} style={styles.main}>
          <div style={diffStyle}>{val}</div>
          <div style={diffStyle}>{percent} %</div>
        </Paper>
      </div>
    );
  }
}
export default DailyChange;
