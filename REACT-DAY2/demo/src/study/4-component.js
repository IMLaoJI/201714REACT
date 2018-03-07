import React, {Component} from 'react';
import ReactDOM, {render} from 'react-dom';

/*--我们需要使用的是它的CSS文件--*/
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

/*
 * 组件：能够被重复使用的都可以被称之为组件，REACT设计的初衷就是组件开发，我们基于REACT创建一个个的组件，最后由N多组件共同组成一个完整的应用
 *
 * 1、函数声明式创建组件
 * 2、基于React的Component组件类来创建组件（最常用的）
 */
class Dialog extends Component {
    constructor() {
        super();
    }

    /*
     * RENDER是构建组件必须写的方法，并且此方法必须返回一个JSX元素
     *    Dialog.prototype.render：方法中的this一般都是当前类的实例（创建组件是创建一个类，调取组件使用相当于创建类的一个实例）
     *
     *    当我们调取组件使用的时候，就会执行RENDER，把返回的JSX元素呈现在页面中
     */
    render() {
        /*
         * this:当前组件(类)的实例
         *   context:{} 后面的高阶组件就是基于这个完成的
         *   props:{} 当前组件的属性(调取组件时候传递的信息)
         *   refs:{} (非受控组件)
         *   state:null (受控组件) 组件的状态
         *   ...
         *   __proto__:Dialog.prototype
         *      render:function...
         *      ...
         *      __proto__:Component.prototype
         *          setState：修改组件状态的
         *          ...
         *          __proto__:Object.prototype
         */
        
        let {title, content} = this.props;

        return <div className="panel panel-default" style={{width: '500px', margin: '20px auto'}}>
            <header className="panel-heading">
                <h2 className="panel-title">{title}</h2>
            </header>
            <main className="panel-body">
                {content}
            </main>
        </div>;
    }
}


render(<div>
    {/*title &&content 都是当前每一个组件(实例)的属性*/}
    <Dialog title="提示" content="天干物燥，小心火烛"/>

    <Dialog title="警告" content="防火防盗防闺蜜"/>
</div>, window.root);