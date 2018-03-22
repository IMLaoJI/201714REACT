import * as Types from '../action-types';

const courseReducer = (state = {
    courseData: []
}, action) => {
    state = {...state};
    switch (action.type) {
        case Types.INIT_COURSE:
            state.courseData = action.payload;
            break;
    }
    return state;
};
export default courseReducer;
