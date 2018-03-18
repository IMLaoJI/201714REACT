import React from 'react';
import PropTypes from 'prop-types';
import {NavLink, Link} from 'react-router-dom';
import './nav.less';

export default class Nav extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <nav className='navbar navbar-default'>
            <div className='container-fluid col-md-2'>
                <Link className='navbar-brand'
                      to={{
                          pathname: '/',
                          search: '?from=logo'
                      }}>
                    珠峰培训CRM
                </Link>
            </div>
            <div className='collapse navbar-collapse col-md-10'>
                <ul className='nav navbar-nav'>
                    <li><NavLink to='/'
                                 activeClassName='activeMy'
                                 exact>首页</NavLink></li>
                    <li><NavLink
                        activeClassName='activeMy'
                        to='/custom'
                    >客户管理</NavLink></li>
                    <li><NavLink
                        to='/plan'
                        activeClassName='activeMy'>计划管理</NavLink></li>
                </ul>
            </div>
        </nav>;
    }
}
/*
 * Link VS NavLink
 *   都是ROUTER提供的组件，用来实现组件切换的
 *
 * [Link]
 *   类似于普通的A标签，通过Link中的to可以跳转到具体的路由页面
 *   to='/'
 *   to={{
 *      pathname:'/',
 *      search:'?xxx=xxx',
 *      hash:'#xxx'
 *   }}
 *
 * [NavLink]
 *   拥有和Link相同的语法和效果，只是在Link的基础上，可以设置一些样式规则
 *   1、基于NavLink实现跳转，会给点击的元素增加一个active的样式类
 *   2、我们可以基于activeClassName / activeStyle 重新设置样式(或者样式类)
 *   3、当路由切换完成，会拿当前的HASH路径和对应的地址做匹配，把匹配到的NavLink设置对应的选中样式（和Route中的PARH路径匹配一样，对于'/'这种路径我们最好设置exact属性，精准匹配）
 */