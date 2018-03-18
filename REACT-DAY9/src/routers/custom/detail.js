import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import utils from '../../utils/utils';

class CustomDetail extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        /*如果是问号传递参数方式传递过来的信息,我们基于LOCATION完成处理*/
        /*let {data, location: {search}} = this.props,
            customId = utils.queryURLParameter(search)['id'];*/

        /*如果是路径参数方式传递的信息，我们基于MATCH中的PARAMS获取到参数信息*/
        /*let {data, match: {params}} = this.props,
            customId = params['id'];*/

        /*基于LINK组件的STATE属性实现信息的传递：好处在于传递的参数信息是隐藏的，弊端：基于路由跳转可以把信息传递进来，而且也可以基于LOCATION获取到信息，但是一旦页面刷新，信息就丢失了，无法基于STATE获取*/
        let {data, location: {state}} = this.props;
        if (!state) {
            return '信息丢失，当前页面不允许刷新，请回到列表页面重新点击进入!';
        }
        let customId = state.id;

        return <div>
            {data.filter(item => item.id == customId)
                .map((item, index) => {
                    return `客户编号：${item.id}
                    客户姓名:${item.name}`;
                })}
        </div>;
    }
}

export default connect(state => ({...state.custom}))(CustomDetail);