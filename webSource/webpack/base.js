
/*
    webpack-base
*/

const webpack = require('webpack')
const path = require('path')
const Util = require('./util')

// 获取项目基础配置
const projectConfig = Util.getConfig()

const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (mode) => {

    let isProduct = mode === 'production'

    //入口
    let entryFiles = Util.getEntry(path.resolve(__dirname, projectConfig.entryPath), projectConfig.modules)

    let entry = {}
    for(let item of entryFiles){
        entry[item.key] = [`${item.path}/app.js`]
    }

    //输出
    let output = {}

    //插件
    let plugins = [
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename: isProduct ? 'css/[name].[contenthash:8].css' : 'css/[name].css'
        })
    ]

    //添加多入口的html插件
    for(let item of entryFiles){
        chunksConf = [item.key, 'vendor']
        if (mode === 'production') {
            chunksConf.push(`manifest~${item.key}`)
        }
        
        plugins.push(
            new HtmlWebpackPlugin({
                alwaysWriteToDisk: true,
                filename: `${item.key}.html`, //生成的文件名
                template: `${item.path}app.html`, //模板文件  
                chunks:chunksConf// 依赖顺序从右到左
            })
        )
    }

    //resolve
    let resolve = {
        extensions: ['.js', '.vue', '.json'], 
        alias: {
            'vue$': 'vue/dist/vue.runtime.esm.js' ,
            '@': path.resolve(__dirname, '../src'),
            '@feHelper': path.resolve(__dirname, '../src/feHelper'),
            '@components': path.resolve(__dirname, '../src/components'),
            'img': path.resolve(__dirname, '../src/static/img'),
            'css': path.resolve(__dirname, '../src/static/css'),
            'js': path.resolve(__dirname, '../src/static/js')
        }
    }

    let optimization = {
            splitChunks: {
                cacheGroups: {
                    vendor: {
                        name: 'vendor',
                        chunks: 'initial',
                        priority: -10,
                        test: /[\\/]node_modules[\\/]/
                    }
                }
            }
        }
    
    //loader
    let moduleConfig = {}

    moduleConfig.rules = [
        {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: file =>
                /node_modules/.test(file) && !/\.vue\.js/.test(file)
        },
       
        {
            test: /\.(c|le)ss$/,
            use: [{
                loader: isProduct ? MiniCssExtractPlugin.loader : 'style-loader'
            }, {
                loader: "css-loader" 
            }, {
                loader: "less-loader"
            }]
        },
        
        {
            test: /\.html$/,
            //默认会去除html中的换行符，配置min=false可不去除
            loader: 'html-withimg-loader?min=false'
        },
        // .vue文件
        {
            test: /\.vue$/,
            loader: 'vue-loader',
            options: {}
        },
        // 图片资源
        {
            test: /\.(jpeg|jpg|png|gif)$/,
            use: {
                loader: 'url-loader',
                options: {
                    limit: 10240,
                    name: 'images/[name]-[hash:8].[ext]'
                }
            }
        },
        // 字体资源等
        {
            test: /\.(ttf|woff|woff2|eot|svg)$/,
            use: {
                loader: 'url-loader',
                options: {
                    limit: 10240,
                    name: 'font/[name]-[hash:8].[ext]'
                }
            }
        }
    ]

    return {
        mode,
        entry,
        output,
        plugins,
        resolve,
        optimization,
        module:moduleConfig
    }

}