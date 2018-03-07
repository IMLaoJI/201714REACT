import React from "react"
import ReactDom,{render} from "react-dom"
/*
* JSX语法中的属性问题
* 1. 普通属性 和html一样的
* 2. 特殊属性 class(className) for(htmlFor)
* 3. style 必须是一个对象
* 4. 识别html  dangerouslySetInnerHTML 危险插入HTML 必须是一个对象{__html:...} 很少使用
* */
let class1="title";
let style1={color:"red"};
let str="<h3>我是h3</h3>";
render((
    <div>
        <h1 id="title" className={class1}></h1>
        {/*<h1 id="title" className="title"></h1>*/}
        <label htmlFor="title"></label>
        <h2 style={style1}>我是红色的</h2>
        {/*注意外层的花括号是JSX语法必须有的不是对象的花括号*/}
        <h2 style={{color:"red"}}>我是红色的</h2>
        <div dangerouslySetInnerHTML={{__html:str}}></div>
    </div>),window.root);