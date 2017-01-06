import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './App';
// import Home from './Home';
// import GBRawFeatures from './GBRawFeatures';
import GBEngFeatures from './GBEngFeatures';
// import Wine from './Wine';
// import Iris from './Iris';
import './index.css';
import './bootstrap.min.css';

render(( 
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={GBEngFeatures}/>
      {/* <Route path="/gb-raw-features" component={GBRawFeatures}/> */}
      {/* <Route path="/gb-eng-features" component={GBEngFeatures}/> */}
      {/* <Route path="/wine" component={Wine}/> */ }
      {/* <Route path="/iris" component={Iris}/> */ }
    </Route>
  </Router>
), document.getElementById('root'))