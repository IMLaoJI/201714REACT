import React from 'react';
import * as Types from '../action-types';

const customAction = {
    /* create(payload) {
         return dispatch => {
             setTimeout(() => {
                 dispatch({
                     type: Types.CUSTOM_CREATE,
                     payload
                 });
             }, 3000);
         };
         //=>默认情况下，DISPATCH在派发任务(ACTION)的时候是不支持异步操作的，例如执行CREATE，并没有立即返回一个ACTION对象，所以派发到REDUCER中的时候，缺乏TYPE属性，报错
     }*/
    create() {
        return {
            type: Types.CUSTOM_CREATE,
            payload: new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve({
                        id: 6,
                        name: 'FF'
                    });
                }, 3000);
            })
        }
    }
};
export default customAction;