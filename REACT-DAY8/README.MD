## 真实项目中应用REDUX/REACT-REDUX的开发流程
> REDUX是用来进行状态统一管理的组件
>
> REACT-REDUX是把REDUX进一步封装，使其在REACT项目中可以快速应用
>
> 真实项目中我们如果是基于REACT框架开发，都会把REDUX/REACT-REDUX结合在一起来使用

但是值得注意的是，很多初学者体会到REDUX的好处后，经常出现很多很多内容都通过REDUX存储管理，不建议大家这样做，使用REDUX管理，逻辑复杂度提升很多，过多使用不方便开发和维护；一般我们只把平行组件中需要用到的一些公共信息放到REDUX中进行管理，例如：
- 登录/注册成功后，我们可以把个人的基本信息或者权限信息（很少的数据）存放在REDUX中进行管理
- 在电商类产品，购物信息（加入到购物车中的内容），我们一般也放在REDUX中管理（个人建议：存放在REDUX容器中的购物信息，基本上是商品的一个ID或者其它标识以及数量等少量信息即可，没必要把所有商品的详细信息存储进来）
- ...

### 1、安装组件
> $ yarn add redux react-redux 或者 $ npm i redux react-redux --save-dev

### 2、搭建项目结构目录
我们以一个投票的小案例来分析

我们是基于create-react-app构建的整个项目，其它的文件目录这里就不编写了，只把SRC中需要的内容列举出来

|-src
  |-component  //=>存放项目中的一个个组件
    |-VoteButton
    |-VoteResult
  |-store     //=>存储的是REDUX全套管理内容
    |-action
      |-index.js
      |-vote.js
    |-reducer
      |-index.js
      |-vote.js
    |-action-types.js
    |-index.js
  |-index.js  //=>项目的主入口,在这里实现JSX元素的渲染

真实项目中为了方便管理，我们把每一个功能版块都建立对应的ACTION和REDUCER，最后在INDEX中把多个ACTION和REDUCER进行合并处理


### 3、把STORE中需要编写的逻辑进行处理

#### 1）定义所有的行为标识
action-types.js
```javascript
/*
 * 宏观管理当前项目中需要用到的所有行为标识(REDUX中需要使用)
 */
export const VOTE_A = 'VOTE_A';
export const VOTE_B = 'VOTE_B';
```

#### 2）处理REDUCER
> 所有容器中的状态修改，都要经过REDUCER统一管理和处理

reducer/vote.js
```javascript
import * as Types from '../action-types';

function vote(state = {
    A: 0,
    B: 0
}, action) {
    state = {...state};
    switch (action.type) {
        case Types.VOTE_A:
            state.A = state.A + 1;
            break;
        case Types.VOTE_B:
            state.B = state.B + 1;
            break;
    }
    return state;
}

export default vote;
```

reducer/index.js
```javascript
/*==合并所有编写的REDUCER==*/
import {combineReducers} from 'redux';
import vote from './vote';

const reducer = combineReducers({
    vote: vote
});
export default reducer;
```

#### 3）编写STORE中的INDEX创建容器
store/index.js
```javascript
/*
 * 创建容器并且将其导出
 *   1、依赖REDUCER
 *   2、在这里配置各种中间件
 *   ...
 */
import {createStore} from 'redux';
import reducer from './reducers/index';

const store = createStore(reducer);
export default store;
```

#### 4）ACTION-CREATEOR
> 把后期组件中需要进行DISPATCH派发的任务都封装为具体的方法，返回派发是需要的ACTION对象即可

action/vote.js
```javascript
import * as Types from '../action-types';

const vote = {
    supportA() {
        return {
            type: Types.VOTE_A
        }
    },
    supportB() {
        return {
            type: Types.VOTE_B
        }
    }
};
export default vote;
```

action/index.js
```javascript
import vote from './vote';

const action = {
    vote: vote
};
export default action;
```

### 4、编写组件，基于REACT-REDUX完成状态的使用和修改等

index.js
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import VoteResult from "./component/VoteResult";
import VoteButton from "./component/VoteButton";

import {Provider} from 'react-redux';
import store from './store/index';

//=>重要事情：
//1、导入STORE(创建好的容器)
//2、利用REACT-REDUX中的Provider组件（把组件作为根组件），把创建的容器通过属性的方式传递给这个根组件（目的：基于REACT-REDUX的处理，可以把STORE中的状态信息以及DISPATCH传递给当前项目中的每一个子组件 [前提是子组件需要经过高阶处理]）
ReactDOM.render(<Provider store={store}>
    <div className='panel panel-default'
         style={{
             width: '50%',
             margin: '20px auto'
         }}>
        <VoteResult/>
        <VoteButton/>
    </div>
</Provider>, window.root);
```

component/VoteButton.js
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import action from '../store/action/index';

class VoteButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {supportA, supportB} = this.props;

        return <main className='panel-body'>
            <button type="button"
                    className="btn btn-danger"
                    onClick={supportA}>
                刘治兵
            </button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <button type="button"
                    className="btn btn-success"
                    onClick={supportB}>
                王力民
            </button>
        </main>;
    }
}

/*const mapStateToProps = state => {
    //=>state:存储的是STORE中的状态
    //{vote:{A:,B:}}
    return {
        ...state.vote
    }//=>返回的是啥,就相当于把这些属性挂载到组件的PROPS上了
};*/

/*const mapDispatchToProps = dispatch => {
    const {supportA, supportB} = action.vote;
    return {
        SA() {
            dispatch(supportA());
        },
        SB() {
            dispatch(supportB());
        }
    }//=>把返回对象中的每一个属性方法挂载到PROPS上
};*/

export default connect(state => ({...state.vote}), action.vote)(VoteButton);

/*
 * connect：REACT-REDUX中提供的高阶组件，目的是为了把STORE容器中的STATE/ACTION分别作为组件的属性传递给组件
 *    第二个括号中的参数是我们需要处理的组件
 *    第一个括号中的参数：
 *       mapStateToProps：把STORE容器中的STATE作为组件的属性
 *       mapDispatchToProps：把STORE容器中的派发操作作为组件的属性
 */
```

component/VoteResult.js
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import action from '../store/action/index';

class VoteResult extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {A, B} = this.props,
            val = ((A / (A + B)) * 100).toFixed(2) + '%';
        (A + B) === 0 ? val = '50%' : null;

        return <header className='panel-heading'>
            <h3 className='panel-title'>
                骑士 VS 老鹰 谁的能力更强一些！
            </h3>
            <div className="progress"
                 style={{
                     margin: '20px 0',
                     background: '#5CB85C'
                 }}>
                <div className="progress-bar"
                     role="progressbar"
                     aria-valuenow="60"
                     aria-valuemin="0"
                     aria-valuemax="100"
                     style={{
                         width: val,
                         background: '#D9534F'
                     }}>
                    {val}
                </div>
            </div>
        </header>;
    }
}

export default connect(state => ({...state.vote}), action.vote)(VoteResult);
```