let express = require('express'),
    fs = require('fs'),
    path = require('path'),
    app = express();
app.listen(666);

/*
 * 真实项目中我们都会使用哪些中间件呢?
 *   http://www.expressjs.com.cn/resources/middleware.html (EXPRESS中的第三方中间件)
 *
 * 1、如何用?
 *  需要而外的安装，例如，我们需要使用 ·body-parser· 中间件，我们需要基于npm/yarn安装
 *  > yarn add body-parser
 *
 *  导入进来
 *  > let bodyParser=require('body-parser');
 *
 *  基于中间件使用
 *  > app.use(bodyParser.xxx());
 *  > ...
 *
 * 2、基于BODY-PARSER可以快速获取到客户端传递的请求主体中的内容，把获取的结果存放在REQ.BODY自定义属性上
 *   BODY-PARSER提供了很多方法,每一种方法都是针对于客户端传递主体内容格式不一样而设定的
 *     =>bodyParser.json:处理客户端传递的是JSON格式数据
 *     =>bodyParser.raw:处理客户端传递的是Buffer格式数据
 *     =>bodyParser.text:处理客户端传递的是文本字符串（一般都是HTML/XML字符串）
 *
 *     =>bodyParser.urlencoded:处理客户端传递的是一个格式化的问号传参模式(表单序列化模式,这种方式很常用,JQ中AJAX中的POST模式,就是把信息序列化了)
 *       DEMO：id=1&name=12&sex=0 （application/x-www-form-urlencoded）
 *
 *       extended: false 默认值是TRUE
 *     ...
 */
let bodyParser = require('body-parser');
// app.use(bodyParser.json());//=>'{"id":1,"name":"xxx"...}'
// app.use(bodyParser.raw()); //=> '2DBF...'
// app.use(bodyParser.text());//=>'<html>...</html>'
app.use(bodyParser.urlencoded());//=>通过此中间件，已经把客户端请求主体内容解析了，存放在REQ.BODY属性上了

app.post('/add', (req, res) => {
    console.log(req.body);
});

/*
 * 客户端传递的是：'data[lx]=1'
 *
 * extended:true
 *   { data: { lx: '1' } }  最常用的是TRUE
 *
 * extended:false
 *   { 'data[lx]': '1' }
 */










