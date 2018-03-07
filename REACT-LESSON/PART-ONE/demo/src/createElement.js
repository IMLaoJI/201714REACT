class React {
    constructor() {
        this.type = null;
        this.ref = null;
        this.key = null;
        this.props = null;
    }

    static createElement(type, props = {}, ...children) {
        let react = new React();

        //=>init
        react.type = type;

        //=>KEY
        if ('key' in props) {
            react.key = props.key;
            delete props.key;
        }

        //=>PROPS && CHILDREN
        react.props = {...props};

        const len = children.length;
        switch (len) {
            case 0:
                break;
            case 1:
                react.props.children = children[0];
                break;
            default:
                react.props.children = children;
        }

        return react;
    }
}

class ReactDOM {
    static render(obj, container) {
        let {type, props} = obj,
            curEle = document.createElement(type);
        for (let key in props) {
            if (!props.hasOwnProperty(key)) continue;
            let value = props[key];
            //->CHILDERN
            if (key === 'children') {
                //=>VALUE IS ARRAY
                if (value instanceof Array) {
                    value.forEach(item => {
                        if (typeof item === 'object') {
                            ReactDOM.render(item, curEle);
                            return;
                        }
                        curEle.appendChild(document.createTextNode(item));
                    });
                    continue;
                }
                curEle.appendChild(document.createTextNode(value));
                continue;
            }
            //=>CLASS
            if (key === 'className') {
                curEle.setAttribute('class', value);
                continue;
            }
            //->STYLE
            if (key === 'style') {
                for (let attr in value) {
                    if (value.hasOwnProperty(attr)) {
                        curEle.style[attr] = value[attr];
                    }
                }
                continue;
            }
            //->OTHER
            curEle.setAttribute(key, value);
        }
        container.appendChild(curEle);
    }
}

//=>把JSX变为虚拟的DOM元素对象
let jsxObj = React.createElement(
    'div',
    {
        className: 'container',
        style: {fontSize: '20px', color: 'red'},
        id: 'container'
    },
    React.createElement(
        'h2',
        {className: 'title'},
        '\u73E0\u5CF0\u57F9\u8BAD\u6700\u65B0\u8BFE\u7A0B\u4F53\u7CFB'
    ),
    React.createElement(
        'ul',
        {className: 'newsItem'},
        React.createElement(
            'li',
            {key: 'A1'},
            'REACT\u8BFE\u7A0B'
        ),
        React.createElement(
            'li',
            {key: 'A2'},
            'VUE\u8BFE\u7A0B'
        ),
        React.createElement('li', {key: 'A3'})
    )
);