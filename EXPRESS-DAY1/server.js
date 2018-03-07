let express = require('express'),
    fs = require('fs'),
    path = require('path'),
    app = express();
app.listen(666);

let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded());

/*app.use((req, res, next) => {
    //=>模拟BODY-PARSER，解析客户端传递的请求主体信息（默认客户端传递的格式是经过序列化的格式 `xxx=xxx&xxx=xxx...`）
    let passData = ``;
    req.on('data', chunk => passData += chunk);
    req.on('end', () => {
        //=>字符串序列化
        let reg = /([^?=&]+)=([^?=&]+)/g,
            obj = {};
        passData.replace(reg, (...arg) => {
            obj[arg[1]] = arg[2];
        });
        req.body = obj;
        next();
    });
});*/

app.post('/add', (req, res) => {
    console.log(req.body);
});