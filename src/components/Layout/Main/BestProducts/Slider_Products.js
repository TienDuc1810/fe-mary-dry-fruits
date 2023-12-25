import Slider from 'react-slick';
import ProductItem from '@/pages/Product/Product_Item';
import { useState, useEffect } from 'react';
import { topProduct } from '@/service/Product_Service';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import classNames from 'classnames/bind';
import styles from './Best_Product.module.scss';

const cx = classNames.bind(styles);

const SliderProducts = ({ slidesToShow }) => {
    const [slider, setSlider] = useState(null);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: slidesToShow || 5,
        slidesToScroll: 1,
    };

    const previous = () => {
        if (slider) {
            slider.slickPrev();
        }
    };

    const next = () => {
        if (slider) {
            slider.slickNext();
        }
    };

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await topProduct();

                if (res.success && res.response) {
                    setProducts(res.response);
                } else {
                    console.error('Invalid response from topProduct API:', res);
                    setProducts([]);
                }
            } catch (error) {
                console.error('Error fetching top products:', error);
                setProducts([]);
            }
        };

        fetchData();
    }, []);

    return (
        <div className={cx('container-slide')}>
            <Slider ref={(c) => setSlider(c)} {...settings}>
                {products.map((item) => {
                    return (
                        <div key={item.id}>
                            <ProductItem {...item} />
                        </div>
                    );
                })}
            </Slider>
            <div className={cx('slider-directional')}>
                <button className={cx('slider-back')} onClick={previous}></button>
                <button className={cx('slider-next')} onClick={next}></button>
            </div>
        </div>
    );
};
export default SliderProducts;
