export const grupoBimboDmitryFeaturesConfig = {
  // text and page layout
  projectTitle: 'Grupo Bimbo Inventory Demand',
  projectLink: 'https://www.kaggle.com/c/grupo-bimbo-inventory-demand',
  projectTitleNote: '',
  dataText: 'features engineered with data',
  currentAlgo: 'drf',
  currentAlgoLabel: 'Distributed Random Forest',
  // boxplot config
  sortBoxplots: 'rootMeanSquaredValue',
  skeletonBox: true,
  // data attributes. this determines what sort of transition is shown.  will deprecate.
  aggregated: true,
  // API config for normal client-server mode
  server: 'http://192.168.0.106/',
  port: '55555',
  frameIDs: {
    'drf-460f78d7-e5e3-4ea7-8a08-b877de724119': 'aggregated_combined-combined-Bimbo_valid_processed.hex-predictions_99ce_drf-460f78d7-e5e3-4ea7-8a08-b877de724119_on_Bimbo_valid_processed.hex-deviances_86b2_drf-460f78d7-e5e3-4ea7-8a08-b877de724119_on_Bimbo_valid_processed.hex_by_aggregator-b4209a31-b303-4e9d-89b7-cdd11228iu7ip',
    'gbm-9a8e7868-3689-4f51-bdc6-5ea068478094': 'aggregated_combined-combined-Bimbo_valid_processed.hex-predictions_9948_gbm-9a8e7868-3689-4f51-bdc6-5ea068478094_on_Bimbo_valid_processed.hex-deviances_8053_gbm-9a8e7868-3689-4f51-bdc6-5ea068478094_on_Bimbo_valid_processed.hex_by_aggregator-b4209a31-b303-4e9d-89b7-cdd11228iu7ip',
    ' glm-2e52c7c0-dd22-4e76-8372-c2cbb7dd0141': 'aggregated_combined-combined-Bimbo_valid_processed.hex-predictions_b4e1_glm-2e52c7c0-dd22-4e76-8372-c2cbb7dd0141_on_Bimbo_valid_processed.hex-deviances_8f59_glm-2e52c7c0-dd22-4e76-8372-c2cbb7dd0141_on_Bimbo_valid_processed.hex_by_aggregator-b4209a31-b303-4e9d-89b7-cdd11228iu7ip',
  },
  models: [ 'drf', 'gbm', 'glm'], // will refactor and deprecate
  modelIDs: [ 'drf', 'gbm', 'glm'],
  // modelIDs: [
  //   'drf-460f78d7-e5e3-4ea7-8a08-b877de724119',
  //   'gbm-9a8e7868-3689-4f51-bdc6-5ea068478094',
  //   'glm-2e52c7c0-dd22-4e76-8372-c2cbb7dd0141'
  // ],
  modelMetrics: {
    'drf': {
      mse: 0.216931,
      rmse: 'N/A',
      nobs: 10408713,
      r2: 0.691941,
      mean_residual_deviance: 0.216931,
      mae: 0.346815,
      rmsle: 0.465758
    },
    'gbm': {
      mse: 0.232333,
      rmse: 'N/A',
      nobs: 10408713,
      r2: 0.670069,
      mean_residual_deviance: 0.232333,
      mae: 0.360219,
      rmsle: 0.482009 
    },
    'glm': {
      mse: 0.266251,
      rmse: 'N/A',
      nobs: 10408713,
      r2: 0.621903,
      mean_residual_deviance: 0.266251,
      mae: 0.387898,
      rmsle: 0.515995
    }
  },
  // style marks
  marks: {
    r: 2,
    fillOpacity: 0.25,
    colors: [
      '#1f78b4',
      '#ff7f00',
      '#33a02c',
      '#e31a1c',
      '#6a3d9a',
      '#b15928',
      '#a6cee3',
      '#fdbf6f',
      '#b2df8a',
      '#fb9a99',
      '#cab2d6',
      '#ffff99'
    ]
  },
  yScaleType: 'power',
  yScaleExponent: 0.2,
  // map columns (features) in the data to visual encodings
  predictColumn: 'predict',
  responseColumn: 'target',
  yColumn: 'deviance',
  idColumn: 'id',
  xColumns: [
    // 'Demanda_uni_equil',
    'weight',
    'pieces',
    'weight_per_piece',
    'nProduct',
    'productMeanLog',
    'productMeanLog1',
    'productMeanLog2',
    'nClient',
    'clientMeanLog',
    'clientMeanLog1',
    'clientMeanLog2',
    'nProductClient',
    'productClientMeanLog',
    'nProductClient2',
    'productClientMeanLog2',
    'productClientMeanLog3',
    'ntrIn',
    'nbrand',
    'brandmn',
    'ngeo',
    'geomn',
    'ngeo2',
    'geomn2',
    'nbrand2',
    'brandmn2', 
    'ngeo3', 
    'geomn3',
    'ngeo4',
    'geomn4',
    'nbrand_cl',
    'brandmn_cl',
    'nbrand2_cl',
    'brandmn2_cl',
    'target0'
  ],
  tooltipColumns: [
    {
      name: 'target',
      type: 'numeric',
      format: ',.0f'
    },
    {
      name: 'deviance',
      type: 'numeric',
      format: ',.0f'
    },
    {
      name: 'predict',
      type: 'numeric',
      format: ',.0f'
    }
  ],
  numericColumns: [
    'predict',
    'deviance',
    'target',
    'Demanda_uni_equil',
    'weight',
    'pieces',
    'weight_per_piece',
    'nProduct',
    'productMeanLog',
    'productMeanLog1',
    'productMeanLog2',
    'nClient',
    'clientMeanLog',
    'clientMeanLog1',
    'clientMeanLog2',
    'nProductClient',
    'productClientMeanLog',
    'nProductClient2',
    'productClientMeanLog2',
    'productClientMeanLog3',
    'ntrIn',
    'nbrand',
    'brandmn',
    'ngeo',
    'geomn',
    'ngeo2',
    'geomn2',
    'nbrand2',
    'brandmn2', 
    'ngeo3', 
    'geomn3',
    'ngeo4',
    'geomn4',
    'nbrand_cl',
    'brandmn_cl',
    'nbrand2_cl',
    'brandmn2_cl',
    'target0'
  ],
  categoricalColumns: [
    'state2',
    'address',
    'Ruta_SAK',
    'brand',
    'cluster',
    'Cliente_ID',
    'Agencia_ID',
    'Canal_ID',
    'Producto_ID',
    'Semana',
    'has_choco', 
    'has_vanilla',
    'has_multigrain',
    'trIn'
  ],
  columnAliasLookup: {
    Ruta_SAK: 'Route_ID',
    Demanda_uni_equil: 'Adjusted_Demand',
    Agencia_ID: 'Sales_Depot_ID',
    Producto_ID: 'Product_ID',
    Cliente_ID: 'Client_ID',
    Semana: 'Week_Number',
    Canal_ID: 'Sales_Channel_ID',
    NombreCliente: 'Client_Name',
    NombreProducto: 'Product_Name'
  }
}
