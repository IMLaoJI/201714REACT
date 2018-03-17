/*
 * VOTE版块需要管理STATE对应的REDUCER
 *   STATE:目前STORE中存储的当前REDUCER对应的状态信息(开始容器中是没有这些状态的,我们需要为其设置一些默认值)
 *   ACTION:一个对象,我们派发的行为 {TYPE:行为标识,...}
 */
import * as Types from '../action-types';

function vote(state = {
    A: 0,
    B: 0
}, action) {
    state = {...state};//=>基于浅克隆技术,把原有容器中存储的STATE克隆一份,接下来我们操作的STATE和原有容器中的STATE没有任何关系了  <=> state=JSON.parse(JSON.stringify(state)) 深度克隆

    switch (action.type) {
        case Types.VOTE_A:
            state.A = state.A + 1;
            break;
        case Types.VOTE_B:
            state.B = state.B + 1;
            break;
    }

    return state;//=>把最新修改后的STATE返回,替换STORE容器中现有的STATE值
}

export default vote;