##基于Express框架构建Node服务
@(201714)

1、9:30上课 ，迟到半个小时内，扫码交￥10；迟到半个小时以上，交￥20；老师迟到，交￥100；

2、说一下学习重点
> 前端方向：
> ES6/ES7、移动端Hybrid模式混合APP开发、Vue全家桶、React全家桶、webpack、git...
>  
> 后端方向：
> 初步掌握一些node即可（作为面试时候的加分项，有能力同学可以深入研究） => 只要能够构建一个服务，做一些伪API处理即可


###node在真实项目中的应用场景
1、基于node中提供的npm包管理器进行工程化部署（可以使用yarn替代npm，还有类似的：bower / yeoman ...）

2、webpack（gulp / grunt ）自动化部署平台，能够实现文件的合并压缩等效果，也是基于node的fs等内置模块完成的（现在了解node的一些基础操作，为以后研究webpack源码等做铺垫）

3、伪API
> 服务器端会使用某一种语言提供一套获取数据（和客户端进行数据交互的）API接口，客户端只需要调用接口即可
>  
> 问题：项目刚开始做的时候，前后端都在进行，为了保证在开发中，前端可以随时调用接口进行测试（不管后端是否完成了真实的业务逻辑），我们首先都会制定一个假的API（数据是自己moc的）；有的公司伪API是后台写，有的公司需要前端自己创建（就是基于node中的各种框架 [ express / koa / egg ] ）；
>  
> 伪API有时候还有一个好的作用，可以解决跨域问题；
> - 同源：页面的预览地址和数据请求的API地址中，协议、域名、端口号，三者完全一致
> - 跨域：只要三个有一个不一样，就是跨域（AJAX技术不能直接进行跨域请求）

```javascript
//=>本地页面预览的地址
// http://localhost:63342/index.html

$.ajax({
	url:'http://v.qq.com/xxx?xxx=xxx' //=>和服务器端进行数据交互的API地址
	...
});

-------------
//=>上述的请求是不生效的，因为跨域了
真实开发的时候，本地一般都是localhost域名访问，服务器端提供的接口地址，不可能是localhost域（一般都是完整域名或者IP地址），此时开发过程中，本地无法使用ajax调取服务器端的数据

[解决]
=>第一种思想是把本地localhost伪装成和服务器端接口地址相同的域名 （xampp / IIS ... 自己使用工具在本地配置一个web服务，模拟一个域名访问自己本地的项目）

=>开发的时候自己基于node构建一个localhost的伪API服务，开发中调取都是自己的，项目上线，我们在切换到调取服务器端的（此时项目和服务器端已经在相同的域下了，属于同源）

/*
 * 页面地址：http://v.qq.com/xxx.htm
 * API地址：http://sports.qq.com/xx
 * [跨域]
 *  
 * 页面地址：http://v.qq.com/xxx.htm
 * API地址：http://v.qq.com:1234/xx 
 * [跨域]
 * 
 * 页面地址：https://v.qq.com/xx.htm
 * API地址：http://v.qq.com/xx
 * [跨域]
 *  
 * 页面地址：http://v.qq.com/xxx.htm
 * API地址：http://v.qq.com/student/list/
 * [同源]
*/
```

4、半后台（中间层）或者是  纯后台
> 中间层流程：
> 客户端调取NODE中间层，NODE中间层在调取后台数据（可能是基于JAVA等语言开发的） 
> - 客户端：展示交互
> - NODE中间层：业务逻辑处理
> - JAVA后台：数据分析和挖掘
> 
> 中间层好处
> - node处理速度快，可以提高服务器的并发等，在大批量访问的时候，拿node处理更好一些
> - node是基于js语言开发的，前端开发者可以快速衔接入手，节约企业沟通和人力成本
> - 基于JS进行数据绑定，在页面的源代码中是没有展示的内容的（给客户看的页面有，但是源代码中没有），这样搜索引擎无法抓取和收录页面中的内容，也就没办法做SEO了；（某些公司的某些项目需要前端开发者学一些 php/ruby/jsp/asp...，数据绑定不是前端处理，而是服务器端处理，目的就是为了做seo）；而使用node做中间层，可以让前端开发者快速入手，由node服务器端做数据的渲染，提高页面的seo；
> - ...
>  
> 扫盲
> CEO / CTO / CFO / COO ...  职称
> SEO：网络推广（类似于百度的搜索引擎养了个宠物：小蜘蛛/爬虫，按照一定的机制，定期抓取各大网站中的内容 [收录]；当用户在搜索引擎中输入一个关键词，搜索引擎回到自己的收录库中匹配查找，把匹配的展示出来； ）
> SEM：百度竞价

