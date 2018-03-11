import React from 'react';
import PropTypes from 'prop-types';
import '../css/banner-focus.less';

class BannerFocus extends React.Component {
    static defaultProps = {
        cur: 0
    };

    static propTypes = {
        cur: PropTypes.number,
        num: PropTypes.number.isRequired
    };

    constructor(props) {
        super(props);
    }

    render() {
        const {num, cur} = this.props;

        return <ul className="banner-focus">
            {
                new Array(num).fill('').map((item, index) => {
                    return <li key={index}
                               className={index === cur ? 'active' : ''}>
                    </li>;
                })
            }
        </ul>;
    }
}

export default BannerFocus;