/*
    build-base
*/

const mode = 'production';
const path = require('path');
const webpack = require('webpack');
const rm = require('rimraf')
const merge = require('webpack-merge')
const Util = require('./util')

// js压缩
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
// css压缩
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

// 获取项目基础配置
const projectConfig = Util.getConfig()
const baseConfig = require('./base.js')

let buildConfig = {
  output: {
    path: path.resolve(__dirname, projectConfig.distPath),
    publicPath: projectConfig.publicPath,
    filename: 'js/[name].[chunkhash:8].js?',
    chunkFilename: 'js/chunks/[name].[chunkhash:8].js'
  },
  mode,
  optimization: {
    runtimeChunk: {
      name: entrypoint => `manifest~${entrypoint.name}`
    },
    minimizer: [
      // 配置UglifyJsPlugin压缩js文件
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true
      }),
      // 配置css文件压缩
      new OptimizeCSSAssetsPlugin({
        cssProcessor: require('cssnano'),
        cssProcessorOptions: {
          discardComments: {
            removeAll: true
          },
          // 避免 cssnano 重新计算 z-index
          safe: true
        },
        canPrint: false
      })
    ]
  }
}
// merge config
buildConfig = merge(baseConfig(mode), buildConfig)

webpack(buildConfig, function (err, stats) {
  if (err) {
    throw err
  }
  console.log('Build complete')
})

// 删除上一次构建结果
rm(path.resolve(__dirname,  projectConfig.distPath), err => {
  if (err) throw err
})
