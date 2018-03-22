let express = require('express'),
    route = express.Router(),
    utils = require('./utils');

route.use(function (req, res, next) {
    utils.readFile('user.json')
        .then(result => {
            req.num = result.num;
            req.data = result.data;

            next();
        });
});

route.post('/login', function (req, res) {
    //=>验证是否存在
    let isExit = req.data.find(item => {
        return (item.name === req.body.name) && (item.pass === req.body.pass);
    });

    //=>不存在返回错误信息
    if (!isExit) {
        res.send('用户名或者密码错误!');
        return;
    }

    //=>存在:登录成功（为了保证后期可以有效的验证登录态，在登录成功后，我们会在服务器端存储一条SESSION信息，后期验证的时候，只需要判断是否存在这个SESSION即可）
    req.session.loginID = isExit['id'];
    res.send('success');
});

route.get('/login', function (req, res) {
    res.send((req.session.loginID + '') || '0');
});

route.post('/register', function (req, res) {
    let passData = req.body;
    passData['id'] = ++req.num;
    req.data.push(passData);

    utils.writeFile('user.json', {
        num: req.num,
        data: req.data
    }).then(() => {
        //=>注册成功 <=> 登录成功
        req.session.loginID = passData['id'];
        res.send('success');
    }).catch(() => {
        //=>注册失败
        res.send('error');
    });
});

route.get('/info', function (req, res) {
    //=>客户端如果传递ID就是想看别人的信息，不传递ID，就是想看自己的信息（前提是已经登录，没有登录返回错误即可）
    let userId = req.query.id || req.session.loginID || 0,
        data = req.data.find(item => {
            return item.id == userId;
        });
    res.send(data || '查无此人');
});

module.exports = route;