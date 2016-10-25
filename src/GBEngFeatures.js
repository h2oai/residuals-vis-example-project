import React from 'react';
import { ResidualsVis } from 'residuals-vis';
import { grupoBimboDmitryFeaturesConfig } from './config/grupoBimboDmitryFeatures';

//load datasets from local files
import { gbEfDRFAggregated8 }     from './data/gb-ef-drf-c70bb027-a911-4f67-a754-bb25c31f7ae8-aggregated-0-8';
// import { gbEfGBM2000Aggregated8 } from './data/gb-ef-gbm-5933fc16-fb84-4d92-9859-831f62244660-aggregated-0-8';
import { gbEfGBM50Aggregated8 }   from './data/gb-ef-gbm-6453814e-3bfb-4764-b409-b29787447183-aggregated-0-8';
// import { gbEfGBM1000Aggregated8 } from './data/gb-ef-gbm-cfcd9d90-108b-42f4-bd19-90de6e6fafd8-aggregated-0-8';
import { gbEfGLMAggregated8 }     from './data/gb-ef-glm-81e8729d-e7a5-4b36-ae26-c6c55a2d94c5-aggregated-0-8';

export default React.createClass({
  render() {
    return (
      <div className="App">
        <ResidualsVis config={grupoBimboDmitryFeaturesConfig} datasets={[
          gbEfDRFAggregated8,
          // gbEfGBM2000Aggregated8,
          gbEfGBM50Aggregated8,
          // gbEfGBM1000Aggregated8,
          gbEfGLMAggregated8
        ]}/>    
      </div>
    );
  }
})


