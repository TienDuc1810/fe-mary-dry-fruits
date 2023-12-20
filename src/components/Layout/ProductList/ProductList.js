import React, { useState } from 'react';

import classNames from 'classnames/bind';
import styles from './ProductList.module.scss';
import ProductItem from '@/pages/Product/Product_Item';
import images from '@/assets';

import { Down } from '@/icons';

const cx = classNames.bind(styles);

const ProductList = () => {
    const [drop, setDrop] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const handleDrop = () => {
        setDrop(!drop);
    };
    const changePage = (pageNumber) => {
        setCurrentPage('');
        setTimeout(() => {
            setCurrentPage(pageNumber);
        }, 2000);
    };
    return (
        <div className={cx('product-list')}>
            <div className={cx('product-filter')}>
                <label>Sort by </label>
                <div className={cx('filter')}>
                    <div className={cx('filter-search')} onClick={handleDrop}>
                        <span>Featured</span>
                        <Down />
                    </div>
                    {drop && (
                        <div className={cx('filter-drop')}>
                            <ul>
                                <li>Best selling</li>
                                <li>Alphabetically, A-Z</li>
                                <li>Alphabetically, Z-A</li>
                                <li>Price, low to high</li>
                                <li>Price, high to low</li>
                                <li>Date, old to new</li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
            <div className={cx('current')}>
                <div className={cx('page-current')}>
                    <div className={cx('product-item')}>
                        <div className={cx('grid-item')}>
                            <ProductItem name={'Black Cardamom'} price={500} rating={4} image={images.product_1} />
                        </div>
                        <div className={cx('grid-item')}>
                            <ProductItem name={'Black Cardamom'} price={500} rating={4} image={images.product_1} />
                        </div>
                        <div className={cx('grid-item')}>
                            <ProductItem name={'Black Cardamom'} price={500} rating={4} image={images.product_1} />
                        </div>
                        <div className={cx('grid-item')}>
                            <ProductItem name={'Black Cardamom'} price={500} rating={3} image={images.product_1} />
                        </div>
                        <div className={cx('grid-item')}>
                            <ProductItem name={'Black Cardamom'} price={500} rating={3} image={images.product_1} />
                        </div>
                        <div className={cx('grid-item')}>
                            <ProductItem name={'Black Cardamom'} price={500} rating={3} image={images.product_1} />
                        </div>
                        <div className={cx('grid-item')}>
                            <ProductItem name={'Black Cardamom'} price={500} rating={3} image={images.product_1} />
                        </div>
                        <div className={cx('grid-item')}>
                            <ProductItem name={'Black Cardamom'} price={500} rating={3} image={images.product_1} />
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('page-change')}>
                <ul className={cx('page-practive')}>
                    <li className={cx('left')} onClick={() => changePage(currentPage - 1)}>
                        &lsaquo;
                    </li>
                    <li onClick={() => changePage(1)} className={cx({ choose: currentPage === 1 })}>
                        1
                    </li>
                    <li onClick={() => changePage(2)} className={cx({ choose: currentPage === 2 })}>
                        2
                    </li>
                    <li className={cx('right')} onClick={() => changePage(currentPage + 1)}>
                        &rsaquo;
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default ProductList;
