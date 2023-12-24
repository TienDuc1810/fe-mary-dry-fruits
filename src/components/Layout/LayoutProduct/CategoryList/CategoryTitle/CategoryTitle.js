import React from 'react';

import classNames from 'classnames/bind';
import styles from './CategoryTitle.module.scss';

const cx = classNames.bind(styles);

const CategoryTitle = ({ children }) => {
    return (
        <div className={cx('category-title')}>
            <h5>{children}</h5>
        </div>
    );
};

export default CategoryTitle;
