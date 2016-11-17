export const rossmanRandomAggregatedConfig = {
  projectTitle: 'Rossman Store Sales',
  projectLink: 'https://www.kaggle.com/c/rossmann-store-sales',
  dataText: 'data',
  models: [ 'gbm', 'drf', 'glm'],
  modelIDs: [ 'gbm', 'drf', 'glm'],
  currentAlgo: 'drf',
  currentModelLabel: 'Distributed Random Forest',
  project: 'rossman-store-sales',
  fileSuffix: '-aggregated-0-125',
  aggregated: true,
  predictColumn: 'predict',
  responseColumn: 'Sales',
  xColumns: ['Customers', 'CompetitionDistance'],
  yColumn: 'deviance',
  idColumn: undefined,
  tooltipColumns: [
    {
      name: 'Store'
    },
    {
      name: 'Date',
      type: 'time',
      format: '%B %d, %Y'
    },
    {
      name: 'Sales',
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
    'Sales',
    'Customers',
    'CompetitionDistance'
  ],
  categoricalColumns: [
    'Open',
    'Promo',
    'StateHoliday',
    'SchoolHoliday',
    'StoreType',
    'Assortment',
    'Promo2',
    'PromoInterval'
  ],
  "modelMetrics": {
    "glm": {
      "mse": 8885209.114956208,
      "rmse": 2980.806789269678,
      "nobs": 254452,
      "r2": 0.39945626375100796,
      "mean_residual_deviance": 8885209.114956208,
      "mae": 2252.4573607055245,
      "rmsle": 3.4550076310876956
    },
    "drf": {
      "mse": 345143.14839217113,
      "rmse": 587.4888495896506,
      "nobs": 254452,
      "r2": 0.9766720677932861,
      "mean_residual_deviance": 345143.14839217113,
      "mae": 362.5340157190141,
      "rmsle": 0.7161371308808844
    },
    "gbm": {
      "mse": 789329.4384026648,
      "rmse": 888.4421412802664,
      "nobs": 254452,
      "r2": 0.9466498937800192,
      "mean_residual_deviance": 789329.4384026648,
      "mae": 604.2864521187673,
      "rmsle": "NaN"
    }
  },
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
  sortBoxplots: 'rootMeanSquaredValue',
  skeletonBox: true,
  server: 'http://192.168.0.106',
  port: '55555',
  frameIDs: {
    'drf': 'aggregated_combined-combined-predictions_82e3_drf-156fbad7-316b-41f6-a364-a73d76843e83_on_rossman-validation2-random-frame_0.250-deviances_927e_drf-156fbad7-316b-41f6-a364-a73d76843e83_on_rossman-validation2-random-frame_0.250-rossman-validation2-random-frame_0.250_by_aggregator-drf-156fbad7-316b-41f6-a364-a73d76843e83',
    'gbm': 'aggregated_combined-combined-predictions_8865_gbm-b09aefc4-644d-45d3-9dd8-78c6f340f761_on_rossman-validation2-random-frame_0.250-deviances_9098_gbm-b09aefc4-644d-45d3-9dd8-78c6f340f761_on_rossman-validation2-random-frame_0.250-rossman-validation2-random-frame_0.250_by_aggregator-gbm-b09aefc4-644d-45d3-9dd8-78c6f340f761',
    'glm': 'aggregated_combined-combined-predictions_a891_glm-8fc0a4a9-5d25-48aa-9b9b-4ed334ead5fc_on_rossman-validation2-random-frame_0.250-deviances_ac78_glm-8fc0a4a9-5d25-48aa-9b9b-4ed334ead5fc_on_rossman-validation2-random-frame_0.250-rossman-validation2-random-frame_0.250_by_aggregator-glm-8fc0a4a9-5d25-48aa-9b9b-4ed334ead5fc',
  }
}
