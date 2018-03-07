import React from "react"
import ReactDom,{render} from "react-dom"
function Clock() {
    //return <h1>{new Date().toLocaleDateString()}</h1>
    return <h1>{new Date().toLocaleString()}</h1>
    //return <h1>{new Date().toLocaleTimeString()}</h1>
}
//如果想重新渲染页面 必须再重新执行render方法

setInterval(()=>{
    render(<div><Clock/></div>,window.root);
},1000);