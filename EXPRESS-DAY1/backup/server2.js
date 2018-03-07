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