import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return '登录';
    }
}

export default connect()(Login);
