import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

class Myprofile extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return '个人中心';
    }
}

export default connect()(Myprofile);
