import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

class Mycourse extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return '我的课程';
    }
}

export default connect()(Mycourse);
