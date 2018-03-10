import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';

/*
 * REACT是一款MVC框架,但是我们可以基于它的一些方法实现出双向数据绑定
 *   =>基于REACT中的STATE状态管理（受控组件=>数据和视图交互）
 *   =>基于REACT中的REF进行管理（非受控组件=>操作DOM实现交互）
 */
class Sum extends React.Component {
    constructor() {
        super();

        //=>init state
        this.state = {
            n: 0,
            m: 0
        };
    }

    //=>使用箭头函数保证方法中的THIS依然是组件实例
    handInp = ev => {
        let tar = ev.target,
            lx = tar.getAttribute('lx'),
            val = tar.value;
        (val.length > 0 && isNaN(val) === false) ? val = Number(val) : null;
        if (lx === 'left') {
            /*
             * 1、修改状态
             * 2、通知REACT从新渲染组件中的内容（DIFF差异渲染）
             */
            this.setState({n: val});
        } else {
            this.setState({m: val});
        }
    };

    render() {
        let {n, m} = this.state;

        return <div className="panel panel-default">
            <div className="panel-heading">
                <h2 className="panel-title">任意两个数字求和</h2>
                <br/>
                <input type="text" className="form-control" value={n} onChange={this.handInp} lx="left"/>
                <br/>
                <div>+</div>
                <br/>
                <input type="text" className="form-control" value={m} onChange={this.handInp} lx="right"/>
            </div>
            <div className="panel-body">
                结果为：{n + m}
            </div>
        </div>;
    }
}

ReactDOM.render(<Sum/>, window.root);


