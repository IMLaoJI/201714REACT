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
    }

    handInp = ev => {
        let total = this.inpL.value + this.inpR.value;

        // this.refs：存储的是所有REF对应的元素
        //{ result:元素，.... }
        this.refs.result.innerHTML = total;
    };

    render() {
        return <div className="panel panel-default">
            <div className="panel-heading">
                <h2 className="panel-title">任意两个数字求和</h2>
                <br/>
                <input type="text" className="form-control"
                       defaultValue={0}
                       onChange={this.handInp}
                       ref={x => this.inpL = x}/>
                <br/>
                <div>+</div>
                <br/>
                <input type="text" className="form-control"
                       defaultValue={0}
                       onChange={this.handInp}
                       ref={x => this.inpR = x}/>
            </div>
            <div className="panel-body">
                结果为：<span ref="result">{0}</span>
            </div>
        </div>;
    }
}

ReactDOM.render(<Sum/>, window.root);


