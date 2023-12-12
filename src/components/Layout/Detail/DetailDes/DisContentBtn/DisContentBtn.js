import React from 'react';

import classNames from 'classnames/bind';
import styles from './DisContentBtn.module.scss';

const cx = classNames.bind(styles);

const disContentBtn = ({ children }) => {
    return <button className={cx('btn')}>{children}</button>;
};

export default disContentBtn;
