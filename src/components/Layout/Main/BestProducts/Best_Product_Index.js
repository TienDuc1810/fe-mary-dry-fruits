import classNames from 'classnames/bind';
import styles from './Best_Product.module.scss';
import images from '@/assets';
import SliderProducts from './Slider_Products';
import TitleIndex from '../Title/Title_Index';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const cx = classNames.bind(styles);

function BestProductsIndex() {
    const products = [
        { name: 'Product 1', price: 100, rating: 4, image: images.product_1 },
        { name: 'Product 2', price: 150, rating: 5, image: images.product_1 },
        { name: 'Product 3', price: 150, rating: 5, image: images.product_1 },
        { name: 'Product 4', price: 150, rating: 5, image: images.product_1 },
        { name: 'Product 5', price: 150, rating: 5, image: images.product_1 },
        { name: 'Product 6', price: 150, rating: 5, image: images.product_1 },
        { name: 'Product 7', price: 150, rating: 5, image: images.product_1 },
        { name: 'Product 8', price: 150, rating: 5, image: images.product_1 },
        { name: 'Product 9', price: 150, rating: 5, image: images.product_1 },
        { name: 'Product 10', price: 150, rating: 5, image: images.product_1 },
    ];

    return (
        <div className={cx('container')}>
            <div className={cx('wrapper')}>
                <TitleIndex
                    heading={'BestProducts'}
                    description={'Pellentesque massa placerat duis ultricies lacus sit sed.'}
                />
                <div className={cx('product-home-show')}>
                    <div className={cx('product-home-container')}>
                        <div className={cx('product-home-wrapper')}>
                            <SliderProducts products={products} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BestProductsIndex;
