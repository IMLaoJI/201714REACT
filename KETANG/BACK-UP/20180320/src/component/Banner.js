import React from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import ReactSwipe from 'react-swipe';
import './Banner.less';

class Banner extends React.Component {
    static defaultProps = {
        startSlide: 0,
        auto: 0
    };

    static propTypes = {
        startSlide: PropTypes.number,
        auto: PropTypes.number,
        data: PropTypes.array.isRequired
    };

    constructor(props) {
        super(props);

        //=>INIT STATE
        this.state = {
            index: props.startSlide
        };
    }

    render() {
        let {data, auto} = this.props,
            {index} = this.state;

        return <div className="bannerBox">
            <ReactSwipe
                swipeOptions={{
                    auto,
                    startSlide: index,
                    //=>index:当前活动块的索引
                    callback: index => this.setState({index})
                }}>

                {data.map((item, ind) => {
                    return <div key={ind}>
                        <img src={item.img} alt={item.title}/>
                    </div>;
                })}
            </ReactSwipe>

            <ul className="focus clearfix">
                {data.map((item, ind) => {
                    return <li key={ind}
                               className={ind === index ? 'active' : ''}>
                    </li>;
                })}
            </ul>
        </div>;
    }
}

export default withRouter(connect()(Banner));
