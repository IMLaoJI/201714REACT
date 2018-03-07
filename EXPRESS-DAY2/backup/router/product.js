let express = require('express'),
    route = express.Router();

route.use((req, res, next) => {
    next();
});

route.post(`/add`, (req, res) => {
    console.log(2);
});

module.exports = route;