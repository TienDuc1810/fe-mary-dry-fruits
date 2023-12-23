import React, { useState, useEffect } from 'react';

import classNames from 'classnames/bind';
import styles from './ProductList.module.scss';
import ProductItem from '@/pages/Product/Product_Item';
import images from '@/assets';
import axios from '@/service/axios';

import { Down } from '@/icons';

const cx = classNames.bind(styles);

const ProductList = ({ categoryId }) => {
    const [product, setProduct] = useState([]);

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

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.post('api/product/allproduct', { category: categoryId });
                if (res?.product) {
                    setProduct(res?.product);
                } else {
                    setProduct('');
                }
            } catch (error) {
                console.log('error', error);
            }
        };
        fetchData();
    }, [categoryId]);
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
                        {product.map((item, index) => {
                            return (
                                <div className={cx('grid-item')} key={index}>
                                    <ProductItem
                                        name={item.name}
                                        price={item.price}
                                        rating={item.star}
                                        image={item.image}
                                        id={item.id}
                                    />
                                </div>
                            );
                        })}
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
