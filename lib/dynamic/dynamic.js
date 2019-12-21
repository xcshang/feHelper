const fs = require('fs')
const babel = require('@babel/core')
const generator = require('@babel/generator');
const util = require('../util')
const modules = require('./modules')
const AST = require('../ast')
const VUE = require('../vue')

let dynamic = {

    init(m, basePath) {
        let templates = [],
            script,
            baseVue,
            vueCode
        if (basePath) {
            let baseStr = util.getFileSource(basePath)
            baseVue = dynamic.getVueObj(baseStr)
        }
        let dynamicStr = dynamic.getMoudleStr(m)
        let dynamicVue = dynamic.getVueObj(dynamicStr)
        templates.push(dynamicVue.template)

        if (basePath) {
            AST.addToTemplete(baseVue.ast, dynamicVue.ast)
            script = generator.default(baseVue.ast)
        } else {
            script = generator.default(dynamicVue.ast)
        }

        if (basePath) {
            let vueCode = VUE.getVueCode(basePath, templates.join(''), script.code, '')
            fs.writeFile(basePath, vueCode, {}, function(err) {
                if (err) {
                    throw err;
                }
                console.log('动态组件写入成功！')
            });
        }

        let code = `<template>\n${templates.join('')}\n</template>\n<script>\n${script.code}\n</script>`
        return code

    },

    getVueObj(moudleCode) {
        let template = util.getCodeByTag('template', moudleCode),
            script = util.getCodeByTag('script', moudleCode),
            style = util.getCodeByTag('style', moudleCode)
        let ast = dynamic.getAst(script)
        return {
            template,
            ast
        }
    },

    getMoudleStr(item) {
        let datas = []
        let methods = []
        let template = []
        let script = ''
        let moduleData = modules[item.type].init(item)
        datas.push(moduleData.data)
        methods = methods.concat(moduleData.methods)
        template += `\n${moduleData.template}`

        let dataStr = dynamic.getDataStr(datas)
        dataStr = dynamic.handleFunction(dataStr)
        methods = methods.length ? `methods: {${methods.join(',')}}` : ''
            //table类的要加入ajax和tableMixin
        let tableStr1 = ''
        let tableStr2 = ''
        if (item.type === 'table') {
            tableStr1 = `import ajax from "js/ajax";\nimport tableMixin from "js/tableMixin";\n`
            tableStr2 = `mixins: [tableMixin],`
        }
        script += `${tableStr1}export default {${tableStr2} data() { return ${dataStr} },${methods}`
        script += `}`
        let vueCode = `<template>\n<div>${template}\n</div>\n</template>\n<script>${script}</script>`
            //console.log(vueCode)
        return vueCode

    },

    getDataStr(m) {
        let data = {}
        m.forEach((item) => {
            for (p in item) {
                data[p] = item[p]
            }
        })
        return JSON.stringify(data)
    },

    //字符串转成函数
    handleFunction(str) {
        str = str.replace(/"\$fun/g, '')
        str = str.replace(/\$fun"/g, '')
        return str
    },

    getAst(str) {
        let ast = babel.parse(str, {
            plugins: [
                "@babel/plugin-syntax-jsx"
            ]
        })
        return ast
    }
}

module.exports = dynamic