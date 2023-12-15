import classNames from 'classnames/bind';
import styles from './Premium_Product.module.scss';
import Button from '@/components/Button/ButtonIndex';

const cx = classNames.bind(styles);

function PremiumProductItem({name, description, image}) {
    return (
        <div className={cx('premium-product-main')}>
            <div className={cx('premium-product-image')}>
                <img src={image} alt="premium_product" className={cx('premium-product-img')} />
            </div>
            <div className={cx('premium-product-outner-name')}>
                <span className={cx('premium-product-name')}>{name}</span>
            </div>
            <div className={cx('premium-product-outner-description')}>
                <p className={cx('premium-product-description')}>
                    {description}
                </p>
            </div>
            <div className={cx('premium-product-btn')}>
                <Button text={'Read more'} link={'/detail'} primary blackText/>
            </div>
        </div>
    );
}

export default PremiumProductItem;
