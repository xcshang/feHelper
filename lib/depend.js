
const fs = require('fs')
const path = require('path')
const glob = require('glob')
const babel = require('@babel/core')
const util = require('./util')
let allDepends = []

let depend = {

  pushToArr(item){
    if(allDepends.indexOf(item) === -1){
      allDepends.push(item)
    }
  },

  //获取文件内容
  getFileSource(filePath){
    let source = fs.readFileSync(filePath, {
        encoding: 'utf-8'
    })
    source = util.getCodeByTag('script', source)
    return source
  },

  //获取IMPORT
  getImports(ast){
      let body = ast.program.body
      let imports = []   
      for( let item of body ) {
          //处理对@feHelper的依赖
          if(item.type === 'ImportDeclaration'){
              let value = (item.source.value)
              let reg = /^@feHelper\/(.+)\/index.vue$/
              if(reg.test(value)){
                imports.push(RegExp.$1)
              }
          }
      }
      return imports
  },

  getDepends(modules){
    allDepends = []
    modules.forEach((item) => {
      depend.pushToArr(item)
      depend.getDependVueFiles(item)
    })
    return allDepends
  },

  getDepend(filePath){
    let source = depend.getFileSource(filePath)
    source = babel.parse(source, {
              plugins: [
                  "@babel/plugin-syntax-jsx"
              ]})
    let imports = depend.getImports(source)
    imports.forEach((item) => {
      depend.pushToArr(item)
      depend.getDependVueFiles(item)
    })
  },

  getDependVueFiles(name){
    let storePath = util.getConfig().storePath
    let files = glob.sync(`${storePath}/${name}/**/*.vue`)
    files.forEach((item) => {
      depend.getDepend(item)
    })
  }
}

module.exports = depend
