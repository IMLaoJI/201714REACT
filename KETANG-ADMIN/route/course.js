let express = require('express'),
    route = express.Router();
let utils = require('./utils');

route.get('/banner', async function (req, res) {
    let result = await utils.readFile('bannerData.json');
    res.send(result);
});

route.use(async function (req, res, next) {
    req.result = await utils.readFile('courseData.json');
    next();
});
route.get('/list', function (req, res) {
    let {type = 'all'} = req.query,
        result = req.result;
    if (type !== 'all') {
        //->按照类别进行筛选
        result = result.filter(item => {
            return item.type === type;
        });
    }
    res.send(result);
});
route.get('/info', function (req, res) {
    let {id} = req.query,
        result = req.result;
    result = result.find(item => {
        return parseInt(item['id']) === parseInt(id);
    }) || {};
    res.send(result);
});

route.post('/collect', function (req, res) {
    req.session.collect = req.session.collect || [];
    req.body = req.body.item;
    let ary = req.session.collect,
        isExit = ary.find(item => {
            return item.id == req.body.id;
        });
    !isExit ? ary.push(req.body) : null;
    res.send('success');
});

route.get('/collect', function (req, res) {
    res.send(req.session.collect || []);
});

module.exports = route;

/*
 * SESSION：服务器端的一种临时存储机制（存在过期时间）,等价于客户端的COOKIE或者LOCAL-STORAGE本地临时存储
 *
 * 一台服务器对应很多的客户端，为了区分哪些数据是哪些客户端让其存储的，服务器端的SESSION和客户端(COOKIE)有一定的关联 =>和客户端对应一个唯一的标识码：SESSION-ID
 *  
 * 当服务器端设置SESSION后，在返回给客户端的信息中，在响应头信息中会增加一个叫做COOKIE的字段，存储的信息中包含SESSION-ID
 */