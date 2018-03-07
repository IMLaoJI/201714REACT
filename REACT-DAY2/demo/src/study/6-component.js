import React, {Component} from 'react';
import ReactDOM, {render} from 'react-dom';

/*--我们需要使用的是它的CSS文件--*/
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

/*--导入PROP-TYPES--*/
import PropTypes from 'prop-types';

class Dialog extends Component {
    /*组件属性的规则设置*/
    static defaultProps = {
        content: "周老师很帅，哈哈哈~~~"
    };
    static propTypes = {
        title: PropTypes.string.isRequired,//=>isRequired:必须传递
        content: PropTypes.string
    };

    constructor(props) {
        super(props);
        /*
         * 组件中的属性是只读的=>“只能获取不能在组件中进行值的修改”，属性的值都是在调取组件的时候传递进来的
         *
         * 虽然不能修改属性值，但是可以：
         *   1、设置属性的默认值（不传递的时候，属性赋值的是默认值）
         *   2、设置传值规则（例如：设置哪些属性必须想传递值，并且传递值的是什么的数据类型的） 依赖第三方模块：prop-types
         */
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

    <Dialog title="警告"/>
</div>, window.root);