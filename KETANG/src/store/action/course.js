import * as Types from '../action-types';
import {queryCourseList, queryCollect} from '../../api/course';

const courseAction = {
    async getCourse(type) {
        return {
            type: Types.INIT_COURSE,
            payload: await queryCourseList(type)
        }
    },
    collectCourse(item) {
        return {
            type: Types.COLLECT,
            payload: item
        }
    },
    getCollect() {
        return {
            type: Types.COLLECT_GET,
            payload: queryCollect()
        }
    }
};
export default courseAction;