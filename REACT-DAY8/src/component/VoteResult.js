import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export default class VoteResult extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <header className='panel-heading'>
            <h3 className='panel-title'>
                刘治兵 VS 王力民 谁长的更有特色一些！
            </h3>
            <div className="progress"
                 style={{
                     margin: '20px 0',
                     background: '#5CB85C'
                 }}>
                <div className="progress-bar"
                     role="progressbar"
                     aria-valuenow="60"
                     aria-valuemin="0"
                     aria-valuemax="100"
                     style={{
                         width: '60%',
                         background: '#D9534F'
                     }}>
                    60%
                </div>
            </div>
        </header>;
    }
}