let express = require('express'),
    app = express();

//=>CREATE SERVER
app.listen(8000, () => {
    console.log(`server is create success on 8000 port!`);
});

//=>API
/*CORS*/
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length,Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    if (req.method === 'OPTIONS') {
        res.send('Current services support cross domain requests!');
        return;
    }
    next();
});

let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

app.use('/course', require('./route/course'));
app.use('/profile', require('./route/profile'));
app.use(function (req, res, next) {
    //=>404
    res.status(404);
    res.send('NOT FOUND!');
});