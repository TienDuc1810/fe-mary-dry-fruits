import React, { useState } from 'react';
import Slider from 'react-slick';
import ProductItem from '@/pages/Product/Product_Item';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import classNames from 'classnames/bind';
import styles from './Best_Product.module.scss';

const cx = classNames.bind(styles);

const SliderProducts = ({ products }) => {
    const [slider, setSlider] = useState(null);
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
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
                   
                    {products.map((item, index) => {
                        return (
                            <div key={index}>
                                <ProductItem
                                    name={item.name}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}
                                />
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

  
    
  
    
  