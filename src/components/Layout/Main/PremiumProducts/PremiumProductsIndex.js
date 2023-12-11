import classNames from 'classnames/bind';
import styles from './PremiumProductsIndex.module.scss';
import TitleIndex from '../Title/TitleIndex';
import Button from '@/components/Button/ButtonIndex';
import images from '@/assets';

const cx = classNames.bind(styles);

const PremiumProductsIndex = () => {
    return (
        <div className={cx('container')}>
            <div className={cx('wrapper')}>
                <div className={cx('premium-product-title')}>
                    <TitleIndex
                        heading={'Premium Quality Products'}
                        description={'At volutpat diam ut venenatis tellus in metus vulputate sit set ramet sagit.'}
                    />
                </div>
                <div className={cx('premium-product-wrapper')}>
                    <div className={cx('premium-product-main')}>
                        <div className={cx('premium-product-image')}>
                            <img src={images.premium_img_1} alt="premium_product" className={cx('premium-product-img')} />
                        </div>
                        <div className={cx('premium-product-outner-name')}>
                            <span className={cx('premium-product-name')}>Spicy Masalas</span>
                        </div>
                        <div className={cx('premium-product-outner-description')}>
                            <p className={cx('premium-product-description')}>
                                Porem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt.
                            </p>
                        </div>
                        <div className={cx('premium-product-btn')}>
                            <Button text={'Read more'} link={'/'} primary blackText />
                        </div>
                    </div>

                    <div className={cx('premium-product-main')}>
                        <div className={cx('premium-product-image')}>
                            <img src={images.premium_img_1} alt="premium_product" className={cx('premium-product-img')} />
                        </div>
                        <div className={cx('premium-product-outner-name')}>
                            <span className={cx('premium-product-name')}>Spicy Masalas</span>
                        </div>
                        <div className={cx('premium-product-outner-description')}>
                            <p className={cx('premium-product-description')}>
                                Porem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt.
                            </p>
                        </div>
                        <div className={cx('premium-product-btn')}>
                            <Button text={'Read more'} link={'/'} primary blackText />
                        </div>
                    </div>

                    <div className={cx('premium-product-main')}>
                        <div className={cx('premium-product-image')}>
                            <img src={images.premium_img_1} alt="premium_product" className={cx('premium-product-img')} />
                        </div>
                        <div className={cx('premium-product-outner-name')}>
                            <span className={cx('premium-product-name')}>Spicy Masalas</span>
                        </div>
                        <div className={cx('premium-product-outner-description')}>
                            <p className={cx('premium-product-description')}>
                                Porem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt.
                            </p>
                        </div>
                        <div className={cx('premium-product-btn')}>
                            <Button text={'Read more'} link={'/'} primary blackText />
                        </div>
                    </div>

                    <div className={cx('premium-product-main')}>
                        <div className={cx('premium-product-image')}>
                            <img src={images.premium_img_1} alt="premium_product" className={cx('premium-product-img')} />
                        </div>
                        <div className={cx('premium-product-outner-name')}>
                            <span className={cx('premium-product-name')}>Spicy Masalas</span>
                        </div>
                        <div className={cx('premium-product-outner-description')}>
                            <p className={cx('premium-product-description')}>
                                Porem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt.
                            </p>
                        </div>
                        <div className={cx('premium-product-btn')}>
                            <Button text={'Read more'} link={'/'} primary blackText />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PremiumProductsIndex;
