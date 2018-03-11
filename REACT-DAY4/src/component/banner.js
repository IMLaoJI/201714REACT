import React from 'react';
import PropTypes from 'prop-types';
import BannerFocus from "./banner-focus";
import BannerArrow from "./banner-arrow";
import '../css/banner.less';

class Banner extends React.Component {
    static defaultProps = {
        interval: 3000
    };

    static propTypes = {
        IMG_DATA: PropTypes.array.isRequired,
        interval: PropTypes.number
    };

    constructor(props) {
        super(props);

        this.state = {
            step: 0 //=>STEP记录当前运动的步长（当前需要展示的SLIDE的索引）
        };
    }

    componentDidMount() {
        //=>第一次渲染完成:
        //1、设置定时器,开启自动轮播（不是最直接操作WRAPPER，而是通过修改STEP数据，控制组件重新渲染，从而实现WRAPPER的运动）
        setInterval(() => {
            let step = this.state.step;
            step++;
            if (step >= this.props.IMG_DATA.length) {
                step = 0;
            }
            this.setState({step});
        }, this.props.interval);
    }
    
    render() {
        const {IMG_DATA} = this.props,
            {step} = this.state;

        //=>动态计算WRAPPER的样式
        const wrapperStyle = {
            width: `${IMG_DATA.length * 1000}px`,
            left: `${-step * 1000}px`,
            //->设置过渡效果:当WRAPPER的LEFT改变的时候,可以按照过渡动画完成
            transition: '.3s'
        };

        return <div className="container">
            {/*WRAPPER:轮播图部分*/}
            <div className="wrapper"
                 style={wrapperStyle}>
                {
                    IMG_DATA.map(({img, title}, index) => {
                        return <div className="slide" key={index}>
                            <img src={img} alt={title}/>
                        </div>;
                    })
                }
            </div>

            {/*FOCUS:焦点*/}
            <BannerFocus num={IMG_DATA.length}
                         cur={step}/>

            {/*ARROW:箭头*/}
            <BannerArrow/>
        </div>;
    }


}

export default Banner;