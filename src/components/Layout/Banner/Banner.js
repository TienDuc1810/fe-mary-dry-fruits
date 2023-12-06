import React from 'react';
import { Link } from 'react-router-dom';

import classNames from 'classnames/bind';
import styles from './Banner.module.scss';
import logo from '../../../Images/z4933121985309_38fa8bc9583c645168fe86782439153d.png';

const cx = classNames.bind(styles);

const Banner = (props) => {
    const { children, pageMain, pageEtra,backGround } = props;
    return (
        <div className={cx('banner-contairner')} style={{ backgroundImage: `url(${backGround})` }}>
            <div className={cx('banner-logo')}>
                <img src={logo} className={cx('img')} />
                <span className={cx('first')}>HELLO</span>
                <span className={cx('last')}>WORLD</span>
            </div>
            <div className={cx('banner-page')}>
                <h1 className={cx('name')}>{children}</h1>
                <Link to={"/"} className={cx('page')}>{pageMain}</Link>
                <span>&frasl;</span>
                <Link to={"/"} className={cx('page')}>{pageEtra}</Link>
            </div>
        </div>
    );
};

export default Banner;
