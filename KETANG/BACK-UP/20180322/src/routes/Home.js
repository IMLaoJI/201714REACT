import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Nav from '../component/Nav';
import Banner from "../component/Banner";
import Tab from "../component/Tab";
import Course from "../component/Course";
import './Home.less';
import {queryBanner} from '../api/course';
import action from '../store/action/index';

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            bannerData: []
        };
    }

    async componentWillMount() {
        //=>BANNER
        let result = await queryBanner();
        this.setState({
            bannerData: result
        });

        //=>COURSE
        let {courseData, getCourse} = this.props;
        //=>REDUX容器中还没有存放数据,此时我们派发一个任务,获取到数据存储到容器中
        if (courseData && courseData.length === 0) {
            getCourse();
        }
    }

    render() {
        let {courseData} = this.props;

        return <div>
            <section className="navContainer">
                {/*NAV*/}
                <Nav/>
            </section>

            <section className="container">
                {/*BANNER*/}
                <Banner data={this.state.bannerData} auto={1000}/>

                {/*KE-CHENG*/}
                {courseData && courseData.length > 0 ? <div className="kechengBox">
                    <h3>
                        <i className="iconfont icon-wode_kecheng"></i>
                        全部课程
                    </h3>
                    <ul>
                        {courseData.map((item, index) => {
                            return <Course key={index}
                                           flag='list'
                                           data={item}/>;
                        })}
                    </ul>
                </div> : null}
            </section>

            <section className="footerContainer">
                {/*TAB*/}
                <Tab/>
            </section>
        </div>;
    }
}

export default connect(state => ({...state.course}), action.course)(Home);

/*
 * 除了JSONP可以实现跨域，我们还可以基于CORS实现跨域
 *   Cross-Origin Resource Sharing（CORS）跨来源资源共享
 *
 * 服务器端把允许访问的源进行设置，让客户端基于AJAX可以进行跨域访问即可
 */