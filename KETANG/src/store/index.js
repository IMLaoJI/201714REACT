import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import reducer from './reducer/index';

const store = createStore(reducer);
export default store;