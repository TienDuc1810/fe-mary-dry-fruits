import classNames from 'classnames/bind';

import axios from '@/service/axios';
import CategoryTitle from './CategoryTitle/CategoryTitle';
import styles from './CategoryList.module.scss';
import CategoryFilter from './CategoryFilter/CategoryFilter';
import SliderProducts from '../../Main/BestProducts/Slider_Products';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

const CategoryList = ({ getIdCategory }) => {
    const [category, setCategory] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('api/product/category');
                if (res?.data) {
                    setCategory(res?.data);
                } else {
                    setCategory([]);
                }
            } catch (error) {
                console.log('error', error);
            }
        };
        fetchData();
    }, []);

    const handleIdCategory = (msd) => {
        getIdCategory(msd);
    };

    return (
        <div className={cx('category-list')}>
            <CategoryTitle>Category</CategoryTitle>
            <div className={cx('category-filter-panel')}>
                <ul className={cx('filter')}>
                    <CategoryFilter name={'All'} id={0} handleIdCategory={handleIdCategory} />
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
            <div className={cx('silder')}>
                <SliderProducts slidesToShow={1} />
            </div>
        </div>
    );
};

export default CategoryList;
