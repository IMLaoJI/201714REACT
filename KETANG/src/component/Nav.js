import React from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import './Nav.less';

class Nav extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <header className="headerBox">
            <div className="con">
                <h1 className="logo"><a href="#">
                    珠峰培训
                </a></h1>

                <a href="#" className="menu">

                </a>
            </div>

            <ul className="menuNav">
                <li>全部课程</li>
                <li>REACT</li>
                <li>VUE</li>
                <li>NODE</li>
            </ul>
        </header>;
    }
}

export default withRouter(connect()(Nav));
