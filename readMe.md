# 欢迎使用 FEHelper 前端开发助手

https://github.com/xcshang/feHelper

 FEHelper 前端开发助手是致力于解决前端开发能效的一套应用系统。具有适用性广泛，无依赖，使用便捷等特点。


## 主要特点

适用场景广泛  
源码智能合并  
查找资源快捷  
资源使用智能  
资源粒度细，灵活度高  
资源开发、维护简单

## 具体特性

类型  | 参数
------------- | -------------
使用对象|前端开发人员
设计目的|重点在前端开发过程辅助
框架支持  | React、vue
浏览器兼容  | 与自身项目一致
系统适用性|适用所有React、vue项目
接入难度|简单
基础组件库|不限
资源类型|资源包、代码片段
资源开发、维护|简单
使用方式|自动与源文件结合、组件引入等
编辑维度|Vue、jsx文件
资源存放|线上、本地、项目
资源查找、下载|本地查找和下载，速度快
资源间依赖|自动下载依赖

## FEHelper APP使用方法

#### 一、应用下载
```javascript
git clone git@github.com:xcshang/feHelper.git
```

#### 二、依赖安装
```javascript
npm install
```
进入webSource目录下继续执行 npm install 安装预览功能依赖安装（建议安装）

#### 三、APP启动
```javascript
npm run app
```
启动带预览功能APP（要安装预览功能依赖）
```javascript
npm run start
```
#### 四、项目创建

4.1、使用APP一建搭建新项目  
项目管理》新增项目》填写项目名称和项目要放置的地址》确定  
4.2、已有项目  
4.2.1、已有项目内新建空目录feHelper（位置不限）  
4.2.2、已有项目webpack配置增加 @feHelper 别名配置到alias，指向新建目录feHelper，如：
```javascript
alias: {
'@feHelper': resolve('./src/feHelper'), //@feHelper为固定别名，不能改成其他的
}
```
4.2.3、回到feHelper APP，项目管理》新增项目》项目类型选择old,填写项目名称和已有项目的地址及feHelper目录地址》确定  

#### 五、资源关联  
项目管理》仓库地址中填入本地资源仓库地址》设置  
#### 六、项目开发  
1、进入项目开发  
2、左侧选择要开发的项目和具体要开发的文件  
3、右侧选择需要的资源  
4、中间点击确认进行代码插入  

## FEHelper 资源开发
可参考 https://github.com/xcshang/fe-helper-store 已有资源

#### 一、资源命名  
所有资源以英文名为文件夹，放置在仓库的根目录下  

#### 二、资源文件结构  
一个资源需要包含以下内容（以下以vue项目为例）  
index.vue （必需）  
info文件夹 （必需）  
其他依赖文件 （非必需）  

1、index.vue   
此文件为资源的入口文件，文件名必须为index.vue  
此文件对feHelper其他资源的引用,引用路径为@feHelper+feHelper资源英文名+依赖文件  
样式建议用import方式引入，不要写在<style></style>中  

2、info文件夹  
info文件夹包括以下三个文件：
info.json 
```javascript
{
      "type": "基础组件", //分类 (必须)
      "cName": "输入框", //中文名(必须)
      "name": "input", //英文名(必须，与目录名相同)
      "author": "xcshang", //开发者（CORP邮箱前缀）
      "desc": "简介信息"  //资源简介
}
```
view.png 资源预览图片    
readMe.md 资源使用文档

## 马上开始您的FEHelper之旅吧！
