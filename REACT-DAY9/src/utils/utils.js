const utils = {
    queryURLParameter(url) {
        let regParam = /([^?&=#]+)=?([^?&=#]+)?/ig,
            obj = {};
        url.replace(regParam, (...arg) => {
            obj[arg[1]] = arg[2];
        });
        return obj;
    }
};
export default utils;