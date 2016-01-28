import React from 'react';

const styles = {
  pre: {
    height: 200,
    // width: '48%',
    overflow: 'scroll',
    border: '1px solid black',
    fontSize: 10,
    margin: 5,
    display: 'inline-block'
  }
};

/**
 * Debug component used to display response output
 */
const ResponseViewer = ({data}) => {
  return <pre style={styles.pre}>{JSON.stringify(data, null, 2)}</pre>
};
export default ResponseViewer;
