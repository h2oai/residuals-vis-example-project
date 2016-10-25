import React from 'react';
import { ResidualsVis } from 'residuals-vis';
import { wineConfig } from './config/wine.js';

//load datasets from local files
import { glmWine } from './data/wine-glm-combined-predictions-deviances';
import { drfWine } from './data/wine-drf-combined-predictions-deviances';
import { gbmWine } from './data/wine-gbm-combined-predictions-deviances';
import { dlWine } from './data/wine-dl-combined-predictions-deviances';

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
