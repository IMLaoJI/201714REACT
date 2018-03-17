import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';

import './css/bootstrap.css';
import VoteResult from "./component/VoteResult";
import VoteButton from "./component/VoteButton";

ReactDOM.render(<div className='panel panel-default'
                     style={{
                         width: '50%',
                         margin: '20px auto'
                     }}>
    <VoteResult/>
    <VoteButton/>
</div>, window.root);

/*
 * redux && react-redux  (mobx、dva:REACT框架)
 *   一款用来统一管理数据和状态的组件，REDUX可以应用到VUE、REACT、JQ...这些技术中，但是REACT-REDUX是专门针对于REACT开发的
 */



