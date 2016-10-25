export const wineConfig = {
  // text and page layout
  projectTitle: 'Wine Quality',
  projectLink: 'https://archive.ics.uci.edu/ml/datasets/Wine+Quality',
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
  project: 'wine',
  fileSuffix: '',
  models: ['dl', 'drf', 'gbm', 'glm'], // will refactor and deprecate
  modelIDs: ['dl', 'drf', 'gbm', 'glm'], // will refactor and deprecate
  modelMetrics: {
    "dl": {
      "mse": 0.483164207191617,
      "rmse": 0.695100141844049,
      "nobs": 1672,
      "r2": 0.4093913455456957,
      "mean_residual_deviance": 0.483164207191617,
      "mae": 0.5414414154729464,
      "rmsle": 0.10422435160601286
    },
    "drf": {
      "mse": 0.38742471822295227,
      "rmse": 0.6224345091838597,
      "nobs": 1672,
      "r2": 0.5264210632199209,
      "mean_residual_deviance": 0.38742471822295227,
      "mae": 0.4469004780253722,
      "rmsle": 0.09525256046951894
    },
    "gbm": {
      "mse": 0.4538429087495994,
      "rmse": 0.673678639077713,
      "nobs": 1672,
      "r2": 0.4452330166834445,
      "mean_residual_deviance": 0.4538429087495994,
      "mae": 0.52117533920514,
      "rmsle": 0.10205624077961499
    },
    "glm": {
      "mse": 0.5559913883311636,
      "rmse": 0.745648300696222,
      "nobs": 1672,
      "r2": 0.3203690984083589,
      "mean_residual_deviance": 0.5559913883311636,
      "mae": 0.5828780753588723,
      "rmsle": 0.11200531733347978
    }
  },
  // style marks
  marks: {
    r: 2,
    fillOpacity: 0.3,
    colors: [
      '#B96579',
      '#E8DDB7',
    ]
  },
  // map columns (features) in the data to visual encodings
  predictColumn: 'predict',
  responseColumn: 'quality',
  yColumn: 'deviance',
  idColumn: undefined,
  xColumns: [
    "alcohol",
    "density",
    "volatile acidity",
    "free sulfur dioxide",
    "chlorides",
    "sulphates",
    "pH",
    "residual sugar",
    "total sulfur dioxide",
    "citric acid",
    "fixed acidity"
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
    "alcohol",
    "density",
    "volatile acidity",
    "free sulfur dioxide",
    "chlorides",
    "sulphates",
    "pH",
    "residual sugar",
    "total sulfur dioxide",
    "citric acid",
    "fixed acidity",
    'quality',
    "predict",
    "deviance"
  ],
  categoricalColumns: [
    'color'
  ],
  columnAliasLookup: {}
}
