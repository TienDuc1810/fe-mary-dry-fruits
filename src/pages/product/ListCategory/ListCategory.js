import React, { useState } from 'react';

import classNames from 'classnames/bind';
import styles from './ListCategory.module.scss';

import Banner from '@/components/Layout/Banner/Banner';
import images from '@/assets';
import CategoryList from '@/components/Layout/CategoryList/CategoryList';
import ProductList from '@/components/Layout/ProductList/ProductList';
import Footer from '@/components/Layout/Footer/Footer_Index';

const cx = classNames.bind(styles);

const ListCategory = () => {
   
    return (
        <div className={cx('category-container')}>
            <Banner pageMain="all" pageEtra="Rosehip Berries" backGround={images.banner}>
                product
            </Banner>
            <div className={cx('category')}>
                <CategoryList />
                <ProductList />
            </div>
            <Footer />
        </div>
    );
};

export default ListCategory;
