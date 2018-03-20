import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Nav from '../component/Nav';

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <Nav/>
        </div>;
    }
}

export default connect()(Home);
