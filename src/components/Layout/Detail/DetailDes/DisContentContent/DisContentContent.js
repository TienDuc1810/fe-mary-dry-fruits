import React from 'react';

import classNames from 'classnames/bind';
import styles from './DisContentContent.module.scss';

import { Link } from 'react-router-dom';
import search from '@/Images/icont/search.svg';

const cx = classNames.bind(styles);

const DisContentContent = (props) => {
    const { children, dis } = props;
    return (
        <div className={cx('discription-content')}>
            <p className={cx('content')}>{dis}</p>
            <h4>{children}</h4>
            <p className={cx('content')}>{dis}</p>
            <h4>{children}</h4>
            <p className={cx('content')}>{dis}</p>
            <h4>{children}</h4>
        </div>
    );
};

export default DisContentContent;
