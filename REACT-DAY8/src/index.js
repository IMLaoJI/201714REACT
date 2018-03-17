import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route} from 'react-router-dom';

/*
 * REACT-ROUTER中提供了两种路由方式：
 *   1、BROWSER-ROUTER (基于H5中的HISTORY-API完成的)
 *     http://www.xxx.com/user
 *     http://www.xxx.com/user/singin
 *
 *   2、HASH-ROUTER （基于HASH值处理）
 *     http://www.xxx.com/#/user
 *     http://www.xxx.com/#/user/singin
 *
 *   如果项目是单纯静态页面展示(数据绑定是有客户端完成的)，一般我们都使用HASH-ROUTER完成；如果当前的项目有些内容是需要后台完成，我们尽量使用BROWSER-ROUTER，因为HASH值不太容易和服务器端产生关联；
 *
 *  导入进来的HASH-ROUTER是一个自己创建的组件（没有继承REACT中的COMPONENT）
 *
 * ------------------
 *
 * REACT或者VUE实现SPA是基于路由机制完成的，所谓路由机制：提前把什么样的访问路径，我们渲染什么样的组件，这些规则像路由器一样配置好，以后访问的时候，REACT-ROUTER会根据设定的规则渲染不同的组件
 *
 * Route就是用来规定路由执行的线路的
 *
 * 每一个ROUTER(HASH-ROUTER或者BROWSER-ROUTER)都只能有一个子元素，我们需要把我们配置的每一条规则(ROUTE)放到一个容器中
 */

/*
//=>函数声明式创建组件
//=>所有的属性、状态、钩子函数等都使用不了
const DEMO1 = () => {
    return <div>

    </div>;
};

//=>基于类创建组件
//=>这种模式我们可以使用：PROPS、STATE、生命周期函数...
class DEMO2 extends React.Component {
    render() {
        console.log(this);
        return <div>

        </div>;
    }
}
*/

import A from './component/A';
import B from './component/B';
import C from './component/C';

ReactDOM.render(<HashRouter>
    <div>
        {/*
          * path:当前请求的路径(指的是HASH值后的内容)
          * component:符合当前路径后渲染的组件
          * render:符合当前路径后执行的渲染方法(方法中可以根据自己的需求返回不同的组件或者内容,用来最后渲染)
          * exact
          * strict
          *
          * 默认情况下，只要PATH='/'，基本上所有请求的路径都可以把它匹配了，而这种路径一般都是首页的路径，我们如何控制，只有路径是一个斜杠才匹配，只要后面再有其它内容，就让其不匹配?
          * =>使用ROUTE中的EXACT来处理:准确精准的来匹配
          */}
        <Route path='/' exact component={A}/>
        {/*<Route path='/user' component={B}/>*/}
        <Route path='/user' render={() => {
            //=>基于RENDER一般都是做路由权限校验
            let loginInfo = localStorage.getItem('login-info');
            if (!loginInfo) {
                return <div>暂时未登录</div>;
            }
            return <B/>;
        }}/>
        <Route path='/user/singin' component={C}/>
    </div>
</HashRouter>, window.root);