###Express
> 它是一款node.js web 应用框架，基于框架可以搭建一个web服务
> - 静态资源服务器
> - API接口处理
> - ...
>  
> 和其类似的还有：koa / egg ...

http://expressjs.com/
http://www.expressjs.com.cn/4x/api.html

**Express的安装**
```javascript
//=>基于yarn安装
yarn init -y
yarn add express body-parser

/*
 * express：框架的核心，提供了很多方法和属性，供我们搭建web服务
 *  
 * body-parser：它是express的一个中间件，可以快速获取到客户端通过请求主体传递的内容
 *  
 * [扩展：客户端把信息传递给服务器]
 * - URL问号传参（GET请求主要的方式）
 * - 设置请求主体（POST请求主要的方式）
 * - 设置请求头（例如：客户端可以把cookie信息通过请求头传递进来...）
 */
```

**Express的基础语法**
```javascript
/*
 * express <=> createApplication 它是一个函数
 * express() 此函数执行返回一个app，而这个app依然是一个函数
 *
 * var app = function(req, res, next){
 *    //=>req:类似于node中的request
 *    //=>res:类似于node中的response
 *    //=>next:中间件中执行下一个处理的函数
 *    ...
 * }
 */
let express = require('express'),
    app = express();

//=>创建一个服务,并且监听一个端口号
app.listen(666, () => {
    console.log(`server on 666 port create success!`);
});

//=>app.get / app.post ...
//Express把每一种常用的请求方式都作为一个方法挂载到app对象上，客户端通过不同的请求方式向当前服务发送请求，会找到对应的方法，并且执行对应的回调函数 => “把每一个API接口需要处理的事情进行代码分离”
app.get('/user', (req, res, next) => {
    /*
     * req:request
     *   req.method：获取的是请求方式(大写的)
     *   req.params：获取路径参数信息
     *   req.path：获取客户端请求的路径和名称(等价于原有的PATH-NAME)
     *   req.query：获取客户端通过问号传参传递的信息(以对象键值对的方式进行存储)
     *   ...
     */
});
app.post('/user', (req, res, next) => {
    /*
     * res:response
     *   res.json：默认以200状态码返回，默认设置的MIME是`application/json`，默认返回的是JSON格式的字符串，我们传递的是JSON对象，方法帮我们转换为JSON字符串
     *   res.sendFile：可以帮助我们快速获取文件中的源代码并且返回
     *   res.send：所有格式内容返回的集合体，通过它可以返回JSON或者文件...
     *   res.redirect
     *
     *   res.set(options):设置响应头
     *   res.status：设置状态码
     *   res.type：设置MIME类型
     *   ...
     */
    //=>res.sendFile
    res.sendFile(`/index.html`, {
        root: __dirname //=>当前文件的绝对路径
    });
    
    /*fs.readFile(`${__dirname}/dist/index.html`, `utf-8`, (err, data) => {
        if (err) {
            res.writeHead(404);
            res.end('not found!');
            return;
        }
        res.writeHead(200);
        res.end(data);
    });*/
});
```

**Express中的中间件**
> 作用：把一些相同的代码进行提取，或者是在主体业务逻辑处理之前，先去做一些额外的事情
>  
> app.use()