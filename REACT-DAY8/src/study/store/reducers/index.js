/*==合并所有编写的REDUCER==*/
import {combineReducers} from 'redux';
import vote from './vote';

const reducer = combineReducers({
    vote: vote
});
export default reducer;