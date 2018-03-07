let express = require('express'),
    path = require('path'),
    fs = require('fs');

/*
 * create server
 */
let app = express();
app.listen(666, () => {
    console.log(`server create success，listing on 666 port！`);
});

/*
 * handle api（Application Programming Interface）
 */
let bodyParser = require('body-parser');//=>HANDLE POST，QUERY REQUEST BODY
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(bodyParser.raw());
app.use(bodyParser.text());

//=>USER
app.use('/user', (req, res, next) => {
    //...
    next();
});
app.get('/user/list', (req, res) => {
    //=>GET请求是通过问号传参把信息传递给服务器的
    // req.query
    // req.path
    // req.method
    // ...
});
app.post('/user/register', (req, res) => {
    //=>POST请求是通过请求主体把信息传递给服务器的
    // req.body：经过BODY-PARSER中间件的处理，把请求主体中的内容存放在REQ.BODY上
    //...

    // res.json
    // res.sendFile([file-path],{root:__dirname})
    // res.send()
    // ...
});

//=>PRODUCT
app.use('/product', (req, res, next) => {

});
app.get('/product/list', (req, res) => {

});