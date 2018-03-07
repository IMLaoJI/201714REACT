/*CREATE SERVER*/
let express = require('express'),
    app = express();
app.listen(666, () => {
    console.log(`server create success!`);
});

/*HANDLE API*/
let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

app.use('/custom', require('./router/custom'));
app.use('/plan', require('./router/plan'));
//...

/*HANDLE STATIC*/
app.use(express.static('dist'));

/*
 * CRM：Customer Relationship Management 客户关系管理系统
 * OA：Office Automation 企业自动化办公系统（一般OA中包含小型的CRM） [钉钉\TIM\今目标\纷享销客...]
 * ERP：Enterprise Resource Planning 企业战略资源管理系统(和OA类似,但是一般比OA要更加强大一些,融合了企业的管理思想)
 * IM：Instant Messaging 即时通讯系统
 * ...
 */