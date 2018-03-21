import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Nav from '../component/Nav';
import Banner from "../component/Banner";
import Tab from "../component/Tab";
import Course from "../component/Course";

import './Home.less';


let data = [
    {
        id: 1,
        title: 'xxx',
        img: 'http://pic2.ablesky.cn/content/pic/orgappindexphoto/2017/04/23/b98b6f06-0a52-4248-8a7c-cc68dbd59d2f.jpg'
    },
    {
        id: 2,
        title: 'xxx',
        img: 'http://pic3.ablesky.cn/content/pic/orgappindexphoto/2017/04/23/c043a2c1-512d-4531-8154-873b7e541a51.jpg'
    },
    {
        id: 3,
        title: 'xxx',
        img: 'http://pic2.ablesky.cn/content/pic/orgappindexphoto/2017/04/23/819ed0bc-494b-49e0-a1a7-eec04e977131.jpg'
    }
];

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            bannerData: []
        };
    }

    componentWillMount() {
        setTimeout(() => {
            this.setState({
                bannerData: data
            });
        }, 10);
    }

    render() {
        return <div>
            <section className="navContainer">
                {/*NAV*/}
                <Nav/>
            </section>

            <section className="container">
                {/*BANNER*/}
                <Banner data={this.state.bannerData} auto={1000}/>

                {/*KE-CHENG*/}
                <div className="kechengBox">
                    <h3>
                        <i className="iconfont icon-wode_kecheng"></i>
                        全部课程
                    </h3>
                    <ul>
                        <Course flag='list' data={{
                            id: 1,
                            name: '微信小程序专家级课程',
                            pic: '',
                            address: '珠峰培训',
                            time: '21分钟',
                            price: 2000
                        }}/>
                        <Course flag='list' data={{
                            id: 1,
                            name: '微信小程序专家级课程',
                            pic: '',
                            address: '珠峰培训',
                            time: '21分钟',
                            price: 2000
                        }}/>
                    </ul>
                </div>
            </section>

            <section className="footerContainer">
                {/*TAB*/}
                <Tab/>
            </section>
        </div>;
    }
}

export default connect()(Home);
