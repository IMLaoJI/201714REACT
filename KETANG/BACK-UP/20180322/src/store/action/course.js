import * as Types from '../action-types';
import {queryCourseList} from '../../api/course';

const courseAction = {
    async getCourse(type) {
        /*
         * 1、调取API中的方法从服务器端获取数据
         * 2、返回对应的ACTION对象 {type/payload}
         */
        return {
            type: Types.INIT_COURSE,
            payload: await queryCourseList(type)
        }
    }

    //=>基于REDUX-THUNK中间件的写法
    /*getCourse(type) {
        return function (dispatch) {
            queryCourseList(type).then(result => {
                dispatch({
                    type: Types.INIT_COURSE,
                    payload: result
                });
            });
        }
    }*/

    /*//=>基于REDUX-PROMISE中间件完成的
    getCourse(type) {
        return {
            type: Types.INIT_COURSE,
            payload: queryCourseList(type)
        }
    }*/
};
export default courseAction;