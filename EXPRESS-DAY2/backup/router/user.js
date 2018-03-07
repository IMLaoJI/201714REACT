/*
 * USER版块中的API处理（包含一些针对于USER的中间件）
 */
let express = require('express'),
    route = express.Router();//=>创建的ROUTE和APP类似,都具备USE/GET/POST...等方法(用法也是相同的)

route.use((req, res, next) => {
    //=>虽然看似没有设置路径标识限制,但是只有USER版块的API才会进入这个中间件进行处理
    next();
});

route.get(`/list`, (req, res) => {
    //=>等价于完整的API地址：`/user/list`
    //...
    console.log(1);
});

module.exports = route;