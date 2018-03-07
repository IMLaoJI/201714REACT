let express = require('express'),
    app = express(),
    fs = require('fs'),
    path = require('path'),
    customPath = `${path.resolve()}/json/custom.json`;
app.listen(666);

app.use((req, res, next) => {
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

});
app.post(`/addInfo`, (req, res, next) => {

});

