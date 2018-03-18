import React from 'react';
import * as Types from '../action-types';

const customReducer = (state = {
    data: [
        {id: 1, name: 'AA'},
        {id: 2, name: 'BB'}
    ]
}, action) => {
    state = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case Types.CUSTOM_CREATE:
            state.data.push(action.payload);
            break;
    }
    return state;
};
export default customReducer;