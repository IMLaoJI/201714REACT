import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {isLogin, info} from '../api/profile';

class Myprofile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {data: {}};
    }

    async componentWillMount() {
        let loginId = await isLogin();
        loginId = Number(loginId);
        if (isNaN(loginId) || loginId === 0) {
            //=>没登录,跳转到登录页面
            this.props.history.push('/login');
            return;
        }
        //=>已经登录就是获取个人信息
        let data = await info();
        this.setState({
            data
        });
    }

    render() {
        return <div>
            姓名：{this.state.data.name}
        </div>;
    }
}

export default connect()(Myprofile);
