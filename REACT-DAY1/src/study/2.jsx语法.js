import React from "react"
import ReactDom,{render} from "react-dom"

let rDom=(
    <div className="box">
        今天是
        <h1 id="date">2018-3-6</h1>
    </div>
);
console.log(rDom);
render(rDom,window.root);
/*
* 1.将JSX语法通过babel 调用React.createElement编译成 react元素
*var rDom = React.createElement(
    "div",
    { className: "box" },
    "今天是",
    React.createElement(
        "h1",
        { id: "date" },
        "2018-3-6"
    )
);
* 2.将react元素变成 一个对象 (虚拟DOM)
*{
  type:"div",
  props:{
     className:"box",
     children:["今天是",{
        type:"h1",
        props:{
             id:"date",
             children:"2018-3-6"
             }
       }]
     }
 }
* 3.render方法将对象(虚拟DOM)变成真实元素渲染到页面上
* */