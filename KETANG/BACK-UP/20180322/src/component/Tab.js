import React from 'react';
import PropTypes from 'prop-types';
import {withRouter, NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import './Tab.less';

class Tab extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <footer className="footerBox">
            <ul>
                <li>
                    <NavLink to="/">
                        <i className="iconfont icon-xingqiu"></i>
                        首页
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/course">
                        <i className="iconfont icon-wode_kecheng"></i>
                        我的课程
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/profile">
                        <i className="iconfont icon-xiaolian"></i>
                        个人中心
                    </NavLink>
                </li>
            </ul>
        </footer>;
    }
}

export default withRouter(connect()(Tab));

/*
 * ROUTER中的 NAV-LINK / LINK 组件，经过REACT渲染后的标签名是A，我们写样式的时候是要给A标签写样式
 *
 * NAV-LINK默认加的选中样式类名是：ACTIVE
 */
