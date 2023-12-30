import classNames from 'classnames/bind';
import axios from '@/service/axios';
import styles from '@/components/Layout/LayoutProduct/Layout_Product.module.scss';
import SliderProducts from '../Main/BestProducts/Slider_Products';
import { useEffect, useState } from 'react';
import Loading from '../Loading/Loading';
import { Link } from 'react-router-dom';

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
        getIdCategory(msd);
    };

    return (
        <>
            {loading === true ? (
                <Loading />
            ) : (
                <div className={cx('category-list')}>
                    <div className={cx('category-title')}>
                        <h5>Category</h5>
                    </div>
                    <div className={cx('category-filter-panel')}>
                        <ul className={cx('filter')}>
                            <li className={cx('filter-practice-nodrop')}>
                                <Link to={'#'} className={cx('filter-link')} onClick={() => handleIdCategory(0)}>
                                    All
                                </Link>
                            </li>
                            {category.map((item, index) => {
                                return (
                                    <li className={cx('filter-practice-nodrop')} key={index}>
                                        <Link
                                            to={'#'}
                                            className={cx('filter-link')}
                                            onClick={() => handleIdCategory(item.id)}
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <div className={cx('category-title')}>
                        <h5>Best Sellers</h5>
                    </div>
                    <div className={cx('silder')}>
                        <SliderProducts slidesToShow={1} />
                    </div>
                </div>
            )}
        </>
    );
};

export default CategoryList;
