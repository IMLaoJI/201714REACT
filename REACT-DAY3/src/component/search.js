import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import jsonp from 'jsonp';

export default class Search extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [],
            show: false,
            n: -1 //=>记录当前选中LI的索引(默认-1:不选中任何一个)
        };
    }

    queryData = ev => {
        //=>获取数据(JSONP)
        new Promise((resolve, reject) => {
            let val = ev.target.value.trim();
            jsonp(`https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=${val}`,
                {param: 'cb'},
                (err, data) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    resolve(data['s']);//=>匹配信息的数组传递给THEN
                }
            );
        }).then(data => {
            //=>数据获取成功,修改组件STATE信息(触发视图重新渲染)
            this.setState({
                data //=>data:data
            });
        });
    };

    handKey = ev => {
        let code = ev.keyCode;//=>获取按键的键盘码  上(38) 下(40) Enter(13) ...
        let {n} = this.state;

        switch (code) {
            case 38:
                n--;
                break;
            case 40:
                n++;
                break;
            case 13:
                break;
        }
        this.setState({n});
    };

    render() {
        let {data, show, n} = this.state;

        return <div className="panel panel-default"
                    style={{width: '500px', margin: '20px auto'}}>
            <header className="panel-heading">
                <input type="text"
                       className="form-control"
                       placeholder="请输入要查询的关键词"
                       onChange={this.queryData}
                       onBlur={ev => this.setState({show: false})}
                       onFocus={ev => this.setState({show: true})}
                       onKeyUp={this.handKey}
                       autoFocus/>
            </header>
            <main className="panel-body"
                  style={{display: show ? 'block' : 'none'}}>
                <ul className="list-group">
                    {
                        data.map((item, index) => {
                            const active = n === index ? 'active' : '';
                            return <li className={`list-group-item ${active}`}
                                       key={index}>
                                {item}
                            </li>;
                        })
                    }
                </ul>
            </main>
        </div>;
    }
}

