import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

/*
 * state：组件内部的状态管理属性，通过STATE可以管理一些数据信息，实现双向数据绑定
 *
 *  目前前端框架重大思想改革：数据和视图双向控制
 *    [优势]
 *    1、操作起来比较方便：不用向传统的JQ开发一样，需要自己获取DOM并且操作DOM（框架把操作DOM封装到自己的底层完成，我们只需要操作数据即可，由数据驱动视图的更新）
 *
 *    2、我们自己频繁操作DOM，会导致严重的性能消耗（重排/回流 和 重绘）；而框架中都有一套强大的DOM DIIF算法，在需要更新DOM的情况下，只把修改的部分进行更新，尽最大可能减少性能的消耗
 *
 *    3、框架对于数据和视图代码分离，以及组件化的封装等等都有自己非常完善的机制，有利于提高项目的开发效率和方便维护
 *
 *    ...
 */

class Temp extends React.Component {
    constructor(props) {
        super(props);
        //=>this.state的默认值是NULL，为了保证后期可以调取其中的某个属性，我们开始的时候会给STATE设置属性值为空对象（或者给具体的属性名设置一些初始值）
        this.state = {
            name: '珠峰培训'
        };
    }

    /*componentDidMount() {
        //=>REACT组件的钩子函数（生命周期函数）：组件第一次渲染完成后执行
        setTimeout(() => {
            //=>此处修改STATE的值
            // this.state = {name: '周啸天'}; 这样虽然可以把STATE的值进行修改，但是不能重新触发页面的渲染，我们需要依托于 setState
            this.setState({
                name: '周啸天'
            });
            //1、修改STATE的值
            //2、通知组件中的视图重新进行渲染 =>“重新执行RENDER”（渲染的时候是需要和之前的视图进行对比的，如果有信息的更新，在把需要更新的部分渲染，没有任何数据更改，为了保证性能，是不进行DOM重新渲染的）
        }, 1000);
    }*/

    /*handInp(ev) {
        console.log(this, ev.target);
    }*/

    /*在REACT组件上编写的方法，我们一般都基于箭头函数处理，目的是为了保证函数中的THIS始终是当前类的实例*/
    handInp = ev => {
        this.setState({
            name: ev.target.value
        });
    };

    render() {
        let {name} = this.state;

        return <div className="panel panel-default">
            <div className="panel-heading">
                <input type="text" className="form-control"
                       value={name}
                       onChange={this.handInp}/>
                {/*
                  * onChange={this.handInp}
                  *   => 方法触发执行的时候,方法中的THIS是UNDEFINED
                  *
                  * onChange={this.handInp.bind(this)}
                  *   => 保证方法执行，THIS是实例，在方法中可以通过EV事件对象获取事件源，从而获取到操作的元素对象
                  *
                  * onChange={(ev) => {
                           console.log(this, ev);
                    }}
                    使用箭头函数也可以
                  */}
            </div>
            <div className="panel-body">
                <h2>{name}</h2>
            </div>
        </div>;
    }
}

ReactDOM.render(<div>
    <Temp/>
</div>, window.root);

/*
 * 我们把视图中的数据是通过STATE状态来管控的组件，称之为受控组件
 *   =>MVVM 双向数据交互的思想
 */