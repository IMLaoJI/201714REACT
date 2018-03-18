import React from 'react';
import PropTypes from 'prop-types';

export default class CustomCreate extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            用户编号：<input type="text"/>
            <br/>
            <br/>
            用户姓名：<input type="text"/>
            <br/>
            <br/>
            <button>新增用户</button>
        </div>;
    }
}
