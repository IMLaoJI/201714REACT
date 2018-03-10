import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';

class Dialog extends React.Component {
    /*REACT独有的语法:ES6中的类只允许在括号中定义方法*/
    static defaultProps = {
        title: '提示',
        content: '...'
    };
    static propTypes = {
        title: PropTypes.string.isRequired,
        content: PropTypes.string
    };

    constructor(props) {
        super(props);
    }

    render() {
        /*
         * PROPS是调取的时候传递进来的，REACT不允许在组件内部修改=>“只读”
         *   1、我们可以设置属性的默认值
         *   2、给属性设置传递的规则（传递值的类型/是否必传） =>prop-types
         */
        let {title, content, children} = this.props;

        return <div className="panel panel-default">
            <header className="panel-heading">
                <h2 className="panel-title">
                    {title}
                </h2>
            </header>
            <main className="panel-body">
                {content}
            </main>
            {children}
        </div>;
    }
}

ReactDOM.render(<div>
    <Dialog title="警告" content="前方有一大波僵尸来袭"/>
    <Dialog title="提示" content="快使用超级大炮来轰炸">
        <footer className="panel-footer">
            <a href="#" className="btn btn-success">确定</a>
        </footer>
    </Dialog>
</div>, window.root);