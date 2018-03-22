import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Tab from '../component/Tab';
import action from '../store/action/index';
import Course from '../component/Course';

class Mycourse extends React.Component {
    constructor(props) {
        super(props);
    }

    async componentWillMount() {
        let {collectData} = this.props;
        if (collectData && collectData.length === 0) {
            //=>派发一个任务:从服务器端获取收藏信息更新REDUX容器中的信息
            this.props.getCollect();
        }
    }

    render() {
        let {collectData} = this.props;
        return <div>
            <Tab/>
            {collectData.length > 0 ? <ul>
                {collectData.map((item, index) => {
                    return <Course key={index} flag='list' data={item}/>;
                })}
            </ul> : '暂无收藏'}
        </div>;
    }
}

export default connect(state => ({...state.course}), action.course)(Mycourse);
