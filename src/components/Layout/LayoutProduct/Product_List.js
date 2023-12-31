import { useState, useEffect } from 'react';
import ProductItem from '@/pages/Product/Product_Item';
import axios from '@/service/axios';
import Loading from '../Loading/Loading';
import Button from '@/components/Button/ButtonIndex';

import classNames from 'classnames/bind';
import styles from '@/components/Layout/LayoutProduct/Layout_Product.module.scss';

const cx = classNames.bind(styles);

const ProductList = ({ categoryId }) => {
    const [product, setProduct] = useState([]);
    const [drop, setDrop] = useState(false);
    const [lastPage, setLastPage] = useState(Array.from({ length: 1 }, (_, index) => index + 1));
    const [currentPage, setCurrentPage] = useState(1);
    const [oldCategoryID, setOldCategoryID] = useState(0);
    const [loading, setLoading] = useState(false);

    const handleDrop = () => {
        setDrop(!drop);
    };

    const changePage = (pageNumber) => {
        setLoading(true);
        setCurrentPage(pageNumber);
        window.scroll(0, 0);
    };

    const fetchData = async (categoryId, currentPage) => {
        try {
            let page = categoryId !== oldCategoryID ? 1 : currentPage;
            const res = await axios.post('api/product/allproduct', { category: categoryId, page });
            if (res && res.data) {
                const data = res.data.data || res.data;
                const lastPage = res.data.last_page;
                setProduct(data);
                setLastPage(Array.from({ length: lastPage }, (_, index) => index + 1));
            }
        } catch (error) {
            console.log('error', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (categoryId !== oldCategoryID) {
            fetchData(categoryId, 1);
            setCurrentPage(1);
            setOldCategoryID(categoryId);
            return;
        }
        fetchData(categoryId, currentPage);
    }, [categoryId, currentPage]);

    return (
        <div className={cx('product-list')}>
            <div className={cx('product-filter')}>
                <h4 className={cx('product-filter-heading')}>Sort by </h4>
                <div className={cx('product-filter-btn')} onClick={handleDrop}>
                    <Button text={'Featured'} blackText />
                    {drop && (
                        <div className={cx('filter-drop')}>
                            <div className={cx('filter-item')}>Best selling</div>
                            <div className={cx('filter-item')}>Alphabetically, A-Z</div>
                            <div className={cx('filter-item')}>Alphabetically, Z-A</div>
                            <div className={cx('filter-item')}>Price, low to high</div>
                            <div className={cx('filter-item')}>Price, high to low</div>
                            <div className={cx('filter-item')}>Date, old to new</div>
                        </div>
                    )}
                </div>
            </div>
            <div className={cx('page-current')}>
                {loading === true ? (
                    <Loading />
                ) : (
                    <>
                        {product.map((item, index) => {
                            return (
                                <>
                                    <div className={cx('product-item')} key={index}>
                                        <ProductItem
                                            name={item.name}
                                            price={item.price}
                                            rating={item.star}
                                            image={item.image}
                                            id={item.id}
                                            star={item.star}
                                            link={'/product-detail/' + item.id}
                                        />
                                    </div>
                                </>
                            );
                        })}
                        <div className={cx('page-change')}>
                            <ul className={cx('page-practive')}>
                                <li className={cx('left')} onClick={() => changePage(currentPage - 1)}>
                                    &lsaquo;
                                </li>

                                {lastPage.map((pageNumber) => (
                                    <li
                                        onClick={() => changePage(pageNumber)}
                                        key={pageNumber}
                                        className={cx({ choose: pageNumber === currentPage })}
                                    >
                                        {pageNumber}
                                    </li>
                                ))}

                                <li className={cx('right')} onClick={() => changePage(currentPage + 1)}>
                                    &rsaquo;
                                </li>
                            </ul>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default ProductList;
