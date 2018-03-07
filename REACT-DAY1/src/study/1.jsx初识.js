//入口js文件
//可以导入css/js 文件
//import "./css/style1.css"
//import 导入必须写在最顶部
import React from "react"
import ReactDom,{render} from "react-dom"
// ReactDom 中的render方法可以单独导出 需要解构 使用的时候可以直接使用render
// react分为两部分 react和 react-dom

//<h1>珠峰培训</h1>  JSX语法
/*
* JSX: javascript+xml html是xml的一种  所以可以看成是 javascript+html的语法
* 跟html不完全一样 一些区别  例如 html:  <h1 class='title'>珠峰培训</h1>
* 在 jsx <h1 className='title'>珠峰培训</h1>
*1. 使用{} 绑定变量
*2. 一般使用小括号包起来
*3. 必须有且只有一个根元素包起来
*4. 注释问题
*
*
* */

//将react-dom元素渲染到页面上
let str="珠峰培训";
let rDom= (//一般使用小括号包起来 必须有且只有一个根元素包起来
    <div className="box">
        {/*注意 :注释是这样的*/}
        <h1 id="title">珠峰培训</h1>
        <h2>2018-3-6</h2>
    </div>
    );
console.log(rDom);
render(rDom,window.root);



