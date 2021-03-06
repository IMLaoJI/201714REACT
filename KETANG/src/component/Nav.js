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

            <Transition in={inProps} timeout={100}
                        onEnter={node => {
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
