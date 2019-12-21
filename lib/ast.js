const fs = require('fs')
const path = require('path')
const babel = require('@babel/core')
const util = require('./util')

let loadedDepend = []
let AST = {
    //通过文件获取AST结构
    getASTByFile(name, option, type) {

        let vueFile = ''
        if (type && type === 'default') {
            vueFile = name
        } else {
            vueFile = `${global.projectStore}/${name}/index.vue`
        }

        let source = util.getFileSource(vueFile)

        if (!type) {
            source = AST.addMoudleName(source, option)
        }
        let template = util.getCodeByTag('template', source),
            script = util.getCodeByTag('script', source),
            style = util.getCodeByTag('style', source)

        return {
            template,
            ast: babel.parse(script, {
                //增加对jsx的支持
                plugins: [
                    "@babel/plugin-syntax-jsx"
                ]
            }),
            style
        }
    },

    addMoudleName(code, option) {
        code = code.replace(/FEHPVB/mg, `${option.name}_${option.id}_`)
        code = code.replace(/FEHPID/mg, `_${option.id}`)
        return code
    },

    //获取exportDefault节点
    getExportDefaultNode: (ast) => {
        let body = ast.program.body
        let obj = {}
        for (let item of body) {
            if (item.type === 'ExportDefaultDeclaration') {
                obj = item
                break
            }
        }
        return obj
    },

    //获取相关属性的值
    getProperts: (ast, name, importValues) => {
        let body = ast.program.body
        let notExportDefaults = []
        if (name === 'body') {
            for (let item of body) {
                if (item.type !== 'ExportDefaultDeclaration') {
                    if (item.type === 'ImportDeclaration' && !item.specifiers.length) {
                        let value = (item.source.value)
                        console.log(importValues)
                        if (importValues.indexOf(value) === -1) {
                            importValues.push(value)
                            notExportDefaults.push(item)
                        }
                    } else {
                        notExportDefaults.push(item)
                    }
                }
            }
            return notExportDefaults
        }
        let properties = AST.getExportDefaultNode(ast).declaration.properties
        let arr = []
        for (let item of properties) {
            if (item.key.name === name) {
                if (item.type === 'ObjectProperty') {
                    if (item.value.type === 'ArrayExpression') {
                        arr = item.value.elements
                        break
                    }
                    if (item.value.type === 'ObjectExpression') {
                        arr = item.value.properties
                        break
                    }
                }
                if (item.type === 'ObjectMethod') {
                    let name = item.key.name
                    if (name === 'data') {
                        arr = item.body.body[0].argument.properties
                        break
                    } else {
                        arr = item.body.body
                        break
                    }

                }
            }
        }
        return arr
    },

    //添加属性
    addProperts: (ast, name, p) => {
        let body = ast.program.body
        if (name === 'body') {
            body.unshift(...p)
            return
        }
        let properties = AST.getExportDefaultNode(ast).declaration.properties
        let obj = {}
        for (let item of properties) {
            if (item.key.name === name) {
                if (item.type === 'ObjectProperty') {
                    if (item.value.type === 'ArrayExpression') {
                        item.value.elements.push(...p)
                        break
                    }
                    if (item.value.type === 'ObjectExpression') {
                        item.value.properties.push(...p)
                        break
                    }
                }
                if (item.type === 'ObjectMethod') {
                    if (item.key.name === 'data') {
                        item.body.body[0].argument.properties.push(...p)
                        break
                    } else {
                        item.body.body.push(...p)
                    }

                }
            }
        }
    },

    //获取ExportDefault下所有属性名
    getExportNames: (ast) => {
        let exportDefault = AST.getExportDefaultNode(ast)
        let properties = exportDefault.declaration.properties
        let names = []
        for (let item of properties) {
            names.push(item.key.name)
        }
        return names
    },

    //两个属性增加合并
    addToTemplete: (ast1, ast2, importValues) => {
        let ast1Default = AST.getExportDefaultNode(ast1)
        let ast2Default = AST.getExportDefaultNode(ast2)
        let properties = ast2Default.declaration.properties
        let tNames = AST.getExportNames(ast1)
        let bodyProperts = AST.getProperts(ast2, 'body', importValues)
        AST.addProperts(ast1, 'body', bodyProperts)

        for (let item of properties) {
            let name = item.key.name
                //基础模板不存在的属性
            if (tNames.indexOf(name) === -1) {
                ast1Default.declaration.properties.push(item)
            } else {
                let arr = AST.getProperts(ast2, name)
                AST.addProperts(ast1, name, arr)
            }
        }
    }
}

module.exports = AST