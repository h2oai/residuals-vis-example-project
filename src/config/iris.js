export const irisConfig = {
  // text and page layout
  projectTitle: 'Iris Sepal Length Prediction',
  projectLink: 'http://archive.ics.uci.edu/ml/datasets/Iris',
  projectTitleNote: '',
  dataText: 'data',
  currentAlgo: 'drf-138550e3-a2ab-4150-96d8-0d726e52b800',
  currentModelLabel: 'Distributed Random Forest',
  // boxplot config
  sortBoxplots: 'rootMeanSquaredValue',
  skeletonBox: true,
  // data attributes. this determines what sort of transition is shown. TODO: deprecate.
  aggregated: true,
  // API config for normal client-server mode
  server: 'http://localhost',
  port: '54321',
  frameIDs: {
    "deeplearning-04051ecb-128e-4f9a-962c-4826ab79b7b4": "combined-combined-predictions_9241_deeplearning-04051ecb-128e-4f9a-962c-4826ab79b7b4_on_iris_valid_frame_0.250-deviances_9671_deeplearning-04051ecb-128e-4f9a-962c-4826ab79b7b4_on_iris_valid_frame_0.250-iris_valid_frame_0.250",
    "drf-138550e3-a2ab-4150-96d8-0d726e52b800": "combined-combined-predictions_be70_drf-138550e3-a2ab-4150-96d8-0d726e52b800_on_iris_valid_frame_0.250-deviances_a673_drf-138550e3-a2ab-4150-96d8-0d726e52b800_on_iris_valid_frame_0.250-iris_valid_frame_0.250",
    "gbm-df937fa4-f4b3-466b-9045-23402f3e85b8": "combined-combined-predictions_a21b_gbm-df937fa4-f4b3-466b-9045-23402f3e85b8_on_iris_valid_frame_0.250-deviances_8ad3_gbm-df937fa4-f4b3-466b-9045-23402f3e85b8_on_iris_valid_frame_0.250-iris_valid_frame_0.250",
    "glm-375cbcd4-5bd4-4185-abfd-05d72f2959f7": "combined-combined-predictions_b9ec_glm-375cbcd4-5bd4-4185-abfd-05d72f2959f7_on_iris_valid_frame_0.250-deviances_8504_glm-375cbcd4-5bd4-4185-abfd-05d72f2959f7_on_iris_valid_frame_0.250-iris_valid_frame_0.250"
  },
  models: [
    'deeplearning-04051ecb-128e-4f9a-962c-4826ab79b7b4',
    'drf-138550e3-a2ab-4150-96d8-0d726e52b800',
    'gbm-df937fa4-f4b3-466b-9045-23402f3e85b8',
    'glm-375cbcd4-5bd4-4185-abfd-05d72f2959f7'
  ], // TODO: refactor and deprecate
  modelIDs: [
    'deeplearning-04051ecb-128e-4f9a-962c-4826ab79b7b4',
    'drf-138550e3-a2ab-4150-96d8-0d726e52b800',
    'gbm-df937fa4-f4b3-466b-9045-23402f3e85b8',
    'glm-375cbcd4-5bd4-4185-abfd-05d72f2959f7'
  ], // TODO: refactor and deprecate
  "modelMetrics": {
    "deeplearning-04051ecb-128e-4f9a-962c-4826ab79b7b4": {
      "mse": 0.16061899325797968,
      "rmse": 0.40077299467152183,
      "nobs": 45,
      "r2": 0.8159810591617552,
      "mean_residual_deviance": 0.16061899325797968,
      "mae": 0.31244646692487554,
      "rmsle": 0.0544061762208247
    },
    "drf-138550e3-a2ab-4150-96d8-0d726e52b800": {
      "mse": 0.1929197441603186,
      "rmse": 0.4392263017629051,
      "nobs": 45,
      "r2": 0.7789745392679251,
      "mean_residual_deviance": 0.1929197441603186,
      "mae": 0.3466519569820828,
      "rmsle": 0.05948023151961482
    },
    "gbm-df937fa4-f4b3-466b-9045-23402f3e85b8": {
      "mse": 0.21454684036945393,
      "rmse": 0.4631920124197458,
      "nobs": 45,
      "r2": 0.7541966767182595,
      "mean_residual_deviance": 0.21454684036945393,
      "mae": 0.35021882389380726,
      "rmsle": 0.06183353290865531
    },
    "glm-375cbcd4-5bd4-4185-abfd-05d72f2959f7": {
      "mse": 0.20840615180587826,
      "rmse": 0.4565152262585316,
      "nobs": 45,
      "r2": 0.7612319779772566,
      "mean_residual_deviance": 0.20840615180587826,
      "mae": 0.3472426289556023,
      "rmsle": 0.06164588480278061
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
  responseColumn: 'SepalLengthCm',
  yColumn: 'deviance',
  idColumn: undefined,
  xColumns: [
    "SepalWidthCm",
    "PetalLengthCm",
    "PetalWidthCm"
  ],
  tooltipColumns: [
    {
      name: "Species",
      valueOnly: true
    },
    {
      name: 'SepalLengthCm',
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
    "SepalWidthCm",
    "PetalLengthCm",
    "PetalWidthCm",
    "predict",
    "deviance"
  ],
  categoricalColumns: [
    'Species'
  ],
  columnAliasLookup: {}
}
