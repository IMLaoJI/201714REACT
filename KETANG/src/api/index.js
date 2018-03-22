/*
 * API：包含了当前项目中所有对后台的数据请求方法
 *   INDEX：配置一些AXIOS发请求的全局配置信息
 */
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.withCredentials = true;
axios.interceptors.response.use(result => {
    //=>把AXIOS响应部分重新设置:以后基于AXIOS获取的数据中,我们只解析出来了DATA,用的时候不需要自己在通过DATA查找了
    return result.data;
});
export default axios;