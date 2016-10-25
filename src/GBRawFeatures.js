import React, { Component } from 'react';
import { ResidualsVis } from 'residuals-vis';
import { grupoBimboNaiveAggregatedConfig } from './config/grupoBimboNaiveAggregated';

//load datasets from local files
import { gbGLMAggregated05 } from './data/gb-glm-aggregated-0-05';
import { gbDRFAggregated05 } from './data/gb-drf-aggregated-0-05';
import { gbGBMAggregated05 } from './data/gb-gbm-aggregated-0-05';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ResidualsVis config={grupoBimboNaiveAggregatedConfig} datasets={[
          gbGLMAggregated05,
          gbDRFAggregated05,
          gbGBMAggregated05
        ]}/>
      </div>
    );
  }
}

export default App;

