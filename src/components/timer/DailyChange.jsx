import React from 'react';
import moment from 'moment';

import Paper from 'material-ui/lib/paper';

const styles = {
  main: {
    display: 'inline-block',
    padding: 5,
    margin: 10
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
    const { data, index, onClick } = this.props;

    let paperContents;

    if (index >= 0) {
      const date = moment(data[index].date).format('MM-DD-YYYY');
      const val = data[index].close;
      const previousVal = index === 0 ? val : data[index - 1].close;
      const delta = val - previousVal;
      const percent = delta / previousVal * 100;

      const diffStyle = delta >= 0 ? styles.positive : styles.negative;

      const options = {
        minimumIntegerDigits: 1,
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      };

      paperContents = (
        <span>
          <div>{date}</div>
          <div style={styles.val}>{val}</div>
          <div style={diffStyle}>{delta.toLocaleString(undefined, options)}</div>
          <div style={diffStyle}>{percent.toLocaleString(undefined, options)}%</div>
        </span>
      );
    }

    return (
      <span>
        <Paper zDepth={3} style={styles.main}>
          {paperContents}
        </Paper>
      </span>
    );
  }
}
export default DailyChange;
