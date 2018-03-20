import React from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import './Nav.less';

class Nav extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <header className="headerBox">
            <div className="con">
                <h1 className="logo"><a href="#" className="link">珠峰培训
                </a></h1>

                <a href="#" className="menu iconfont icon-liebiao"
                   onClick={ev => {
                       let $menuNav = this.menuNav,
                           $block = $menuNav.style.display || 'none';
                       if ($block === 'none') {
                           $menuNav.style.display = 'block';
                           setTimeout(() => {
                               $menuNav.style.opacity = 1;
                           }, 0);
                           return;
                       }

                       $menuNav.style.opacity = 0;
                       let fn = () => {
                           $menuNav.style.display = 'none';
                           $menuNav.removeEventListener('transitionend', fn, false);
                       };
                       $menuNav.addEventListener('transitionend', fn, false);
                   }}>

                </a>
            </div>

            <ul className="menuNav"
                ref={x => this.menuNav = x}>
                <li>全部课程</li>
                <li>REACT</li>
                <li>VUE</li>
                <li>NODE</li>
            </ul>
        </header>;
    }
}

export default withRouter(connect()(Nav));
