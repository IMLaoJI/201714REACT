import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class Temp extends React.Component {
    constructor(props) {
        super(props);
    }

    /*handInp = ev => {
        //=>文本框内容改变，让H2中的内容也跟着改变
        document.querySelector('h2').innerHTML = ev.target.value;
    };*/

    handInp = ev => {
        /*
         * REFS：把当前组件视图中所有的REF及对应的DOM元素存储起来（方便我们直接的操作DOM）
         */
        let {AA, BB} = this.refs;
        AA.innerHTML = BB.value;
    };

    render() {
        return <div className="panel panel-default">
            <div className="panel-heading">
                <input type="text" className="form-control"
                       defaultValue="珠峰培训"
                       onChange={this.handInp}
                       ref="BB"/>
            </div>
            <div className="panel-body">
                <h2 ref="AA">珠峰培训</h2>
            </div>
        </div>;
    }
}

ReactDOM.render(<div>
    <Temp/>
</div>, window.root);

/*
 * 非受控组件：不受状态管控，有DOM直接进行操作的
 */