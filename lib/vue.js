const fs = require('fs')
const path = require('path')
const babel = require('@babel/core')
const AST = require('./ast')
const generator = require('@babel/generator');
const depend = require('./depend')
const copy = require('./copy')
const util = require('./util')

let VUE = {

    //添加template的注释
    getNotes(code, option) {
        return `<!--${option.name} start-->${code}<!--${option.name} end-->\n\n`
    },

    //组装vue内容
    getVueCode(baseModule, template, script, style) {
        //在原有文件里追加    
        if (baseModule) {
            let code = ''
            let source = util.getFileSource(baseModule)
            let baseTemplate = util.getCodeByTag('template', source)
            template = VUE.addTemplate(baseTemplate, template)
            let reg1 = util.getTagReg('template')
            code = source.replace(reg1, `<template>\n${template}\n</template>\n`)
            let reg2 = util.getTagReg('script')
            code = code.replace(reg2, `<script>\n${script}\n</script>`)

            let styleRge = /(<style[^>]*>)[\s\S]*(?=<\/style>)<\/style>/gmi
            if (styleRge.test(code)) {
                let styleTag = RegExp.$1
                let reg3 = util.getTagReg('style')
                code = code.replace(reg3, `${styleTag}${style}</style>`)
            } else {
                if (style) {
                    code += `\n<style>\n${style}\n</style>`
                }
            }
            return code
        }

        //新文件
        return `<template>\n<div>\n${template}\n</div>\n</template>\n<script>\n${script}\n</script>\n<style>\n${style}\n</style>`

    },

    addTemplate(t1, t2) {
        var reg = /(<(.+)[^>]*>)([\s\S]*)(?=<\/\2>)(<\/\2>)/gmi
        reg.test(t1)
        return `${RegExp.$1}${RegExp.$3}${t2}${RegExp.$4}`
    },

    //获取空白vue文件的AST结构
    getDefaultAst() {
        return {
            template: '<div></div>',
            ast: babel.parse('export default {}'),
            style: ''
        }
    },

    //生成VUE文件
    createVue(modules, baseModule) {
        let templates = []
        let defaultTemplate = ''
        let styles = []
        let baseModuleAst = {}

        //不是在原文件上追加的
        if (!baseModule) {
            baseModuleAst = VUE.getDefaultAst()
        } else {
            baseModuleAst = AST.getASTByFile(baseModule, {}, 'default')
        }

        //基础文件样式和模板
        //defaultTemplate = baseModuleAst.template
        styles.push(baseModuleAst.style)

        let importValues = []
            //添加新模块内容
        modules.forEach((item) => {
            let option = {
                name: item,
                id: parseInt(Math.random(10000) * 10000)
            }

            let vueModule = AST.getASTByFile(item, option)
            templates.push(VUE.getNotes(vueModule.template, option))
            styles.push(vueModule.style)
            AST.addToTemplete(baseModuleAst.ast, vueModule.ast, importValues)
        })

        //let templateStr = VUE.getTempleate(defaultTemplate, templates.join(''))
        let script = generator.default(baseModuleAst.ast)

        let vueStr = VUE.getVueCode(baseModule, templates.join(''), script.code, styles.join(''))
        return vueStr
    },


    //得到依赖组件
    getNewDepends(arr) {
        let arr2 = util.getCatalog(global.projectStore)
        let arr3 = []
        arr.forEach((item) => {
            if (arr2.indexOf(item) === -1) {
                arr3.push(item)
            }
        })
        return arr3
    },
    create(modules, baseModule, previewFile) {

        return new Promise((resolve, reject) => {
            console.log('开始查找依赖...')
            let depends = depend.getDepends(modules)
            let newDepends = VUE.getNewDepends(depends)
            if (newDepends.length) {
                copy.loadDepend(0, newDepends, callBack)
            } else {
                callBack()
            }

            function callBack() {
                console.log(`开始拷贝依赖${newDepends.join(',')}...`)
                console.log('开始创建文件...')
                let vueStr = VUE.createVue(modules, baseModule)
                    //vueStr = vueStr.replace(/},/g, '},\n\t\t')
                if (baseModule || previewFile) {
                    let newFile = previewFile ? previewFile : baseModule
                    fs.writeFile(newFile, vueStr, {}, function(err) {
                        if (err) {
                            throw err;
                        }
                        console.log('文件写入成功！')
                        resolve(vueStr)
                    });
                } else {
                    resolve(vueStr)
                }
            }
        })

    }
}

module.exports = VUE