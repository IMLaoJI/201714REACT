let express = require('express'),
    route = express.Router();
route.use((req, res, next) => {
    next();
});
route.post(`/add`, (req, res) => {

});
module.exports = route;