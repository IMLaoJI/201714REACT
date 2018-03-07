import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class Temp extends React.Component {
    constructor(props) {
        super(props);
    }

    handInp = ev => {
        this.AA.innerHTML = this.BB.value;
    };

    render() {
        return <div className="panel panel-default">
            <div className="panel-heading">
                <input type="text" className="form-control"
                       defaultValue="珠峰培训"
                       onChange={this.handInp}
                       ref={x => {
                           this.BB = x
                       }}/>
            </div>
            <div className="panel-body">
                {/*这种模式更简单：把元素直接的挂载到当前实例上，以后使用的时候直接的通过实例获取即可，没必要在通过REFS了*/}
                <h2 ref={x => this.AA = x}>珠峰培训</h2>
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