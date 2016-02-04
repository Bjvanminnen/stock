import React from 'react';
import { IndexLink } from 'react-router'
import { connect } from 'react-redux'

import { clearState } from '../redux/actions';

const LinkToHome = () => (
  <span><IndexLink to="/">Back</IndexLink></span>
);

const styles = {
  clear: {
    marginLeft: 10
  }
};

const Page = (props) => {
  return (
    <div>
      {props.location.pathname !== "/" ? <LinkToHome/> : undefined}
      <button
        style={styles.clear}
        onClick={() => props.dispatch(clearState())}>
        Clear state
      </button>
      {props.children}
    </div>
  );
};
export default connect()(Page);
