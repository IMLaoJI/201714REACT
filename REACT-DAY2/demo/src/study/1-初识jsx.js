import React from 'react';
import ReactDOM from 'react-dom';

/*
 * REACT独有的语法：JSX （javascript xml[html]）
 *   1、不能直接的被浏览器识别，需要经过编译(webpack babel babel-preset-react)
 *   2、每一次RENDER只能渲染一个JSX元素或者一个组件（如果有多个需要在最外层包裹一个容器）
 *   3、给每一个元素设置的属性中 class 需要使用 className 代替
 *   4、style的属性值不能是字符串，需要是一个对象
 *   5、JSX语法中的大括号是一个“语法糖”：大括号中包含的是JS代码，但是代码必须有返回值，可以是一个JS数据值，也可以是一个新的JSX元素
 *   6、所有经过循环创建的JSX元素都需要设置一个KEY属性，属性值是唯一的
 *   ...
 */
let obj = {color: 'red'};
let ary=[
    {id:1,title:'38女王节，珠峰送福利'},
    {id:2,title:'热烈庆祝郭明媚同学非常幸运的错过了所有奖项'}
];

ReactDOM.render(<div id="box"
                     className="box"
                     style={obj}>
    <h2>珠峰培训最新消息</h2>
    <ul>
        {
            ary.map((item,index)=>{
                return <li key={index}>{item.title}</li>;
            })
        }
    </ul>
</div>, window.root);