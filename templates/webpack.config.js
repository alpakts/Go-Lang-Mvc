const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "../dist"),
    publicPath: '/dist/',
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, // Extracts CSS into separate files
          "css-loader", // Turns CSS into CommonJS
          "sass-loader", // Compiles Sass to CSS
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "styles.css",
    }),
  ],
  resolve: {
    extensions: [".js", ".jsx", ".scss"],
  },
  devServer: {
    static: path.join(__dirname, 'dist'),  // Webpack Dev Server'ın statik dosyaları nereden alacağını belirtiyoruz
    compress: true,
    port: 8081,  // Webpack Dev Server'ı farklı bir portta çalıştırıyoruz
    hot: true,  // Hot Module Replacement'ı etkinleştir
    liveReload: true,  // Canlı yenilemeyi etkinleştir
    proxy: [
      {
        context: ['/api'],
        target: 'http://localhost:3000',
      },
    ],
  },
  mode: "development",
};
