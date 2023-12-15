import classNames from 'classnames/bind';
import styles from './BestProducts.module.scss';
import images from '@/assets';
import { Star, StarCheck, StarHalf } from '@/icons';
import Button from '@/components/Button/ButtonIndex';
import TitleIndex from '../Title/TitleIndex';
import ProductItem from '@/pages/product/ProductItem';

const cx = classNames.bind(styles);

function BestProductsIndex() {
    return (
        <div className={cx('container')}>
            <div className={cx('wrapper')}>
                <TitleIndex
                    heading={'BestProducts'}
                    description={'Pellentesque massa placerat duis ultricies lacus sit sed.'}
                />
                <div className={cx('product-home-show')}>
                    <div className={cx('product-home-wapper-btn')}>
                        <Button text={'Dried Seeds'} link={'/'} primary blackText active />
                        <Button text={'Spicy Masas'} link={'/'} primary blackText />
                    </div>

                    {/* <div className={cx('product-home-container')}>
                        <ul className={cx('product-home-wrapper')}>
                            <ProductItem/>
                            <ProductItem/>
                            <ProductItem/>
                            <ProductItem/>
                            <ProductItem/>
                        </ul>
                        <div className={cx('product-home-directional')}>
                            <button className={cx('product-home-back')}></button>
                            <button className={cx('product-home-next')}></button>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default BestProductsIndex;
