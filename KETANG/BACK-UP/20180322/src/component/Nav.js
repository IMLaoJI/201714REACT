import React from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import Transition from 'react-transition-group/Transition';
import './Nav.less';
import action from '../store/action/index';

//=>配置TRANSITION组件的一些基本参数信息
const duration = 300;
const defaultStyle = {
    transition: `${duration}ms`,
    opacity: 0
};
const transitionStyles = {
    entering: {opacity: 0},
    entered: {opacity: 1}
};

//=>NAV
class Nav extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            inProps: false
        };
    }

    render() {
        let {inProps} = this.state;

        return <header className="headerBox">
            <div className="con">
                <h1 className="logo">
                    <a href="#" className="link">珠峰培训</a>
                </h1>

                <a href="javascript:;"
                   className="menu iconfont icon-liebiao"
                   onClick={ev => {
                       this.setState({
                           inProps: !inProps
                       });
                   }}>
                </a>
            </div>

            {/*
              * 基于TRANSITION组件实现动画,想让哪一个元素实现动画,我们就用TRANSITION把它包裹起来即可
              *   1、需要把控制动画的元素用一层函数包裹起来,函数中有一个参数叫做STATE,当我们进行相关操作的时候,STATE是跟着进行改变的,由STATE的改变控制元素的动画
              *
              *   2、timeout：完成动画的时间
              *   3、in：[BOOLEN] 通过这属性可以控制元素动画的切换
              */}
            <Transition in={inProps} timeout={100}
                        onEnter={node => {
                            //=>NODE:当前控制动画的元素
                            node.style.display = 'block';
                        }}
                        onExited={node => {
                            node.style.display = 'none';
                        }}>
                {state => {
                    return <ul className="menuNav"
                               style={{
                                   ...defaultStyle,
                                   ...transitionStyles[state]
                               }}
                               onClick={ev => {
                                   this.setState({
                                       inProps: false
                                   });

                                   //=>DISPATCH派发修改容器中的数据
                                   this.props.getCourse(ev.target.getAttribute('type'));
                               }}>
                        <li type="all">全部课程</li>
                        <li type="react">REACT</li>
                        <li type="vue">VUE</li>
                        <li type="node">NODE</li>
                    </ul>;
                }}
            </Transition>
        </header>;
    }
}

export default withRouter(connect(state => ({...state}), action.course)(Nav));
