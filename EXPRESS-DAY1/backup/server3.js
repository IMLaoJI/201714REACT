let express = require('express'),
    app = express(),
    fs = require('fs'),
    path = require('path'),
    customPath = `${path.resolve()}/json/custom.json`;
app.listen(666);

//=>EXPRESS中间件:中间件一般都在所有接口处理的最前面
app.use((req, res, next) => {
    //=>只要客户端发送请求,首先处理的就是这个中间件(不管请求的地址是什么)

    //1、首先获取所有的客户信息
    let customData = fs.readFileSync(customPath, 'utf-8');
    customData = JSON.parse(customData);

    //2、如果想在其它的方法(接口)中使用这个数据,一般我们都把数据挂载到REQ上的
    req.customData = customData;

    //3、执行NEXT方法:当前中间件处理完成，继续执行下一个中间件或者执行下一个请求回调函数，如果不执行NEXT，后面的操作都进不去了
    next();
});

app.get(`/getAllList`, (req, res, next) => {
    res.json({code: 0});
    next();
});

app.get(`/getAllList`, (req, res, next) => {
    console.log(1);
    next();
});

app.use((req, res, next) => {
    console.log(2);
});

app.post(`/addInfo`, (req, res, next) => {

});

