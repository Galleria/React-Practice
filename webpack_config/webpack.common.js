var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const VERSION = require('../package.json').version;

const METADATA = {
    title:"Audit and Release",
    VERSION:VERSION,
};

module.exports = {
    metadata:METADATA,
    entry: './src/jsx/index.jsx',
    output: {
        path:'./dist',
        filename: 'app.bundle.js'
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          loaders: [ 'babel' ],
        },
        {
          test: /\.jsx$/,
          loader: 'babel' ,
          query: {
            presets: ['react','es2015']
          },
        },
        {
              test: /\.css$/,
              //loader: 'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]'
              //loader: 'style-loader!css-loader'
              loader: 'style!css-loader?modules'
        },
        {   
              test: /\.json$/, 
              loader: 'json-loader' 
        }
      ]
    },
    resolve: {
        extensions: ['', '.js','jsx']
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin(
            {
                template: './src/html/index.html',
                inject: true
            }
        )
    ],
    devServer: {
      port:8083,
      historyApiFallback: true,
      stats: {
        colors: true
      },
      compress: true
    }
};
