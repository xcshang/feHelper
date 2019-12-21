
/*
    webpack-dev
*/

const webpack = require('webpack')
const path = require('path')
const merge = require('webpack-merge')
const Util = require('./util')

//基本配置项
const projectConfig = Util.getConfig()
//base
const baseConfig = require('./base')

//webpackConfig
let devcConfig = {
    output:{
        filename: 'js/[name].js',
        chunkFilename: 'js/[name].[chunkhash:8].js',
        publicPath: '/'
    },
    plugins:[
        //当开启 HMR 的时候使用该插件会显示模块的相对路径
        //new webpack.NamedModulesPlugin(),
        //HRM下必须要使用
        new webpack.HotModuleReplacementPlugin()
    ]
}

//devserverConfig
let port = projectConfig.port,
    host = projectConfig.host

const proxy = {
    '/api/*': {
        target: projectConfig.proxyTarget,
        changeOrigin: true,
        secure: false ,
        //设置代理cookie
        onProxyReq: function( proxyReq , req , res ) {
            if ( projectConfig.proxyCookie ) {
                proxyReq.setHeader( 'Cookie' , projectConfig.proxyCookie ) ;
            }
        } 
    }
}

//devserver option
let devServerOptions = {
    hot: true,
    port,
    host, //要设置为这个，不然就要指定localhost为127.0.0.1  
    proxy
}

devcConfig = merge(baseConfig('development'), devcConfig)

// 使用node api启动 webpack-dev-server
let webpackDevServer = require('webpack-dev-server/lib/Server')
webpackDevServer.addDevServerEntrypoints(devcConfig, devServerOptions);
const compiler = webpack(devcConfig);
const server = new webpackDevServer(compiler, devServerOptions);
server.listen(port, host, () => {
    console.log(`Project is running at http://${host}:${port}/`);
});

