import classNames from 'classnames/bind';
import styles from './BestProducts.module.scss';
import images from '@/assets';
import Button from '@/components/Button/ButtonIndex';
import TitleIndex from '../Title/TitleIndex';
import ProductItem from '@/pages/product/ProductItem';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const cx = classNames.bind(styles);

function BestProductsIndex() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
    };

    const products = [
        { name: 'Product 1', price: 100, rating: 4, image: images.product_1 },
        { name: 'Product 2', price: 150, rating: 5, image: images.product_1 },
        // Add more products as needed
    ];
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
                        <ul className={cx('product-home-wrapper')}>
                            <Slider {...settings}>
                                {products.map((product, index) => (
                                    <ProductItem
                                        key={index}
                                        name={product.name}
                                        price={product.price}
                                        rating={product.rating}
                                        image={product.image}
                                    />
                                ))}
                            </Slider>
                        </ul>
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
