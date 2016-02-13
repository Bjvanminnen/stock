import React from 'react';

import Paper from 'material-ui/lib/paper';

const styles = {
  main: {
    display: 'inline-block',
    padding: 5,
    margin: 10
  },
  date: {
    fontWeight: 'bolder'
  },
  positive: {
    color: 'green'
  },
  negative: {
    color: 'red'
  }
};

const formatDate = dateString => {
  const date = new Date(dateString);
  let month = (date.getMonth() + 1).toString();
  if (month.length === 1) {
    month = '0' + month;
  }
  let day = date.getDate().toString();
  if (day.length === 1) {
    day = '0' + day;
  }
  let year = (date.getYear() + 1900).toString();

  return month + '-' + day + '-' + year;
};

class DailyChange extends React.Component {
  render() {
    const { data, index, onClick } = this.props;

    let paperContents;

    if (index >= 0) {
      const date = formatDate(data[index].date);
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
          <div style={styles.date}>{date}</div>
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
