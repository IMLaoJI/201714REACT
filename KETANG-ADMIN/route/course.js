let express = require('express'),
    route = express.Router();
let utils = require('./utils');

route.use(function (req, res, next) {
    next();
});
route.get('/banner', async function (req, res) {
    let result = await utils.readFile('bannerData.json');
    res.send(result);
});


module.exports = route;

/*
 * ASYNC AWAIT
 *  1、如果当前方法中使用了AWAIT，那么所在的方法必须是基于ASYNC修饰的（否则是属于语法错误）
 *
 *  2、AWAIT通常用来接收一个函数（返回PROMISE对象的函数）中RESOLVE后的结果
 *
 *  3、ASYNC可以把一个函数的返回值包一层PROMISE
 */





