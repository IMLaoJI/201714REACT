import React, {Component} from 'react';
import ReactDOM, {render} from 'react-dom';

/*--我们需要使用的是它的CSS文件--*/
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class Dialog extends Component {
    constructor(props, context, updater) {
        super(props);//=>类似于CALL继承:子类实例继承父类实例上的私有属性
        /*
         * 默认情况下，在CONSTRUCTOR阶段，组件的属性还没有传递进来，此时的this.props=undefined
         *
         * 但是我们可以几乎SUPPER，快速设置当前实例的PROPS，这样在CONSTRUCTOR这个阶段就可以获取到属性信息了
         */
        console.log(this.props);
    }

    render() {
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
    <Dialog title="提示" content="天干物燥，小心火烛"/>

    <Dialog title="警告" content="防火防盗防闺蜜"/>
</div>, window.root);