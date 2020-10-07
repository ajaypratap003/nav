const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require("path");
const { dependencies, port, name } = require("./package.json");
delete dependencies.serve; // Needed for nodeshift bug

// Don't include PatternFly styles twice
const reactCSSRegex = /(react-[\w-]+\/public|react-styles\/css)\/.*\.css$/;

module.exports = (env = { streamsPort: 3001 }, argv) => {
  const isProd = argv.mode === 'production';
  const { remoteSuffix } = env;
  const publicPath = (isProd && remoteSuffix)
    ? `http://nav${remoteSuffix}/`
    : `http://localhost:${port}/`;
  const streamsPath = (isProd && remoteSuffix)
    ? `http://streams${remoteSuffix}/`
    : `http://localhost:${env.streamsPort}/`;

  return ({
    entry: "./src/index",
    mode: "development",
    devServer: {
      contentBase: path.join(__dirname, "public"),
      port
    },
    output: {
      publicPath
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          loader: "babel-loader",
          exclude: /node_modules/,
          options: {
            presets: ["@babel/preset-react"],
          },
        },
        {
          test: /\.(svg|ttf|eot|woff|woff2|jpg|jpeg|png|gif)$/,
          use: 'file-loader',
        },
        {
          test: /\.s?css$/,
          exclude: reactCSSRegex,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: { hmr: !env.prod },
            },
            "css-loader",
            "sass-loader"
          ],
        },
        {
          test: reactCSSRegex,
          use: 'null-loader'
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin(),
      new webpack.container.ModuleFederationPlugin({
        name: "nav",
        filename: "remoteEntry.js",
        remotes: {
          streams: `streams@${streamsPath}remoteEntry.js`,
        },
        exposes: {
          "./Page": "./src/components/Page",
          "./routes": "./src/routes",
        },
        shared: {
          ...dependencies,
          react: {
            eager: true,
            singleton: true,
            requiredVersion: dependencies.react,
          },
          "react-dom": {
            eager: true,
            singleton: true,
            requiredVersion: dependencies["react-dom"],
          },
        },
      }),
      new HtmlWebpackPlugin({
        template: "./src/index.html",
      }),
    ],
  });
}
