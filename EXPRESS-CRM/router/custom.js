const express = require('express'),
    route = express.Router(),
    path = require('path'),
    fs = require('fs');

//=>获取JSON文件的目录地址
const custom_path = `${path.resolve()}/json/userListData.json`;

//=>读取所有的客户信息(挂载到REQ上)
route.use((req, res, next) => {
    new Promise((resolve, reject) => {
        fs.readFile(custom_path, 'utf-8', (err, data) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(data);
        });
    }).then(data => {
        req.customData = JSON.parse(data);
        next();
    }).catch(err => {
        res.send({
            code: 0,
            message: '获取用户失败'
        });
    });
});

//=>请求数据列表
route.get('/userList', (req, res) => {
    /*
     * page：当前页码
     * total：总条数
     * limit：每页展示数量
     * pageNum：总页数
     */
    let {page = 1} = req.query,
        total = req.customData['data'].length,
        limit = 10,
        pageNum = Math.ceil(total / limit);

    let staIn = (page - 1) * limit,
        endIn = page * limit - 1;
    let result = req.customData['data'].slice(staIn, endIn + 1);

    res.json({
        code: 1,
        message: "success",
        total: total,
        data: result
    });
});

route.post('/addUser', (req, res) => {
    //=>req.body：目前传递进来的信息还没有ID
    let {n} = req.customData;
    req.body['id'] = ++n;
    req.customData['n'] = n;

    //=>存放
    req.customData['data'].push(req.body);
    fs.writeFile(custom_path, JSON.stringify(req.customData), 'utf-8', err => {
        let obj = {code: 0, message: '', data: false};
        if (err) {
            res.send(obj);
            return;
        }
        res.send({...obj, code: 1, data: true});
    });
});

module.exports = route;