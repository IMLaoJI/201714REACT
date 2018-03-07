import React,{Component} from "react"
import ReactDom,{render} from "react-dom"
/*
* 类组件
* 1. 继承 Component类
* 2. 这个类组件 必须有一个render函数 必须return jsx语法
* 3. 类组件中有this
* 4. this中自带一个属性props 里面存放着所有的属性

* */
class Hello extends Component{
    render(){
        //组件在使用的时候默认调用的是render,组件代表的结构就是return的内容
        //console.log(this.props);
        let {name,date}=this.props;
        return (
            <div>
                <h2>{name}</h2>
                <h2>{date}</h2>
            </div>
        )
    }
}
let obj1={name:"珠峰",date:"2018-3-6"};
let obj2={name:"珠峰培训",date:"2017-10-6"};
render((
    <div>
        <Hello name={obj1.name} date={obj1.date}/>
        <Hello {...obj2}/>
    </div>),window.root);