import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

class Register extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return '注册';
    }
}

export default connect()(Register);
