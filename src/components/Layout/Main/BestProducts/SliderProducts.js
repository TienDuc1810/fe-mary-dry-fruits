import React, { useState } from 'react';
import Slider from 'react-slick';
import images from '@/assets';
import { Link } from 'react-router-dom';
import { Star, StarCheck } from '@/icons';
import ProductItem from '@/pages/Product/Product_Item';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import classNames from 'classnames/bind';
import styles from './BestProducts.module.scss';
const cx = classNames.bind(styles);

const SliderProducts = ({ image }) => {
    const [slider, setSlider] = useState(null);
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
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

    return (
        <div className={cx('container-slide')}>
            <Slider ref={(c) => setSlider(c)} {...settings}>
                {image.map((img) => {
                    return (
                        <div>
                            <ProductItem/>
                        </div>
                    );
                })}
            </Slider>
            <div className={cx('btn')}>
                <button className="button" onClick={previous}>
                    Previous
                </button>
                <button className="button" onClick={next}>
                    Next
                </button>
            </div>
        </div>
    );
};
export default SliderProducts;
