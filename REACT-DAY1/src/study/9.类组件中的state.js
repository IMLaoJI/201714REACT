import React,{Component} from "react"
import ReactDom,{render} from "react-dom"
/*
* 类组件
* 1. 有this
* 2. this.props  属性
* 3. this.state  状态  私有局部状态 sate变化可以自动刷新视图,想要改变状态必须使用 this.setState({}) 换句话说只要执行this.setState({}) 就会更新视图
* 4. 自己的生命周期(钩子函数)
* */
class Clock extends Component{
    constructor(){
        super();//继承类必须在constructor中加super()
        //初始化的时候给state赋值
        this.state={date:new Date().toLocaleString()}
    }
    render(){
        //给react元素(jsx中的标签叫做react元素)绑定的事件中的this是undefined
        return <h1 onClick={this.destroy}>{this.state.date}</h1>
    }
    componentDidMount(){
        //组件渲染完成,渲染完成会自动触发这个钩子函数
        //在这里组件的状态已经完成,可以再这里加一个定时器修改其状态
        this.timer=setInterval(()=>{
            //这里必须是箭头函数 ,必须使用this.setState 修改才会刷新视图
            this.setState({date:new Date().toLocaleString()})
        },1000)
    }
    componentWillUnmount(){
        //组件将要卸载 当组件移除时触发的钩子函数
        //清除定时器
        //一般在这里主要是清除定时器和移除绑定事件
        clearInterval(this.timer);
    }
    destroy=()=>{
        //删除组件 在节点中删除组件
        ReactDom.unmountComponentAtNode(window.root)
    }
}

render(<div><Clock/></div>,window.root);


//constructor->组件的render->componentDidMount