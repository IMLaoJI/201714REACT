let express = require('express'),
    app = express(),
    fs = require('fs'),
    path = require('path'),
    customPath = `${path.resolve()}/json/custom.json`;
app.listen(666);

/*app.use((req, res, next) => {
    let customData = fs.readFileSync(customPath, 'utf-8');
    customData = JSON.parse(customData);
    if (customData.length > 0) {
        req.customData = customData;
        next();
        return;
    }
    res.send({
        code: 1,
        msg: 'custom is empty!'
    });
});
app.get(`/getAllList`, (req, res, next) => {
    res.json(req.customData);
});
app.post(`/addInfo`, (req, res, next) => {
    req.customData.push({xxx:'xxx'});
    ...
});*/

/*//=>NEXT是同步操作
app.use((res, req, next) => {
    console.log(1);
    next();
    console.log(2);
});
app.use((res, req, next) => {
    console.log(3);
    next();
    console.log(4);
});
app.use((res, req, next) => {
    console.log(5);
    next();
    console.log(6);
});
app.use((res, req, next) => {
    console.log(7);
});
//=>1 3 5 7 6 4 2*/

/*真实项目中,我们会给某些中间件加以一些条件限制：限定在什么样的请求下才会走这样的中间件*/
app.use((req, res, next) => {
    //=>所有请求地址都会执行这个中间件
    console.log(1);
    next();
});
app.use(`/user`, (req, res, next) => {
    //=>只有以 “/user” 开头的请求地址才会执行这个中间件
    console.log(2);
    next();
});

//=>真实项目规划API地址是有规律的，首先按照版块进行划分，相同版块不同的接口都有相同的地址区分标识，例如：
/*
 * [个人中心]
 *   /user/singin
 *   /user/singout
 *   /user/register
 *   /user/info
 *   ...
 *
 * [产品版块]
 *   /product/list
 *   /product/add
 *   ...
 */




