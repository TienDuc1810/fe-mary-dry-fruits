import React from 'react';

import classNames from 'classnames/bind';
import styles from './DisContentContent.module.scss';
import images from '@/assets';

const cx = classNames.bind(styles);

const DisContentContent = (props) => {
    const { children, dis } = props;
    return (
        <div className={cx('discription-content')}>
            <h4>{children}</h4>
            <div className={cx('content')}>
                <img src={images.check} />
                <span>{dis}</span>
            </div>
            <div className={cx('content')}>
                <img src={images.check} />
                <span>{dis}</span>
            </div>
        </div>
    );
};

export default DisContentContent;
