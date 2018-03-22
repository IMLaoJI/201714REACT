import React from 'react';
import ReactDOM from 'react-dom';

/*==ROUTER==*/
import {HashRouter, Switch, Route, Redirect} from 'react-router-dom';

/*==REACT-REDUX==*/
import {Provider} from 'react-redux';
import store from './store/index';

/*==MY-COMPONENT==*/
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Pay from "./routes/Pay";
import Mycourse from "./routes/Mycourse";
import Myprofile from "./routes/Myprofile";
import Login from "./routes/Login";
import Register from "./routes/Register";
import Forget from "./routes/Forget";

/*==COMMON CSS AND JS==*/
import './common/css/reset.min.css';
import './common/css/public.less';

ReactDOM.render(<Provider store={store}>
    <HashRouter>
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/detail/:id?" component={Detail}/>
            <Route path="/pay/:id?" component={Pay}/>
            <Route path="/course" component={Mycourse}/>
            <Route path="/profile" component={Myprofile}/>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
            <Route path="/forget" component={Forget}/>
            <Redirect to="/"/>
        </Switch>
    </HashRouter>
</Provider>, window.root);
