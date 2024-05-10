const webpack = require('webpack');

module.exports = {
  devServer: {
    hot: true, // ホットリロードを有効にする
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // HMRプラグインを追加する
  ],
};
