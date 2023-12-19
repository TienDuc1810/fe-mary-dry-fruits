import React, { useState } from 'react';

import classNames from 'classnames/bind';
import styles from './CategoryList.module.scss';

import images from '@/assets';
import CategoryTitle from './CategoryTitle/CategoryTitle';
import CategoryFilter from './CategoryFilter/CategoryFilter';
import CategoryGram from './CategoryGram/CategoryGram';
import ProductItem from '@/pages/product/Product_Item';

const cx = classNames.bind(styles);

const CategoryList = () => {

    return (
        <div className={cx('category-list')}>
            <CategoryTitle>Category</CategoryTitle>
            <CategoryFilter />
            <CategoryTitle>Best Sellers</CategoryTitle>
            <div className={cx('category-bestsaler')}>
                <ProductItem name={'Black Cardamom'} price={500} rating={3} image={images.product_1} />
                <ul className={cx('page-practive')}>
                    <li className={cx('left')}>&lsaquo;</li>
                    <li className={cx('right')}>&rsaquo;</li>
                </ul>
            </div>
        </div>
    );
};

export default CategoryList;
