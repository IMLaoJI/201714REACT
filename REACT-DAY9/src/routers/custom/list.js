import React from 'react';
import PropTypes from 'prop-types';

export default class CustomList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <ul className="list-group">
                <li className="list-group-item">
                    编号：1 &nbsp;&nbsp; 姓名：XXX
                </li>
            </ul>
        </div>;
    }
}
