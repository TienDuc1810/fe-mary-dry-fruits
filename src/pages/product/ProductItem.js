import classNames from 'classnames/bind';
import styles from './Store.module.scss';
import images from '@/assets';
import { Star, StarCheck, StarHalf } from '@/icons';

const cx = classNames.bind(styles);


function ProductItem() {
    return (
        <div>
            <li className={cx('product-home-main')}>
                <div className={cx('product-home-border-line-1')}></div>
                <div className={cx('product-home-border-line-2')}></div>
                <div className={cx('product-home-border-line-3')}></div>
                <div className={cx('product-home-border-line-4')}></div>
                <div className={cx('product-home-image')}>
                    <a href="/">
                        <img src={images.product_1} alt="product" className={cx('product-home-image-size')} />
                    </a>
                </div>
                <div className={cx('product-home-detail')}>
                    <div className={cx('product-home-outner-name')}>
                        <a href="/" className={cx('product-home-name')}>
                            Black Cardamom
                        </a>
                    </div>
                    <div className={cx('product-home-price')}>
                        <span className={cx('product-home-money')}>$569.00</span>
                    </div>
                    <div className={cx('product-home-star')}>
                        <ul className={cx('product-home-outner-star')}>
                            <li className={cx('product-home-star-image')}>
                                <StarCheck className={cx('check')} />
                            </li>
                            <li className={cx('product-home-star-image')}>
                                <StarCheck className={cx('check')} />
                            </li>
                            <li className={cx('product-home-star-image')}>
                                <StarCheck className={cx('check')} />
                            </li>
                            <li className={cx('product-home-star-image')}>
                                <StarCheck className={cx('check')} />
                            </li>
                            <li className={cx('product-home-star-image')}>
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
