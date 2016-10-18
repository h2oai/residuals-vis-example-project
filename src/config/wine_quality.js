export const wineConfig = {
  // text and page layout
  projectTitle: 'Wine Quality Data',
  projectLink: '',
  projectTitleNote: '',
  dataText: 'data',
  currentAlgo: 'dl',
  currentAlgoLabel: 'Deep Learning',
  // boxplot config
  sortBoxplots: 'rootMeanSquaredValue',
  skeletonBox: true,
  // data attributes. this determines what sort of transition is shown.  will deprecate.
  aggregated: true,
  // API config for normal client-server mode
  server: 'http://localhost',
  port: '54321',
  frameIDs: {
    "dl": "combined-combined-predictions_94a5_deeplearning-c4b5e005-7535-4e2b-ab33-664960e4e29c_on_validation_wine_0.25-deviances_a722_deeplearning-c4b5e005-7535-4e2b-ab33-664960e4e29c_on_validation_wine_0.25-validation_wine_0.25",
    "drf": "combined-combined-predictions_9ead_drf-dda32239-de93-4faf-9764-1c1ae204bd88_on_validation_wine_0.25-deviances_94d2_drf-dda32239-de93-4faf-9764-1c1ae204bd88_on_validation_wine_0.25-validation_wine_0.25",
    "gbm": "combined-combined-predictions_969d_gbm-d40d18ff-7dd1-4340-8385-e792cce28125_on_validation_wine_0.25-deviances_86d2_gbm-d40d18ff-7dd1-4340-8385-e792cce28125_on_validation_wine_0.25-validation_wine_0.25",
    "glm": "combined-combined-predictions_805f_glm-fc2be9a3-5ea1-48e0-a80d-3bb85a9f73f9_on_validation_wine_0.25-deviances_9e66_glm-fc2be9a3-5ea1-48e0-a80d-3bb85a9f73f9_on_validation_wine_0.25-validation_wine_0.25"
  },
  // file access config for local mode
  project: 'santander-customer-satisfaction',
  fileSuffix: '-aggregated-0-002',
  models: ['dl', 'drf', 'gbm', 'glm'], // will refactor and deprecate
  modelIDs: ['dl', 'drf', 'gbm', 'glm'], // will refactor and deprecate
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
    },
    'dl': {
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
  // map columns (features) in the data to visual encodings
  predictColumn: 'predict',
  responseColumn: 'quality',
  yColumn: 'deviance',
  idColumn: undefined,
  xColumns: [
    'fixed acidity'
  ],
  tooltipColumns: [
    {
      name: 'quality',
      type: 'numeric',
      format: ',.0f'
    },
    {
      name: 'predict',
      type: 'numeric',
      format: ',.4f'
    },
    {
      name: 'deviance',
      type: 'numeric',
      format: ',.4f'
    }
  ],
  numericColumns: [
    'quality',
    "predict",
    "deviance",
    "fixed acidity"
  ],
  categoricalColumns: []
}
