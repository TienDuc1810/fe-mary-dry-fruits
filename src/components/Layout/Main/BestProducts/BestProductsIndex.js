import classNames from 'classnames/bind';
import styles from './BestProducts.module.scss';
import images from '@/assets';
import Button from '@/components/Button/ButtonIndex';
import TitleIndex from '../Title/Title_Index';
import { Link } from 'react-router-dom';
import { Star, StarCheck } from '@/icons';
import SliderProducts from './SliderProducts';

const cx = classNames.bind(styles);

function BestProductsIndex() {
    const products = [
        { name: 'Product 1', price: 100, rating: 4, image: images.product_1 },
        { name: 'Product 2', price: 150, rating: 5, image: images.premium_img_1 },
        { name: 'Product 3', price: 150, rating: 5, image: images.premium_img_1 },
        { name: 'Product 4', price: 150, rating: 5, image: images.product_1 },
        { name: 'Product 5', price: 150, rating: 5, image: images.product_1 },
        { name: 'Product 6', price: 150, rating: 5, image: images.product_1 },
        { name: 'Product 7', price: 150, rating: 5, image: images.product_1 },
        { name: 'Product 8', price: 150, rating: 5, image: images.product_1 },
        { name: 'Product 9', price: 150, rating: 5, image: images.product_1 },
        { name: 'Product 10', price: 150, rating: 5, image: images.product_1 },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
    };

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

                    <div className={cx('product-home-container')}>
                        <div className={cx('product-home-wrapper')}>
                            <SliderProducts image={[images.br_image_1, images.br_image_2]} />
                        </div>
                        <div className={cx('product-home-directional')}>
                            <button className={cx('product-home-back')}></button>
                            <button className={cx('product-home-next')}></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BestProductsIndex;
