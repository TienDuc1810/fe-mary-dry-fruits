import classNames from 'classnames/bind';
import styles from './Store.module.scss';
import images from '@/assets';
import { Link } from 'react-router-dom';
import { Star, StarCheck } from '@/icons';

const cx = classNames.bind(styles);

function ProductItem() {
    return (
        <div>
            <li className={cx('product-main')}>
                <div className={cx('product-border-line-1')}></div>
                <div className={cx('product-border-line-2')}></div>
                <div className={cx('product-border-line-3')}></div>
                <div className={cx('product-border-line-4')}></div>
                <div className={cx('product-image')}>
                    <Link to="/product">
                        <img src={images.product_1} alt="product" className={cx('product-image-size')} />
                    </Link>
                </div>
                <div className={cx('product-detail')}>
                    <div className={cx('product-outner-name')}>
                        <a href="/" className={cx('product-name')}>
                            Black Cardamom
                        </a>
                    </div>
                    <div className={cx('product-price')}>
                        <span className={cx('product-money')}>$569.00</span>
                    </div>
                    <div className={cx('product-star')}>
                        <ul className={cx('product-outner-star')}>
                            <li className={cx('product-star-image')}>
                                <StarCheck className={cx('check')} />
                            </li>
                            <li className={cx('product-star-image')}>
                                <StarCheck className={cx('check')} />
                            </li>
                            <li className={cx('product-star-image')}>
                                <StarCheck className={cx('check')} />
                            </li>
                            <li className={cx('product-star-image')}>
                                <StarCheck className={cx('check')} />
                            </li>
                            <li className={cx('product-star-image')}>
                                <Star className={cx('no-check')} />
                            </li>
                        </ul>
                    </div>
                </div>
            </li>
        </div>
    );
}

export default ProductItem;
