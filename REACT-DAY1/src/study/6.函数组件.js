import React from "react"
import ReactDom,{render} from "react-dom"
/*
* 组件特点 :可复用,可组合,可维护
* react声明组件两种方式
* 1) 函数声明
* 2) 类声明
* 1. 组件的首字母必须是大写 react中根据首字母是大小写来判断是组件还是react元素(普通标签)
* 2. 组件和JSX语法是可以混用的 一个函数组件既可以作为组件使用(函数名当做标签)也可以作为一个普通函数  {函数()}
* 3. 通过参数传递props属性
* 4. 函数组件中没有this  没有生命周期
* */
function GetDom(props) {
    //其实就是使用函数名作为组件代替 return后面的html结构
    //props:是一个对象 使用组的时候给组件加的属性
    //console.log(props);
    console.log(this);//undecided
    return (
        <div>
            <h1>{props.name}</h1>
            <h2>{props.date}</h2>
        </div>
    )
}
let obj1={name:"珠峰",date:"2018-3-6"};
let obj2={name:"珠峰培训",date:"2017-10-6"};
render(<div>
    {/*在组件上加的属性实际给的是 组件中的最外层元素 */}
    <GetDom name={obj1.name} date={obj1.date}/>
    {/*将对象中的每一个键值对解构出来传递给组件*/}
    <GetDom {...obj2}/>
    {/*{GetDom()}*/}
    </div>,window.root);