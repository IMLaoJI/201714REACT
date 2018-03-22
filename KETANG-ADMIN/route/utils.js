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
    },
    writeFile(pathName, content) {
        let pathFile = `${path.resolve()}/moc/${pathName}`;
        content = typeof content !== 'string' ? JSON.stringify(content) : content;

        return new Promise((resolve, reject) => {
            fs.writeFile(pathFile, content, 'utf-8', err => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve();
            });
        });
    }
};