import React from 'react';
import BannerFocus from "./banner-focus";
import BannerArrow from "./banner-arrow";
import '../css/banner.less';

class Banner extends React.Component {
    constructor() {
        super();
    }

    render() {
        return <div className="container">
            {/*WRAPPER:轮播图部分*/}
            <div className="wrapper">
                <div className="slide">
                    <img src="" alt=""/>
                </div>
            </div>

            {/*FOCUS:焦点*/}
            <BannerFocus/>

            {/*ARROW:箭头*/}
            <BannerArrow/>
        </div>;
    }
}

export default Banner;