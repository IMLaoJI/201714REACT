import React from 'react';
import * as Types from '../action-types';

const customAction = {
    create(payload) {
        return {
            type: Types.CUSTOM_CREATE,
            payload
        }
    }
};
export default customAction;