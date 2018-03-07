import React, {Component} from 'react';
import ReactDOM, {render} from 'react-dom';

/*--我们需要使用的是它的CSS文件--*/
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

/*--导入PROP-TYPES--*/
import PropTypes from 'prop-types';

class Dialog extends Component {
    static defaultProps = {
        content: "周老师很帅，哈哈哈~~~"
    };
    static propTypes = {
        title: PropTypes.string.isRequired,
        content: PropTypes.string
    };

    constructor(props) {
        super(props);
    }

    render() {
        let {title, content, children} = this.props;

        return <div className="panel panel-default" style={{width: '500px', margin: '20px auto'}}>
            <header className="panel-heading">
                <h2 className="panel-title">{title}</h2>
            </header>
            <main className="panel-body">
                {content}
            </main>
            {children}
        </div>;
    }
}

render(<div>
    <Dialog title="提示" content="天干物燥，小心火烛"/>

    {/*
      * 上面单闭合标签，传给DIALOG的PROPS中只有自己设置的属性（title/content...）
      *
      * 双闭合标签调用，除了自己设置的属性之外，闭合标签中编写的内容都是当前组件的子节点，会放到CHILDREN中传递给组件 => 组件的PROPS中有CHILDREN这个属性，这个属性值就是子节点
      */}
    <Dialog title="警告">
        <footer className="panel-footer">
            <a href="javascript:;" className="btn btn-default">确定</a>
        </footer>
    </Dialog>
</div>, window.root);

