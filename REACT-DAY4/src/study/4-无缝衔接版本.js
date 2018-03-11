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
            step: 1,
            speed: '.3s' //=>控制SLIDE切换的速度(立即回到某一张的时候需要把这个速度设置为0)
        };
    }

    componentWillMount() {
        //=>为了实现无缝衔接,我们把IMG_DATA进行修改
        //1、把真实的第一张克隆一份放在末尾
        //2、把真实的最后一张克隆一份放在开头
        //-----
        //1、我们这一步操作应该处在第一次加载之前(执行一次即可,不能放在RENDER中,这样的话每一次重新渲染都会新加很多数据)
        //2、放在这里处理,想在RENDER获取最新的数据,我们可以把最新的数据挂载到STATE上,或者挂载到实例上也可以(但是不能修改PROPS的值)

        let {IMG_DATA} = this.props;
        IMG_DATA.unshift(IMG_DATA[IMG_DATA.length - 1]);
        IMG_DATA.push(IMG_DATA[1]);
        this.IMG_DATA = IMG_DATA;
    }

    componentDidMount() {
        setInterval(() => {
            let step = this.state.step;
            step++;
            this.setState({step});
        }, this.props.interval);
    }

    shouldComponentUpdate(nextProps, nextState) {
        //=>这里面通过THIS.STATE获取的信息还是修改之前的,想要获取最新的,我们基于传递的形参获取（componentWillUpdate也是同样的情况）
        let {step} = nextState;
        if (step >= this.IMG_DATA.length) {
            //->情况:INTERVAL MS后STEP再次累加,累加的结果已经超过克隆后的边界
            //->处理:阻止重新渲染/设置STEP为1(让其立即运动到真实的第一张)/当立即运动完成后我们设置STEP等于2,让其300MS(过渡动画速度)运动到真实第二张
            this.setState({
                step: 1,
                speed: '0s'
            }, () => {
                //=>SET-STATE是异步操作,回调函数代表状态改变后,此时我们应该等到立即回到第一张后,让其运动到第二张(此时应该有过渡动画效果了)
                setTimeout(() => {
                    this.setState({
                        step: 2,
                        speed: '.3s'
                    });
                }, 0);//=>只是想把操作设置为异步操作而已
            });
            return false;
        }

        return true;
    }

    render() {
        let IMG_DATA = this.IMG_DATA,
            {step, speed} = this.state;

        //=>动态计算WRAPPER的样式
        const wrapperStyle = {
            width: `${IMG_DATA.length * 1000}px`,
            left: `${-step * 1000}px`,
            transition: speed
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
            <BannerFocus num={IMG_DATA.length - 2}
                         cur={step}/>

            {/*ARROW:箭头*/}
            <BannerArrow/>
        </div>;
    }


}

export default Banner;