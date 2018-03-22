import axios from './index';

export function queryBanner() {
    return axios.get('/course/banner');
}

export function queryCourseList(type = 'all') {
    return axios.get('/course/list', {
        params: {
            type
        }
    });
}