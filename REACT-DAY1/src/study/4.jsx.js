import React from "react"
import ReactDom from "react-dom"
let arr=[{name:"珠峰1",age:"10"},{name:"珠峰2",age:"100"},{name:"珠峰1",age:"1"},{name:"珠峰2",age:"9"}];

// let ele=(
//     <ul>
//         {/*放一个数组 数组的每一项都是一个JSX语法中的标签 就会循环渲染数组*/}
//         {/*每一个标签必须有一个key属性*/}
//         {arr.map((item,index)=>(
//             <li key={index}>
//                 <h2>{item.name}</h2>
//                 <h2>{item.age}</h2>
//             </li>)
//         )}
//     </ul>
// );

// let ele=(
//     <ul>
//         {/*只留下age>=10的*/}
//         {arr.filter(item=>item.age>=10).map((item,index)=>(
//             <li key={index}>
//                 <h2>{item.name}</h2>
//                 <h2>{item.age}</h2>
//             </li>
//         ))}
//     </ul>
// );
let ele=(
    <ul>
        {arr.map((item,index)=>(
            item.age<10?null:<li key={index}>
                <h2>{item.name}</h2>
                <h2>{item.age}</h2>
            </li>
        ))}
    </ul>
);
function getDom() {
    //如果返回的是多个标签必须使用一个标签包起来
    //return 如果换行必须使用()包起来
    return (
        <h2>哈哈</h2>
    )
}

ReactDom.render(ele,window.root);