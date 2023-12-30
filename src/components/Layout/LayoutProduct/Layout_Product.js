import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from '../LayoutProduct/Layout_Product.module.scss';
import CategoryList from '@/components/Layout/LayoutProduct/CategoryList';
import ProductList from '@/components/Layout/LayoutProduct/ProductList';
const cx = classNames.bind(styles);

const LayoutProduct = () => {
    const [categoryId, setCategoryID] = useState(0);

    const getIdCategory = (msd) => {
        setCategoryID(msd);
    };

    return (
        <div className={cx('category-container')}>
            <div className={cx('category')}>
                <CategoryList getIdCategory={getIdCategory} />
                <ProductList categoryId={categoryId} />
            </div>
        </div>
    );
};

export default LayoutProduct;
