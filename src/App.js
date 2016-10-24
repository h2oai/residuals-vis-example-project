import React, { Component } from 'react';
import { ResidualsVis } from 'residuals-vis';

// import { rossmanAggregatedConfig } from './config/rossmanAggregated';
import { rossmanRandomAggregatedConfig } from './config/rossmanRandomAggregated';
// import { santanderAggregatedConfig } from './config/santanderAggregated';
// import { grupoBimboNaiveAggregatedConfig } from './config/grupoBimboNaiveAggregated';
// import { wineConfig } from './config/wine_quality.js';
// import { grupoBimboWeekSplitAggregatedConfig } from './config/grupoBimboWeekSplitAggregated';
// import { grupoBimboDmitryFeaturesConfig } from './config/grupoBimboDmitryFeatures';

//load datasets from local files
// import { gbGLMAggregated05 } from './data/gb-glm-aggregated-0-05';
// import { gbDRFAggregated05 } from './data/gb-drf-aggregated-0-05';
// import { gbGBMAggregated05 } from './data/gb-gbm-aggregated-0-05';

//load datasets from local files
// import { glmWine } from './data/glm-wine-predictions-deviances';
// import { drfWine } from './data/drf-wine-predictions-deviances';
// import { gbmWine } from './data/gbm-wine-predictions-deviances';
// import { dlWine } from './data/dl-wine-predictions-deviances';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ResidualsVis config={rossmanRandomAggregatedConfig}/>
        
        {/* <ResidualsVis config={wineConfig} datasets={[
          glmWine,
          drfWine,
          gbmWine,  
          dlWine
        ]}/> */}
        
        {/*<ResidualsVis config={grupoBimboNaiveAggregatedConfig} datasets={[
          gbGLMAggregated05,
          gbDRFAggregated05,
          gbGBMAggregated05
        ]}/> */}
        
      </div>
    );
  }
}

export default App;
