import React from 'react';

import { Router, Route, Link, IndexRoute } from 'react-router'

import injectTapEventPlugin from "react-tap-event-plugin";
injectTapEventPlugin();

import Page from './Page';
import Chart1 from './chart1/Chart1';
import Chart2 from './chart2/Chart2';
import PortfolioSet from './portfolio/PortfolioSet';

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
      <Route path="portfolio" component={PortfolioSet}/>
    </Route>
  </Router>
);
export default App;
