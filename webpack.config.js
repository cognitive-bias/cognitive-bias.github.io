module.exports = {
  entry: {
    cognitive: "./lib/cognitive.js"
  },
  output: {
    path: "dist",
    filename: "[name].js",
    libraryTarget: "umd",
    library: "[name]"
  },
  externals: {
    "react": {
      commonjs: "react",
      commonjs2: "react",
      amd: "React",
      root: "React"
    },
    "react-dom": {
      commonjs: "react-dom",
      commonjs2: "react-dom",
      amd: "ReactDOM",
      root: "ReactDOM"
    },
    /*
    "axios": {
      commonjs: "axios",
      commonjs2: "axios",
      amd: "axios",
    },
    "react-blocks": {
      commonjs: "react-blocks",
      commonjs2: "react-blocks",
    }, 
    "react-notification-system": {
      commonjs: "react-notification-system",
      commonjs2: "react-notification-system",
      amd: "NotificationSystem",
      root: "notification"
    }
    */
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: "babel-loader",
        query: {
          presets: ["es2015", "react"]
        }
      }
    ]
  }
};
