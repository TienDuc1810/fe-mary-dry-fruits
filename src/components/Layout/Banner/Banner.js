import React from 'react';
import { Link } from 'react-router-dom';

import classNames from 'classnames/bind';
import styles from './Banner.module.scss';
import images from '@/assets';

const cx = classNames.bind(styles);

const Banner = (props) => {
    const { children,backGround } = props;
    return (
        <div className={cx('banner-contairner')} style={{ backgroundImage: `url(${backGround})` }}>
            <div className={cx('banner-logo')}>
                <img src={images.logo} className={cx('img')} alt="image" />
                <span className={cx('first')}>HELLO</span>
                <span className={cx('last')}>WORLD</span>
            </div>
            <div className={cx('banner-page')}>
                <h1 className={cx('name')}>{children}</h1>
            </div>
        </div>
    );
};

export default Banner;
