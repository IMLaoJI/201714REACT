## 珠峰培训在线课堂“WEB-APP”完整介绍

### 1、该项目是基于create-react-app脚手架搭建的

已安装模块
- react
- react-dom
- webpack配置这一套：babel系列、css加载器系列、一些合并压缩的插件、自动创建服务预览的插件...
- ...

后期我们会用到的模块但是没有默认安装的
- redux / react-redux
- react-router-dom
- prop-types
- less / less-loader  （修改一下webpack的配置）
- axios
- redux中间件
- ...

> 我们后期需要修改默认的WEBPACK配置项
>
> 1）$ yarn eject  把隐藏的配置项展示出来
>   问题：如果当前项目是基于GIT仓库管理的，并且有部分内容没有提交到历史区，此时执行此操作会报错，我们需要把工作区内容清空（提交到历史区）