const fs = require('fs')
const path = require('path')
const util = require('./util')
const glob = require('glob')
const copy = require('./copy')
const { exec } = require('child_process');

let web = {

    getResCode() {
        return {
            code: 200,
            message: 'ok',
            data: {}
        }
    },
    //添加项目
    addProject(req) {
        let config = util.getConfig()
        let names = []
        config.project.forEach((item) => {
            names.push(item.name)
        })
        if (names.indexOf(req.body.name) !== -1) {
            return {
                code: 201,
                message: '项目名称已存在',
                data: {}
            }
        }

        let newProject = Object.assign({}, req.body)

        //feHelp项目自动指定feHelp组件仓库
        if (newProject.type === 'feHelper') {
            //拷贝项目源码
            copy.createDocs(util.getWebSrcPath(), newProject.projectPath)
            newProject.projectStore = `${newProject.projectPath}/src/feHelper`
        }
        //写入配置文件
        config.project.unshift(newProject)
        web.updateConfigFile(config)

        return web.getResCode()
    },

    updateConfigFile(config) {

        let str = JSON.stringify(config)
        let configPath = util.getConfigPath()
        fs.writeFile(configPath, str, {}, (err) => {});
    },

    //编辑仓库地址
    editStorePath(req) {
        let config = util.getConfig()
        config.storePath = req.storePath
        web.updateConfigFile(config)
        return web.getResCode()
    },

    //编辑项目
    editProject(req) {
        let config = util.getConfig()
        config.project[req.index] = req.project
        web.updateConfigFile(config)
        return web.getResCode()
    },

    //删除项目
    delProject(name) {
        let config = util.getConfig()
        let index
        config.project.forEach((item, i) => {
            if (item.name === name) {
                index = i
            }
        })
        config.project.splice(index, 1)
        web.updateConfigFile(config)
        return web.getResCode()
    },

    //获取组件仓库所有组件信息
    getModules() {
        let infoArr = []
        let storePath = util.getConfig().storePath
        let infosFiles = glob.sync(`${storePath}/*/info/info.json`)
        infosFiles.forEach((item) => {
            let info = util.getFileSource(item)
            info = JSON.parse(info)
            if (info.type !== 'baseComponents') {
                infoArr.push(info)
            }
        })

        let cataLogs = util.getCatalog(`${storePath}`)
            //拷贝图片到app
        cataLogs.forEach((item) => {
            try {
                fs.copyFileSync(`${storePath}/${item}/info/view.png`, `${process.cwd()}/web/storeImg/${item}.png`)
            } catch (e) {

            }
        })
        return infoArr
    },

    //获取所有项目信息对象
    projectInfo() {
        let config = util.getConfig()
        return config
    },

    //获取项目下的所有vue文件
    getVueFile(url) {
        let filePath = glob.sync(`${url}/!(node_modules)/**/*.vue`)
        console.log(`${url}/node_modules/**/*.vue`)
        let arr = []
        filePath.forEach((item) => {
            arr.push(item.split(url)[1])
        })
        return arr
    },

    //获取readme文件
    getReadMe(name) {
        try {
            let storePath = util.getConfig().storePath.storePath
            let source = util.getFileSource(`${storePath}/${name}/info/readMe.md`)
            return source
        } catch (e) {
            return '暂无文件'
        }
    },

    getProjectByName(name) {
        let config = util.getConfig()
        let project
        for (var i = 0; i < config.project.length; i++) {
            let item = config.project[i]
            if (item.name === name) {
                project = item
                break
            }
        }
        return project
    },

    runProject(name) {
        let project = web.getProjectByName(name)
        let projectPath = project.projectPath

        exec(`osascript -e 'tell app "Terminal"\ndo script "cd ${projectPath} && yarn dev"\nend tell'`, (err, stdout, stderr) => {
            if (err) {
                console.error(err);
                return;
            }
        });
        return web.getResCode()
    }

}

module.exports = web