
const fs = require('fs')
const path = require('path')

let util = {

	getConfig(){
		let configPath = util.getConfigPath()
		let source = util.getFileSource(configPath)
		return JSON.parse(source)
	},

	getConfigPath(){
		return `${process.cwd()}/feHelper_config.json`
	},

	getWebSrcPath(){
		return `${process.cwd()}/webSource`
	},

	getCodeByTag(tag, source){
		let reg = util.getTagReg(tag)		
		if(reg.test(source)){
			return RegExp.$1
		}
        return ''
	},

	getTagReg(tag){
		let reg = new RegExp(`<${tag}[^>]*>([\\s\\S]*(?=<\/${tag}>))<\/${tag}>`,'gmi')
        return reg
	},

	//找到第一个标签并插入新内容
    getTempleate(t1, t2){
      var reg =/(<(.+)[^>]*>)([\s\S]*)(?=<\/\2>)(<\/\2>)/gmi 
      reg.test(t1)
      return `${RegExp.$1}${RegExp.$3}${t2}${RegExp.$4}`
    },

	//获取文件内容
	getFileSource(filePath){
		let source = fs.readFileSync(filePath, {
            encoding: 'utf-8'
        })
        return source
	},
	
	//获取第一层目录名
	getCatalog(filePath){
		let catalogs = []
		const files = fs.readdirSync(filePath)
		files.forEach(function (item, index) {
		    let stat = fs.lstatSync(`${filePath}/${item}`)
		    if (stat.isDirectory() === true) { 
		      catalogs.push(item)
		    }
		})
		return catalogs
	}
}

module.exports = util