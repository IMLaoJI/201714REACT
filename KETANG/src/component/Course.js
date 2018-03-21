import React from 'react';
import PropTypes from 'prop-types';
import {withRouter, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import './Course.less';

class Course extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <li className="courseItem">
            <Link to="/detail">
                <h3 className="title">微信小程序专家级课程</h3>
                <div className="con">
                    <div className="imgBox">
                        <img src="" alt=""/>
                    </div>
                    <div className="con_right">
                        <p>
                            <span>开课时间</span>
                            <span>2018-03-21</span>
                        </p>
                        <p>
                            <span>上课地点</span>
                            <span>珠峰培训</span>
                        </p>
                        <p>
                            <span>时长</span>
                            <span>2小时</span>
                        </p>
                    </div>
                </div>
                <div className="price">
                    课程金额：<span>￥2000</span>
                </div>
            </Link>
        </li>;
    }
}

export default withRouter(connect()(Course));
