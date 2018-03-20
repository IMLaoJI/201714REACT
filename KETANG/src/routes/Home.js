import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Nav from '../component/Nav';
import Banner from "../component/Banner";

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
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

        return <div>
            {/*NAV*/}
            <Nav/>

            {/*BANNER*/}
            <Banner auto={3000} data={data} startSlide={2}/>
        </div>;
    }
}

export default connect()(Home);
