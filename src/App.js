import React, { Component } from 'react';
import { ResidualsVis } from 'residualsVis';

// import { rossmanAggregatedConfig } from './config/rossmanAggregated';
import { santanderAggregatedConfig } from './config/santanderAggregated';
// import { grupoBimboAggregatedConfig } from './config/grupoBimboAggregated';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ResidualsVis config={santanderAggregatedConfig}/>
      </div>
    );
  }
}

export default App;
