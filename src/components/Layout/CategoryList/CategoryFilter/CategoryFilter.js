import React from 'react';

import classNames from 'classnames/bind';
import styles from './CategoryFilter.module.scss';

import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const CategoryFilter = ({ name, id, handleIdCategory }) => {
    return (
        <li className={cx('filter-practice-nodrop')}>
            <Link to={'#'} className={cx('filter-link')} onClick={() => handleIdCategory(id)}>
                {name}
            </Link>
        </li>
    );
};

export default CategoryFilter;
