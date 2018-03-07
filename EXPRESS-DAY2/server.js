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
let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(bodyParser.raw());
app.use(bodyParser.text());

app.use('/user', require('./router/user'));
app.use('/product', require('./router/product'));

/*
 * handle static
 */
app.use(express.static('dist'));//=>把DIST做为静态资源文件的目录
app.use(express.static('build'));//=>把BUILD也做为静态文件的目录（先到DIST中进行查找，没有找到再到BUILD中进行查找）

/*
 * handle special
 */
app.use((req, res, next) => {
    //=>如果以上请求处理都没有找到，说明当前请求的地址是不存在的
    //1、返回指定错误信息
    /*res.status(404);
    res.send('not found!');*/

    //2、重定向到404页面
    res.redirect('./404.html');//=>默认状态码是302：临时重定向
    // res.redirect(301, './404.html');
});