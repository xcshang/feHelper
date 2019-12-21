/*
  util
*/

const glob = require('glob')
const path = require('path')
const merge = require('webpack-merge')

const Util = {

  //获取入口文件
  getEntry: (globPath, modules) => {
    //glob.sync,同步获取文件列表，glob是异步，这里要用到同步
    let files = glob.sync(globPath)
    let entries = []

    for( var i = 0 ; i < files.length; i ++){
      let entry = files[i]
      let p = entry.split('/')
      let baseName = p[p.length - 2]
      if(modules && modules.length && modules.indexOf(baseName) === -1){
        continue
      }
      let obj = {
        key: baseName,
        path: entry.split('app.html')[0]
      }
      entries.push(obj)
    }

    return entries
  },

  getConfig: () => {
    let projectConfig
    try{
        projectConfig =  merge(require('./projectConfig'), require('../.localDevConfig'))

    }catch(e){
        projectConfig = require('./projectConfig')
    }
    
    return projectConfig
  }
}

module.exports = Util
