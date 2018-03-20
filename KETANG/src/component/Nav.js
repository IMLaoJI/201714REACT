import React from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import Transition from 'react-transition-group/Transition';
import './Nav.less';

/*--动画--*/
const duration = 300;
const defaultStyle = {
    transition: `opacity ${duration}ms`,
    opacity: 0,
    zIndex: -1
};
const transitionStyles = {
    entering: {opacity: 0, zIndex: -1},
    entered: {opacity: 1, zIndex: 999}
};

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {in: false};
    }

    render() {
        return <header className="headerBox">
            <div className="con">
                <h1 className="logo"><a href="#" className="link">珠峰培训
                </a></h1>

                <a href="javascript:;"
                   className="menu iconfont icon-liebiao"
                   onClick={ev => {
                       this.setState({
                           in: !this.state.in
                       });
                   }}>
                </a>
            </div>

            <Transition in={this.state.in} timeout={duration}>
                {
                    (state) => (
                        <ul className="menuNav"
                            style={{
                                ...defaultStyle,
                                ...transitionStyles[state]
                            }}>
                            <li>全部课程</li>
                            <li>REACT</li>
                            <li>VUE</li>
                            <li>NODE</li>
                        </ul>
                    )
                }
            </Transition>
        </header>;
    }
}

export default withRouter(connect()(Nav));
