let http = require('http'),
    url = require('url'),
    mime = require('mime');
http.createServer((req, res) => {
    let {pathname, query} = url.parse(req.url, true);

    let reg = /\.([0-9a-zA-Z]+)/i;
    if (reg.test(pathname)) {
        //=>获取后缀名并且获取对应的MIME类型
        let suffix = reg.exec(pathname)[1].toUpperCase(),
            suffixMIME = mime.getType(suffix);

        //=>读取文件中的内容,并且返回即可(重新设置响应头)
        new Promise((resolve, reject) => {
            fs.readFile(`./dist${pathname}`, 'utf-8', (err, data) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(data);
            });
        }).then(result => {
            res.writeHead(200, {'content-type': suffixMIME});
            res.end(result);
        }).catch(err => {
            res.writeHead(404, {'content-type': 'text/plain'});
            res.end('not found!');
        });
    }

}).listen(666);
