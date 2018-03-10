import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class Dialog extends React.Component {
    constructor(props) {
        super(props);//=>React.Component.call(this,props) 基于CALL继承把传递进来的属性PROPS挂载到实例THIS上 =>THIS.PROPS
    }

    render() {
        //=>即使不经历CONSTRUCTOR中的SUPPER处理,到RENDER这个阶段,REACT也把传递的PROPS挂载到实例上了

        //=>RETURN的是经过REACT.CREATE-ELEMENT处理完成的对象
        //首先当我们基于WEBPACK预览的时候,就已经把JS中所有的JSX元素变为CREATE-ELEMENT模式；当我们调取这个组件的时候，执行CREATE-ELEMENT，把创建完成的对象返回；
        return <div className="panel panel-default">
            <header className="panel-heading">
                <h2 className="panel-title">

                </h2>
            </header>
            <main className="panel-body">

            </main>
        </div>;
    }
}


ReactDOM.render(<div>
    {/*
      * 每创建一个组件,相当于创建了一个类，调取组件的时候相当于创建当前类的一个实例
      */}
    <Dialog title="警告" content="前方有一大波僵尸来袭"/>
    <Dialog title="提示" content="快使用超级大炮来轰炸">
        <footer className="panel-footer">

        </footer>
    </Dialog>
    {/*
      * 经过BABEL处理
      * =>如果有子孙元素,子孙元素也变为了CREATE-ELEMENT模式
      *   React.createElement(Dialog,{title:...,content:...},React.createElement(...),...)
      *
      * 执行CREATE-ELEMENT,把它变为对应的对象
      *   {
      *     type:Dialog,
      *     ref:null,
      *     key:null,
      *     props:{
      *        title:...,
      *        content:...,
      *        children:{panel-footer...}
      *     }
      *   }
      *
      * 基于REACT-DOM中的RENDER把对象变为真实的DOM
      *   如果TYPE是个字符串，我们只需要创建一个新的标签就可以，但是如果TYPE是个类（调取的是组件），那么处理机制和字符串不一样了
      *   1、执行类创建一个实例，并且把类原型上的RENDER方法都执行了
      *   2、把当前对象中的PROPS作为参数传递给当前这个类 new Dialog({title:...})
      *   3、继续递归执行（和上面一样，处理返回的对象）
      *   ...
      */}
</div>, window.root);