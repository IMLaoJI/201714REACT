import React from 'react';
import PropTypes from 'prop-types';
import {NavLink, Route, Switch, Redirect} from 'react-router-dom';
import CustomList from "./custom/list";
import CustomCreate from "./custom/create";
import CustomDetail from "./custom/detail";
import './custom.less';

export default class Custom extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <ul className="nav nav-pills nav-stacked col-md-2">
                <li role="presentation">
                    <NavLink to='/custom/list'>客户列表</NavLink>
                </li>
                <li role="presentation">
                    <NavLink to='/custom/create'>增加客户</NavLink>
                </li>
            </ul>
            <div className="col-md-10">
                {/*二级路由*/}
                <Switch>
                    {/*<Route path='/custom' exact render={() => {
                        return <Redirect to='/custom/list'/>;
                    }}/>*/}
                    <Redirect from='/custom' exact to='/custom/list'/>
                    <Route path='/custom/list' component={CustomList}/>
                    <Route path='/custom/create' component={CustomCreate}/>
                    <Route path='/custom/detail' component={CustomDetail}/>
                </Switch>
            </div>
        </div>;
    }
}
