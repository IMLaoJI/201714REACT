import React from 'react';
import '../css/banner-arrow.less';

class BannerArrow extends React.Component {
    constructor() {
        super();
    }

    render() {
        return <div className="banner-arrow">
            <a href="javascript:;" className="arrowLeft"></a>
            <a href="javascript:;" className="arrowRight"></a>
        </div>;
    }
}

export default BannerArrow;