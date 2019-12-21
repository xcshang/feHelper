var express = require('express');
var bodyParser = require('body-parser')
var app = express();
const VUE = require('./lib/vue')
const web = require('./lib/web')
const dynamic = require('./lib/dynamic/dynamic')
const util = require('./lib/util')
app.use(express.static('web'));
const fs = require('fs')

// create application/json parser
var jsonParser = bodyParser.json()
    // create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

//确认添加组件到页面
app.post('/api/vue/getCode', jsonParser, function(req, res) {
    //需要新增加的组件
    let modules = req.body.components
        //要增加的组件的文件
    let vueFile = req.body.fileName
        //全局设置项目组件仓库
    global.projectStore = req.body.projectStore
    VUE.create(modules, vueFile).then((data) => {
        let response = {
            code: 200,
            message: 'ok',
            data: data
        }
        res.send(response);
    })
});

//查看组合组件源码
app.post('/api/vue/checkCode', jsonParser, function(req, res) {
    let modules = req.body.components
    global.projectStore = './webSource/src/feHelper'
    VUE.create(modules).then((data) => {
        let response = {
            code: 200,
            message: 'ok',
            data: data
        }
        res.send(response);
    })
});
//预览组件
app.post('/api/vue/preview', jsonParser, function(req, res) {
    let modules = req.body.components
    let previewFile = './webSource/src/components/preview.vue'
    global.projectStore = './webSource/src/feHelper'
    VUE.create(modules, '', previewFile).then((data) => {
        let response = {
            code: 200,
            message: 'ok',
            data: data
        }
        res.send(response);
    })
});

//获取所有组件
app.get('/api/vue/getComponets', jsonParser, function(req, res) {
    let infos = web.getModules()
    let response = {
        code: 200,
        message: 'ok',
        data: {
            infos
        }
    }
    res.send(response);
});

//获取项目下所有vue文件
app.post('/api/vue/getVueFile', jsonParser, function(req, res) {
    let url = req.body.url
    let files = web.getVueFile(url)
    let response = {
        code: 200,
        message: 'ok',
        data: files
    }
    res.send(response);
});

//获取组件的readme文件
app.get('/api/vue/getReadMe', jsonParser, function(req, res) {
    let txt = web.getReadMe(req.query.name)
    let response = {
        code: 200,
        message: 'ok',
        data: txt
    }
    res.send(response);
});

//获取页面项目信息
app.get('/api/vue/projectInfo', jsonParser, function(req, res) {
    let projectInfos = web.projectInfo()
    let response = {
        code: 200,
        message: 'ok',
        data: projectInfos
    }
    res.send(response);
});

//编辑仓库地址
app.post('/api/editStorePath', jsonParser, function(req, res) {
    let response = web.editStorePath(req.body)
    res.send(response);
});

//添加项目
app.post('/api/addProject', jsonParser, function(req, res) {
    let response = web.addProject(req)
    res.send(response);
});

//编辑项目
app.post('/api/editProject', jsonParser, function(req, res) {
    let response = web.editProject(req.body)
    res.send(response);
});

//删除项目
app.post('/api/delProject', jsonParser, function(req, res) {
    let response = web.delProject(req.body.name)
    res.send(response);
});

//运行项目
app.get('/api/runProject', jsonParser, function(req, res) {
    let response = web.runProject(req.query.name)
    res.send(response);
});

//动态组件
app.post('/api/dynamic', jsonParser, function(req, res) {
    let modules = req.body.modules
    let filePath = req.body.filePath
    let data = dynamic.init(modules, filePath)
    let response = {
        code: 200,
        message: 'ok',
        data
    }
    res.send(response);
});

app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});