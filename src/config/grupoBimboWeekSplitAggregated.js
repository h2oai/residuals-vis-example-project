export const grupoBimboWeekSplitAggregatedConfig = {
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
    'drf-b08c3eed-0806-4e41-b8f2-4b1d18812af0': 'aggregated_combined-combined-validation.hex-predictions_9b49_drf-b08c3eed-0806-4e41-b8f2-4b1d18812af0_on_validation.hex-deviances_aebb_drf-b08c3eed-0806-4e41-b8f2-4b1d18812af0_on_validation.hex_by_aggregator-b4209a31-b303-4e9d-89b7-cdd11228iu7ip',
    'gbm-a6210942-fe85-4709-b513-576351f70400': 'aggregated_combined-combined-validation.hex-predictions_8182_gbm-a6210942-fe85-4709-b513-576351f70400_on_validation.hex-deviances_ba64_gbm-a6210942-fe85-4709-b513-576351f70400_on_validation.hex_by_aggregator-b4209a31-b303-4e9d-89b7-cdd11228iu7ip',
    'glm-d7208b6f-ae13-4996-8c10-6be359f3e2ae': 'aggregated_combined-combined-validation.hex-predictions_8564_glm-d7208b6f-ae13-4996-8c10-6be359f3e2ae_on_validation.hex-deviances_b3a1_glm-d7208b6f-ae13-4996-8c10-6be359f3e2ae_on_validation.hex_by_aggregator-b4209a31-b303-4e9d-89b7-cdd11228iu7ip',
  },
  models: [ 'drf', 'gbm', 'glm'], // will refactor and deprecate
  modelIDs: [ 'drf', 'gbm', 'glm'],
  // modelIDs: [
  //   'glm-d7208b6f-ae13-4996-8c10-6be359f3e2ae',
  //   'drf-b08c3eed-0806-4e41-b8f2-4b1d18812af0',
  //   'gbm-a6210942-fe85-4709-b513-576351f70400'
  // ],
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
    'Ruta_SAK' //,
    // 'Venta_uni_hoy',
    // 'Venta_hoy',
    // 'Dev_uni_proxima',
    // 'Dev_proxima',
    // 'Demanda_uni_equil',
    // 'Demanda_uni_equil0'
  ],
  tooltipColumns: [
    {
      name: 'Demanda_uni_equil',
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
    'Ruta_SAK',
    // 'Venta_uni_hoy',
    // 'Venta_hoy',
    // 'Dev_uni_proxima',
    // 'Dev_proxima',
    'Demanda_uni_equil' // ,
    // 'Demanda_uni_equil0',
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
    NombreProducto: 'Product_Name'
  }
}
