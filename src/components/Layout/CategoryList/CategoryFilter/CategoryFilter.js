import React, { useState } from 'react';

import classNames from 'classnames/bind';
import styles from './CategoryFilter.module.scss';

import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const CategoryFilter = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const handleExpand = (index) => {
        setExpandedIndex(index === expandedIndex ? null : index);
    };
    return (
        <div className={cx('category-filter-panel')}>
            <ul className={cx('filter')}>
                <li className={cx('filter-practice')} onClick={() => handleExpand(1)}>
                    <Link to={'#'} className={cx('filter-link')}>
                        Masalas
                    </Link>
                    {expandedIndex === 1 && (
                        <ul className={cx('dropdown')}>
                            <li>Maggi </li>
                            <li>Everest</li>
                            <li>Badshah</li>
                        </ul>
                    )}
                </li>
                <li className={cx('filter-practice')} onClick={() => handleExpand(2)}>
                    <Link to={'#'} className={cx('filter-link')}>
                        Chat Masalas
                    </Link>
                    {expandedIndex === 2 && (
                        <ul className={cx('dropdown')}>
                            <li>Agro Fresh</li>
                            <li>Tata</li>
                            <li>Eastern</li>
                        </ul>
                    )}
                </li>
                <li className={cx('filter-practice-nodrop')}>
                    <Link to={'#'} className={cx('filter-link')}>
                        Pepper Powder
                    </Link>
                </li>
                <li className={cx('filter-practice-nodrop')}>
                    <Link to={'#'} className={cx('filter-link')}>
                        Cooking Essentials
                    </Link>
                </li>
                <li className={cx('filter-practice')} onClick={() => handleExpand(3)}>
                    <Link to={'#'} className={cx('filter-link')}>
                        Refund Oil
                    </Link>
                    {expandedIndex === 3 && (
                        <ul className={cx('dropdown')}>
                            <li>Fortune</li>
                            <li>Sundrop</li>
                            <li>Dhara</li>
                        </ul>
                    )}
                </li>
                <li className={cx('filter-practice-nodrop')}>
                    <Link to={'#'} className={cx('filter-link')}>
                        Household
                    </Link>
                </li>
                <li className={cx('filter-practice-nodrop')}>
                    <Link to={'#'} className={cx('filter-link')}>
                        Personal Care
                    </Link>
                </li>
                <li className={cx('filter-practice')} value={'1'} onClick={() => handleExpand(4)}>
                    <Link to={'#'} className={cx('filter-link')}>
                        Clove
                    </Link>
                    {expandedIndex === 4 && (
                        <ul className={cx('dropdown')}>
                            <li>Vedaka</li>
                            <li>Spar</li>
                            <li>Agro Fresh</li>
                        </ul>
                    )}
                </li>
            </ul>
        </div>
    );
};

export default CategoryFilter;
