export const grupoBimboNaiveAggregatedConfig = {
  // text and page layout
  projectTitle: 'Grupo Bimbo Inventory Demand',
  projectLink: 'https://www.kaggle.com/c/grupo-bimbo-inventory-demand',
  projectTitleNote: '',
  dataText: 'data',
  currentAlgo: 'glm',
  currentAlgoLabel: 'Generalized Linear Model',
  // boxplot config
  sortBoxplots: 'rootMeanSquaredValue',
  skeletonBox: true,
  // data attributes. this determines what sort of transition is shown.  will deprecate.
  aggregated: true,
  // API config for normal client-server mode
  server: 'http://172.16.2.141',
  port: '54321',
  frameIDs: {
    'drf-c6daf49d-dd1f-43b8-9eeb-99bb828d2a25': 'aggregated_gb_drf_combined_validation_prediction_deviance.hex_by_aggregator-b4209a31-b303-4e9d-89b7-cdd11228ab7a',
    'gbm-ef176351-e583-4484-9a08-0f47dc10d4e1': 'aggregated_gb_gbm_combined_validation_prediction_deviance.hex_by_aggregator-b4209a31-b303-4e9d-89b7-cdd11228ab7a',
    'glm-f52fe8cb-3aad-4eb0-b0cb-36ec16ae58a3': 'aggregated_gb_glm_combined_validation_prediction_deviance.hex_by_aggregator-b4209a31-b303-4e9d-89b7-cdd11228ab7a',
  },
  models: [ 'drf', 'gbm', 'glm'], // will refactor and deprecate
  modelIDs: [ 'drf', 'gbm', 'glm'],
  // modelIDs: [
  //   'drf-c6daf49d-dd1f-43b8-9eeb-99bb828d2a25',
  //   'gbm-ef176351-e583-4484-9a08-0f47dc10d4e1',
  //   'glm-f52fe8cb-3aad-4eb0-b0cb-36ec16ae58a3'
  // ],
  "modelMetrics": {
    "gbm": {
      "mse": 0.212821,
      "rmse": 0.461326,
      "nobs": '18,545,035',
      "r2": 0.999546,
      "mean_residual_deviance": 0.21282,
      "mae": 0.095809,
      "rmsle": 'N/A' // "NaN"
    },
    "drf": {
      "mse": 1.474409,
      "rmse": 1.21425,
      "nobs": '18,545,035',
      "r2": 0.996856,
      "mean_residual_deviance": 1.474409,
      "mae": 0.14428,
      "rmsle": 'N/A' // 0.066232c
    },
    "glm": {
      "mse": 1.805560,
      "rmse": 1.343711,
      "nobs": '18,545,035',
      "r2": 0.99615,
      "mean_residual_deviance": 1.80556,
      "mae": 0.28702,
      "rmsle": 'N/A' // "NaN"
    }
  },
  // style marks
  marks: {
    r: 2,
    fillOpacity: 0.3,
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
  responseColumn: 'Demanda_uni_equil',
  yColumn: 'deviance',
  idColumn: undefined,
  xColumns: [
    'Venta_uni_hoy',
    'Venta_hoy',
    'Ruta_SAK',
    'Dev_proxima',
    'Dev_uni_proxima'
  ],
  tooltipColumns: [
    {
      name: 'predict',
      type: 'numeric',
      format: ',.0f'
    },
    {
      name: 'deviance',
      type: 'numeric',
      format: ',.0f'
    }
  ],
  numericColumns: [
    'predict',
    'deviance',
    'Ruta_SAK',
    'Venta_uni_hoy',
    'Venta_hoy',
    'Dev_uni_proxima',
    'Dev_proxima',
    'Demanda_uni_equil',
    'Demanda_uni_equil0',
  ],
  categoricalColumns: [
    'Agencia_ID',
    'Producto_ID',
    'Cliente_ID',
    'Semana',
    'Canal_ID',
    'NombreCliente',
    'NombreProducto',
    'Town',
    'State'
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
    NombreProducto: 'Product_Name',
    Venta_uni_hoy: 'Units_Sold_This_Week',
    Venta_hoy: 'Sales_This_Week',
    Dev_uni_proxima: 'Units_Returned_Next_Week',
    Dev_proxima: 'Returns_Next_Week',
  }
}
