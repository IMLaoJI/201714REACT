import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export default class VoteButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <main className='panel-body'>
            <button type="button" className="btn btn-danger">
                刘治兵
            </button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <button type="button" className="btn btn-success">
                王力民
            </button>
        </main>;
    }
}