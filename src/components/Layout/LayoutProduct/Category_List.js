import { useEffect, useState } from 'react';
import axios from '@/service/axios';
import SliderProducts from '../Main/BestProducts/Slider_Products';
import Loading from '../Loading/Loading';
import classNames from 'classnames/bind';
import styles from '@/components/Layout/LayoutProduct/Layout_Product.module.scss';

const cx = classNames.bind(styles);

const CategoryList = ({ getIdCategory }) => {
    const [category, setCategory] = useState([]);
    const [loading, setLoading] = useState(true);

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
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const handleIdCategory = (msd) => {
        setLoading(true);
        getIdCategory(msd);
        setTimeout(()=>{
            setLoading(false);
        }, 100)
    };

    return (
        <>
            {loading === true ? (
                <Loading />
            ) : (
                <div className={cx('category-list')}>
                    <div className={cx('category-title')}>
                        <h5 className={cx('category-heading')}>Category</h5>
                    </div>
                    <div className={cx('category-filter')}>
                        <div className={cx('filter-link')} onClick={() => handleIdCategory(0)}>
                            All
                        </div>
                        {loading === true ? (
                            <Loading />
                        ) : (
                            <>
                                {category.map((item, index) => {
                                    return (
                                        <div
                                            className={cx('filter-link')}
                                            key={index}
                                            onClick={() => handleIdCategory(item.id)}
                                        >
                                            {item.name}
                                        </div>
                                    );
                                })}
                            </>
                        )}
                    </div>
                    <div className={cx('category-title')}>
                        <h5 className={cx('category-heading')}>Best Sellers</h5>
                    </div>
                    <div className={cx('category-silder')}>
                        <SliderProducts slidesToShow={1} />
                    </div>
                </div>
            )}
        </>
    );
};

export default CategoryList;
