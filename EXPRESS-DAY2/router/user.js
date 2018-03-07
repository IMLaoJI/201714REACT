let express = require('express'),
    route = express.Router();
route.use((req, res, next) => {
    next();
});
route.get(`/list`, (req, res) => {
    res.send({code: 0});
});

/*route.get(`/info`, (req, res) => {
    //=>我们通过这个接口获取指定用户的详细信息（要求：客户端把用户的ID或者其它标识传递给服务器）
    /!*
     * 客户端可以这样处理：
     * 1、问号传参
     *  $.ajax({
     *     url:'/user/info?id=100',
     *     ...
     *  });
     *
     *  服务器端接收:  let {id}=req.query
     *!/
});*/
route.get('/info/:id/:sex', (req, res) => {
    /*
     * 2、路径参数
     *  $.ajax({
     *     url:'/user/info/100/man',
     *     ...
     *  })
     */
    // req.params ：{id:100,sex:'man'}  获取路径中的参数信息（以键值对方式存储）
    res.json(req.params);
});


module.exports = route;