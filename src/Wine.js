import React, { Component } from 'react';
import { ResidualsVis } from 'residuals-vis';
import { wineConfig } from './config/wine.js';

//load datasets from local files
import { glmWine } from './data/glm-wine-predictions-deviances';
import { drfWine } from './data/drf-wine-predictions-deviances';
import { gbmWine } from './data/gbm-wine-predictions-deviances';
import { dlWine } from './data/dl-wine-predictions-deviances';

export default React.createClass({
  render() {
    return (
      <div className="App">
        <ResidualsVis config={wineConfig} datasets={[
          dlWine,
          drfWine,
          gbmWine,
          glmWine
        ]}/>    
      </div>
    );
  }
})
