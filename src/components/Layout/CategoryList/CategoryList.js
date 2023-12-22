import classNames from 'classnames/bind';
import styles from './CategoryList.module.scss';

import images from '@/assets';
import CategoryTitle from './CategoryTitle/CategoryTitle';
import axios from '@/service/axios';

import CategoryFilter from './CategoryFilter/CategoryFilter';
import ProductItem from '@/pages/product/Product_Item';

import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

const CategoryList = ({getIdCategory}) => {
    const [category, setCategory] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('api/product/category');
                if (res?.categories) {
                    setCategory(res?.categories);
                } else {
                    setCategory('');
                }
            } catch (error) {
                console.log('error', error);
            }
        };
        fetchData();
    }, []);

    const handleIdCategory = (msd) => {
        getIdCategory(msd)
    };

    return (
        <div className={cx('category-list')}>
            <CategoryTitle>Category</CategoryTitle>
            <div className={cx('category-filter-panel')}>
                <ul className={cx('filter')}>
                    {category.map((item, index) => {
                        return (
                            <CategoryFilter
                                name={item.name}
                                id={item.id}
                                handleIdCategory={handleIdCategory}
                                key={index}
                            />
                        );
                    })}
                </ul>
            </div>
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
