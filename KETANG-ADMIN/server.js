let express = require('express'),
    app = express();

//=>CREATE SERVER
app.listen(8000, () => {
    console.log(`server is create success on 8000 port!`);
});

//=>API
/*
 * BODY-PARSER：把客户端在请求主体中传递的信息解析出来,存放到REQ.BODY上
 */
let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

app.use('/course', require('./route/course'));
app.use('/profile', require('./route/profile'));
app.use(function (req, res, next) {
    //=>404
    res.status(404);
    res.send('NOT FOUND!');
});