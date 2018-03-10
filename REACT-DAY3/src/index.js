import React from 'react';
import ReactDOM from 'react-dom';

/*
 * REACT组件的生命周期函数（钩子函数）
 *   static defaultProps={}  处理组件传递的属性(传值/默认值/设置属性值规则...)
 *
 *   //=>第一次调用组件
 *   constructor
 *   componentWillMount 渲染之前
 *   render 渲染
 *   componentDidMount 渲染之后
 *
 *   //=>状态更新,组件重新渲染
 *   shouldComponentUpdate 设定是否允许组件重新的渲染（当组件的属性或者状态发生修改，就会触发这个钩子函数执行）  nextProps,nextState=>boolen
 *   componentWillUpdate
 *   render
 *   componentDidUpdate
 *
 *   //=>组件卸载
 *   componentWillUnmount 卸载之前
 *
 *   //=>组件的属性发生改变(组件内部无法修改自己的属性信息,只有重新调取组件的时候传递不同的信息过来)
 *   componentWillReceiveProps
 */
class Temp extends React.Component {
    constructor() {
        super();
        this.state = {msg: 'hello world!'};
        console.log(`1=>执行构造函数`);
    }

    componentWillMount() {
        console.log(`2=>第一次渲染之前`);
    }

    componentDidMount() {
        console.log(`4=>第一次渲染之后`);

        /*setTimeout(() => {
            //=>2000MS后打算重新渲染组件(修改状态)
            this.setState({
                msg: 'hello world!'
            });
        }, 2000);*/
    }

    /*
     * shouldComponentUpdate/componentWillUpdate：
     * 通过THIS.STATE获取的状态值还是原来的状态值呢，此时状态值还没有修改过来；但是真实项目中我们在这两个钩子函数中，更想获取的是即将修改的状态值，而不是原来的状态值，这种情况下，REACT提供了钩子函数的参数，这些参数就是最新的值
     */
    shouldComponentUpdate(nextProps, nextState) {
        console.log(`5=>是否允许更新，返回TRUE是允许，反之不允许`, nextProps, nextState);//=>nextXxx就是最新的值

        /*if (this.state.msg === nextState.msg) {
            //=>重新设置的属性值和之前的是一样的，此时就不需要重新的进行渲染
            return false;
        }*/
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log(`6=>更新之前`, nextState);
    }

    componentDidUpdate() {
        console.log(`7=>更新之后`, this.state.msg);
    }

    //=>属性改变
    componentWillReceiveProps(nextProps) {
        //=>属性更改的时候，它优先于shouldComponentUpdate执行（它控制的是属性已经修改了，而SHOULD控制的是允许组件重新渲染）
        //=>此时获取的PROPS的值还是原始值
        console.log(`属性更改了`, nextProps);
    }

    render() {
        console.log(`3=>渲染组件`, this.props);
        return <h2>
            {this.state.msg}
        </h2>;
    }
}

class Box extends React.Component {
    constructor() {
        super();
        this.state = {n: 10};
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                n: ++this.state.n
            });
        }, 2000);
    }

    render() {
        return <div>
            <h2>请说：</h2>
            <Temp n={this.state.n}/>
            {/*父组件把自己的状态信息当做属性值传递给子组件*/}
        </div>;
    }
}


ReactDOM.render(<div>
    <Box/>
</div>, window.root);