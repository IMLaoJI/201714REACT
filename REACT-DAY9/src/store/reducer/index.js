import React from 'react';
import {combineReducers} from 'redux';
import customReducer from './custom';

const reducer = combineReducers({
    custom: customReducer
});
export default reducer;