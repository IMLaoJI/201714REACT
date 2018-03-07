// function ReactDom(type,props) {
//     this.type=type;
//     this.props=props;
// }
function createElement(type,props,...children) {
    //将传进来的一堆值 变成一个对象
    //type 类型
    //props 一个对象,里面是属性
    //children:[] 可能是一项 也可能是多项
    //处理children 如果只有一项并且不是一个对象 说明没有子元素了 直接等于一个字符串即可
    if(children.length===1&&children[0].length)children=children[0];
    //return new ReactDom(type,{...props,children})
    return {type,props:{...props,children}}
}

function render(ele,container) {
    //将 这个ele对象变成真实的dom
    //将 ele中的type和props解构出来
    let {type,props}=ele;
    //根据type创建一个dom元素
    let element= document.createElement(type);
    //循环遍历对象props 根据属性名做对应的处理
    for(let key in props){
        if (key==="children"){
            //children 可能是数组或者字符串
            if(typeof props[key]==="object"){
                //遍历数组,根据数据每一项的类型 做相应的处理
                props[key].forEach((item)=>{
                    if(typeof item==="object"){
                        //一个对象 再执行一次render方法
                        //render(当前item对象,容器element)
                        render(item,element)
                    }else {
                        //是一个字符串 说明内容就是一个纯文本
                        element.appendChild(document.createTextNode(item))
                    }
                })
            }else {
                //字符串 说明内容就是一个纯文本
                //document.createTextNode() 创建一个文本节点
                element.appendChild(document.createTextNode(props[key]))
            }
        }else {
            element[key]=props[key]
        }
    }
    container.appendChild(element);
}
var rDom = createElement(
    "div",
    { className: "box" },
    createElement(
        "h1",
        { id: "date" },
        "2018-3-6",
    )
);
/*
{
   type:"div"
   props:{
      className: "box",
      children:["今天是",{type:"h1",props:{id: "date",children:"2018-3-6"}}]
   }
}
 */

render(rDom,window.root);