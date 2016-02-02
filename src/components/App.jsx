import React from 'react';

import { Router, Route, Link, IndexRoute, IndexLink } from 'react-router'

import Chart1 from './Chart1';
import Chart2 from './Chart2';
import Portfolio from './Portfolio';

const LinkToHome = () => (
  <div><IndexLink to="/">Back</IndexLink></div>
);

const Page = (props) => {
  return (
    <div>
      {props.location.pathname !== "/" ? <LinkToHome/> : undefined}
      {props.children}
    </div>
  );

};

const Index = () => (
  <div>
    <div>BaseApp</div>
    <div><Link to="/chart1">Chart1</Link></div>
    <div><Link to="/chart2">Chart2</Link></div>
    <div><Link to="/portfolio">Portfolio</Link></div>
  </div>
);

const App = () => (
  <Router>
    <Route path="/" component={Page}>
      <IndexRoute component={Index}/>
      <Route path="chart1" component={Chart1}/>
      <Route path="chart2" component={Chart2}/>
      <Route path="portfolio" component={Portfolio}/>
    </Route>
  </Router>
);
export default App;
