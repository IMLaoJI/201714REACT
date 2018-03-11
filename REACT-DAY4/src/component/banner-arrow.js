import React from 'react';
import '../css/banner-arrow.less';
import PropTypes from "prop-types";

class BannerArrow extends React.Component {
    static defaultProps = {
        step: 1
    };

    static propTypes = {
        step: PropTypes.number,
        callback: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
    }

    componentDidUpdate() {
        //=>当前组件(包含BANNER组件)渲染完成
        this.isHand = false;
    }

    render() {
        return <div className="banner-arrow" onClick={this.handClick}>
            <a href="javascript:;" className="arrowLeft"></a>
            <a href="javascript:;" className="arrowRight"></a>
        </div>;
    }

    //=>基于事件委托完成点击事件的绑定
    handClick = ev => {
        let {step, callback} = this.props;
        //=>防止过快点击
        if (this.isHand) return;
        this.isHand = true;

        let tar = ev.target,
            tarClass = tar.className;
        tarClass.includes('arrowLeft') ? step-- : step++;
        //=>执行传递的方法,把最新处理的STEP值传递回去
        callback(step);
    };
}

export default BannerArrow;