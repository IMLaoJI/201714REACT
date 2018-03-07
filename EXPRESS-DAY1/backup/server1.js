let http = require('http'),
    fs = require('fs'),
    url = require('url'),
    path = require('path');
http.createServer((req, res) => {
    //=>当客户端向6666端口服务发送一次请求，回调函数就被触发执行一次
    // req.url => 客户端请求的路径名称及问号传参（没有HASH值）
    let {
        pathname,
        query
    } = url.parse(req.url, true);

    // 'getAllList' => JSON
    if (pathname === `/getAllList`) {
        //=>获取客户端传递的callback
        let {callback} = query;//=>callback存储的值就是传递的函数

        //=>重写响应头
        res.writeHead(200, {
            'content-type': 'application/json;charset=utf-8;'
        });

        //=>设置响应主体内容
        /*res.end(JSON.stringify({
            code: 0,
            msg: 'success'
        }));//=>返回的数据格式：Buffer、JSON格式的字符串*/
        let data = JSON.stringify({
            code: 0,
            msg: 'success'
        });
        res.end(`${callback}(${data})`);//=>`fn({code:0,msg:'success'})` 服务器端把接收的函数和准备的数据拼接为 'fn(data)' 这样的字符串返回给客户端
    }

}).listen(1234, () => {
    console.log(`server is success,listing on 1234 port!`);
});