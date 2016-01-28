import React from 'react';

import { Router, Route, Link } from 'react-router'

import Chart1 from './Chart1';
import Chart2 from './Chart2';

const Page = (props) => {
  if (props.children) {
    return (
      <div>
        <div><Link to="/">Back</Link></div>
        {props.children}
      </div>
    );
  }

  return (
    <div>
      <div>BaseApp</div>
      <div><Link to="/chart1">Chart1</Link></div>
      <div><Link to="/chart2">Chart2</Link></div>
    </div>
  );
};

const App = () => (
  <Router>
    <Route path="/" component={Page}>
      <Route path="chart1" component={Chart1}/>
      <Route path="chart2" component={Chart2}/>
    </Route>
  </Router>
);
export default App;
