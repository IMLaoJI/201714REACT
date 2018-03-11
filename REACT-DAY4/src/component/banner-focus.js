import React from 'react';
import '../css/banner-focus.less';

class BannerFocus extends React.Component {
    constructor() {
        super();
    }

    render() {
        return <ul className="banner-focus">
            <li></li>
            <li className="active"></li>
        </ul>;
    }
}

export default BannerFocus;