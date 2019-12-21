# feHelper项目

### 项目技术

```
vue2 + webpack4 + less
```


### 项目命令

安装依赖

```shell
yarn
```

本地开发项目启动

```shell
yarn start
```

上线打包

```shell
yarn build
```

### 可在应用根目录下新建配置文件 .localDevConfig.js，文件内容如下：

```javascript
const config = {
  modules: [], //自定模块，不定义或为[]表示所有模块
  port: '8009', //本地开发端口
  proxyTarget: '' //本地开发接口代理
}
module.exports = config
```


