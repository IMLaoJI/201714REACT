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

module.exports = route;