let express = require('express'),
    route = express.Router();

route.use(function (req, res, next) {
    next();
});
route.get('/info', function (req, res) {
    res.send('呵呵');
});

module.exports = route;