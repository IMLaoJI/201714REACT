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
                支持骑士
            </button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <button type="button"
                    className="btn btn-success"
                    onClick={supportB}>
                支持老鹰
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









