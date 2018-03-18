import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import action from '../../store/action/index';

class CustomCreate extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {data, create, history} = this.props;

        return <div>
            用户编号：<input type="text"
                        ref={x => this.inpID = x}/> <br/><br/>
            用户姓名：<input type="text"
                        ref={x => this.inpNAME = x}/> <br/><br/>
            <button onClick={ev => {
                create({
                    id: this.inpID.value,
                    name: this.inpNAME.value
                });
                //=>清空现有增加内容
                this.inpID.value = this.inpNAME.value = '';

                //=>跳转到列表页面
                history.push('/custom/list');
            }}>新增用户
            </button>
        </div>;
    }
}

export default connect(state => ({...state.custom}), action.custom)(CustomCreate);

/*
 * 凡是基于ROUTE路由渲染出来的组件或者页面，都会默认被设置三个属性
 *   基于路由渲染：<Route path='xxx' component={xxx}>
 *   获取三个属性：this.props
 *
 * history
 *   push：向HISTORY STACK中新增一条记录（跳转到指定的新页面）
 *   goBack：返回上一条记录对应的页面
 *   goForward：前进到下一条记录对应的页面
 *   location：{pathname\search\state\hash} 存储当前页面的一些地址信息
 *   ...
 *
 * location 存储当前页面中的一些信息
 *   pathname
 *   search
 *   hash
 *   state
 *
 * match  存储了每一个路由Route匹配的一些信息
 *   isExact
 *   params
 */
