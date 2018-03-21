import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

class Detail extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return '详情';
    }
}

export default connect()(Detail);
