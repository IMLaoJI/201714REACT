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
//=>这些中间件,不管哪一个路由都可以使用
let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(bodyParser.raw());
app.use(bodyParser.text());

app.use('/user', require('./router/user'));
app.use('/product', require('./router/product'));


/*
 * EXPRESS中的路由
 *   作用：按照功能进行版块划分，每一个版块都是一个单独的路由，接收客户端请求，根据路径标识，进入不同的路由进行处理 => “模块化开发、团队协作开发、代码分离...”
 */