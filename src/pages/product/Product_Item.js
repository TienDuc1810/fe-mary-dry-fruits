import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { Star, StarCheck } from '@/icons';
import styles from './Store.module.scss';
import images from '@/assets';
import { useShoppingContext } from '@/contexts/Shopping_Context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';

const cx = classNames.bind(styles);

function ProductItem({ id, image, name, price, rating }) {
    const [products, setProducts] = useState([])
    const { addCartItem } = useShoppingContext();

    useEffect(()=>{
        setProducts({ id, image, name, price, rating })
    },[])
    
    return (
        <div className={cx('product-main')} key={products.id}>
            <div className={cx('product-border-line-1')}></div>
            <div className={cx('product-border-line-2')}></div>
            <div className={cx('product-border-line-3')}></div>
            <div className={cx('product-border-line-4')}></div>
            <div className={cx('product-image')}>
                <Link to="/">
                    <img src={images.product_1_change} alt="product" className={cx('product-image-change')} />
                    <img src={products.image} alt="product" className={cx('product-image-origin')} />
                </Link>
                <div className={cx('product-image-add')} onClick={() => addCartItem(products)}>
                    <FontAwesomeIcon
                        icon={icon({ name: 'cart-shopping', style: 'solid' })}
                        className={cx('product-icon')}
                    />
                </div>
                <div className={cx('product-image-like')}>
                    <FontAwesomeIcon icon={icon({ name: 'heart', style: 'regular' })} className={cx('product-icon')} />
                </div>
                <div className={cx('product-image-search')}>
                    <FontAwesomeIcon
                        icon={icon({ name: 'magnifying-glass', style: 'solid' })}
                        className={cx('product-icon')}
                    />
                </div>
            </div>
            <div className={cx('product-detail')}>
                <div className={cx('product-outner-name')}>
                    <Link to="/product-detail" className={cx('product-name')}>
                        {products.name}
                    </Link>
                </div>
                <div className={cx('product-price')}>
                    <span className={cx('product-money')}>${products.price}</span>
                </div>
                <div className={cx('product-star')}>
                    <div className={cx('product-star-image')}>
                        {Array.from({ length: 5 }).map((_, index) =>
                            index < products.rating ? (
                                <StarCheck key={index} className={cx('check')} />
                            ) : (
                                <Star key={index} className={cx('no-check')} />
                            ),
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductItem;
