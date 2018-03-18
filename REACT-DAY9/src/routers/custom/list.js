import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import action from '../../store/action/index';

class CustomList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {data, create, history} = this.props;

        return <div>
            <ul className="list-group">
                {
                    data.map((item, index) => {
                        let {id, name} = item;
                        /*return <li className="list-group-item"
                                   key={index}
                                   onClick={ev => {
                                       /!*history.push('/custom/detail'); =>这样只是跳转，我们不仅要跳转，还要把点击的是谁传递过去*!/

                                       /!*问号传参*!/
                                       /!*history.push(`/custom/detail?id=${id}`);*!/
                                       /!*地址参数*!/
                                       history.push(`/custom/detail/${id}`);
                                   }}>
                            编号：{id}
                            &nbsp;&nbsp;
                            姓名：{name}
                        </li>;*/

                        return <Link className="list-group-item"
                                     key={index}
                                     to={{
                                         pathname: `/custom/detail`,
                                         state: {id: id}
                                     }}>
                            编号：{id}
                            &nbsp;&nbsp;
                            姓名：{name}
                        </Link>;
                    })
                }
            </ul>
        </div>;
    }
}

export default connect(state => ({...state.custom}), action.custom)(CustomList);
