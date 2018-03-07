class React {
    static createElement(type, options, ...arg) {
        //=>处理初始值
        //=>ARG存储的是剩下的参数集合：即使没有其余的参数了，ARG也是一个空数组
        //=>OPTIONS肯定是一个对象（不管传或者没传）
        options = options || {};

        //=>HANDL
        let obj = {
            type,//->type:type
            key: null,
            ref: null,
            props: {}
        };

        //=>KEY && REF
        ['key', 'ref'].forEach(item => {
            if (item in options) {
                obj[item] = options[item];
                delete options[item];
            }
        });

        //=>PROPS
        obj.props = {...options};
        let len = arg.length;
        switch (len) {
            case 0:
                //=>没有子节点不需要设置CHILDREN
                break;
            case 1:
                //=>只有一个子节点,CHILDERN不是一个数组
                obj.props.children = arg[0];
                break;
            default:
                //=>拥有多个子节点（把深度克隆后的数组赋值给他）
                obj.props.children = JSON.parse(JSON.stringify(arg));
        }

        return obj;
    }
}

class ReactDOM {
    static handChild(children, newEle) {
        if (typeof children === 'object') {
            //->当前唯一的子节点是一个新元素（需要重新调用RENDER创建一个新的元素，把元素放在newEle中）
            ReactDOM.render(children, newEle);
        } else {
            //->当前唯一的子节点是一个文本
            newEle.appendChild(document.createTextNode(children));
        }
    }

    static render(objJSX, container, callback) {
        let {type, props} = objJSX,
            newEle = document.createElement(type);
        //=>给先创建的元素设置各种属性
        for (let key in props) {
            if (!props.hasOwnProperty(key)) continue;

            //=>CHILDREN
            if (key === 'children') {
                let children = props['children'];
                if (children instanceof Array) {
                    //=>有多个子节点(遍历一个个来)
                    children.forEach(itemChild => {
                        ReactDOM.handChild(itemChild, newEle);
                    });
                    continue;
                }
                //=>只有一个子节点
                ReactDOM.handChild(children, newEle);
                continue;
            }

            //=>CLASS
            if (key === 'className') {
                newEle.setAttribute('class', props['className']);
                continue;
            }

            //=>STYLE 把PROPS中STYLE的值依次遍历，并且设置给元素
            if (key === 'style') {
                for (let key in props['style']) {
                    if (props['style'].hasOwnProperty(key)) {
                        newEle['style'][key] = props['style'][key];
                    }
                }
                continue;
            }

            //...

            //->一般情况下把PROPS中的属性直接赋值给元素即可（例如：props={id:'box'}  => newEle.setAttribute('id':'box') ...）
            newEle.setAttribute(key, props[key]);
        }
        container.appendChild(newEle);
        callback && callback();
    }
}