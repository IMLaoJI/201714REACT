import React from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

class Back extends React.Component {
    static defaultProps = {
        title: '课程详情'
    };
    static propTypes = {
        title: PropTypes.string
    };

    constructor(props) {
        super(props);
    }

    render() {
        let {history, title} = this.props;

        return <header style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '1.12rem',
            lineHeight: '1.12rem',
            background: '#2A2A2A',
            textAlign: 'center',
            color: '#FFF',
            fontSize: '.28rem'
        }}>
            <a href="javascript:;"
               onClick={ev => {
                   history.goBack();
               }}
               style={{
                   position: 'absolute',
                   left: '.1rem',
                   fontSize: '.32rem',
                   color: '#FFF'
               }}
               className="iconfont icon-fanhui"></a>
            {title}
        </header>;
    }
}

export default withRouter(connect()(Back));
