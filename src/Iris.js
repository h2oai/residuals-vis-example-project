import React from 'react';
import { ResidualsVis } from 'residuals-vis';
import { irisConfig } from './config/iris.js';

export default React.createClass({
  render() {
    return (
      <div className="App">
        <ResidualsVis config={irisConfig}/>    
      </div>
    );
  }
})
