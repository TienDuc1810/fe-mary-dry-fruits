import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import classNames from 'classnames/bind';
import styles from './CategoryList.module.scss';

import images from '@/assets';
import CategoryTitle from './CategoryTitle/CategoryTitle';
import CategoryGram from './CategoryGram/CategoryGram';
import ProductItem from '@/pages/Product/Product_Item';

const cx = classNames.bind(styles);

const CategoryList = () => {
    const [down, setDown] = useState(false);
    const [expandedIndex, setExpandedIndex] = useState(null);
    const categories = ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5'];

    const handleExpand = (index) => {
        setExpandedIndex(index === expandedIndex ? null : index);
    };
    return (
        <div className={cx('category-list')}>
            <CategoryTitle>Category</CategoryTitle>
            <div className={cx('category-filter-panel')}>
                <ul className={cx('filter')}>
                    {categories.map((category, index) => (
                        <li key={index} className={cx('filter-practice')} onClick={() => handleExpand(index)}>
                            <Link to={'#'} className={cx('filter-link')}>
                                {category}
                            </Link>
                            {expandedIndex === index && (
                                <ul className={cx('dropdown')}>
                                    <li>Item 1</li>
                                    <li>Item 2</li>
                                    <li>Item 3</li>
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
            <CategoryTitle>Shop By Weight</CategoryTitle>
            <CategoryGram
                number1="250 kg"
                number2="500 kg"
                number3="750 kg"
                number4="1000 kg"
                number5="1250 kg"
                number6="1500 kg"
            />
            <CategoryTitle>Shop By Price</CategoryTitle>
            <CategoryGram
                number1="$100 - $200"
                number2="$200 - $300"
                number3="$300 - $500"
                number4="$500 - $700"
                number5="$1700 - $1000"
                number6={null}
            />
            <CategoryTitle>Shop By Brand</CategoryTitle>
            <CategoryGram
                number1="Catch"
                number2="Vedaka"
                number3="Kesari"
                number4="Eastern"
                number5="Oskino"
                number6={null}
            />
            <div className={cx('category-brand')}>
                <img src={images.brand} alt="brand" />
            </div>
            <CategoryTitle>Best Sellers</CategoryTitle>
            <div className={cx('category-bestsaler')}>
                <ProductItem name={'Black Cardamom'} price={500} rating={3} image={images.product_1} />
            </div>
        </div>
    );
};

export default CategoryList;
