import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route, Switch, Redirect} from 'react-router-dom';

import './static/css/bootstrap.css';
import Home from "./routers/home";
import Custom from "./routers/custom";
import Plan from "./routers/plan";
import Nav from "./component/nav";

import {Provider} from 'react-redux';
import store from './store/index';

ReactDOM.render(<Provider store={store}>
    <HashRouter>
        <div>
            <Nav/>

            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/custom" component={Custom}/>
                <Route path="/plan" component={Plan}/>

                {/*<Route render={() => {
                return <h2>HELLO WORLD</h2>;
            }}/>*/}
                {/*REDIRECT：重定向，重新定向到一个新的地址*/}
                <Redirect to="/"/>
            </Switch>
        </div>
    </HashRouter>
</Provider>, window.root);

/*
 * 基于REACT的ROUTER实现SPA单页面应用,我们会按照如下的工程目录开发：
 *  |-SRC
 *  |--component 存放的是各个组件(组件:可被公共使用的才是准确意义上的组件)
 *  |
 *  |--container(routers) 这里一般存放的是页面(也是基于REACT组件创建的JSX元素)
 *  |----app.js 当前项目的主页面(外层壳子),所有的其它页面都是嵌入到这里的
 *  |----xxx.js
 *  |
 *  |--store REDUX这一套
 *  |
 *  |--index.js
 */

/*
 * Switch：REACT-ROUTER中提供的一个组件，这个组件是用来约束路由的（只要有一个ROUTE的PATH被匹配到，直接渲染对应的组件，后面不管是否还能被匹配到，都不在继续渲染了，类似于SWITCH CASE中的机制）
 *
 * 真实项目中，我们一般都会在ROUTE的外面包一层SWITCH，因为加入它之后我们可以做一些处理：
 *    <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/custom" component={Custom}/>

            <Route render={() => {
                return <h2>HELLO WORLD</h2>;
            }}/>
       </Switch>

       如果请求的地址和上面两个PATH都不匹配，则执行最后一个ROUTE（ROUTE不设置PATH，所有的路径都可以匹配），如果上面有匹配的，SWITCH会中断下面的匹配的操作（也就是下面都不在执行了）
 */

