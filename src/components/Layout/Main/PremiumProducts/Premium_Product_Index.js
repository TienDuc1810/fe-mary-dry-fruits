import classNames from 'classnames/bind';
import styles from './Premium_Product.module.scss';
import TitleIndex from '../Title/Title_Index';
import PremiumProductItem from './Premium_Product_Item';
import images from '@/assets';

const cx = classNames.bind(styles);

const PremiumProductsIndex = () => {
    return (
        <div className={cx('container')}>
            <div className={cx('wrapper')}>
                <div className={cx('premium-product-title')}>
                    <TitleIndex
                        heading={'Premium Quality Products'}
                        description={'Explore premium quality products for the best enjoyment experience.'}
                    />
                </div>
                <div className={cx('premium-product-wrapper')}>
                    <PremiumProductItem
                        image={images.premium_img_1}
                        name={'Spicy Masalas'}
                        description={
                            'Porem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'
                        }
                    />
                    <PremiumProductItem
                        image={images.premium_img_1}
                        name={'Spicy Masalas'}
                        description={
                            'Porem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'
                        }
                    />
                    <PremiumProductItem
                        image={images.premium_img_1}
                        name={'Spicy Masalas'}
                        description={
                            'Porem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'
                        }
                    />
                    <PremiumProductItem
                        image={images.premium_img_1}
                        name={'Spicy Masalas'}
                        description={
                            'Porem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'
                        }
                    />
                </div>
            </div>
        </div>
    );
};

export default PremiumProductsIndex;
