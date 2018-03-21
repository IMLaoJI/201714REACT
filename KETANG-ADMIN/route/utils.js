let fs = require('fs'),
    path = require('path');

module.exports = {
    readFile(pathName) {
        let pathFile = `${path.resolve()}/moc/${pathName}`;
        return new Promise((resolve, reject) => {
            fs.readFile(pathFile, 'utf-8', (err, data) => {
                if (err) {
                    reject(err);
                    return;
                }
                data = JSON.parse(data);
                resolve(data);
            });
        });
    }
};