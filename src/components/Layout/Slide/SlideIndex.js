import React from 'react';
import classNames from 'classnames/bind';
import styles from './SlideIndex.module.scss';
import images from '@/assets/images';

const cx = classNames.bind(styles);

const SlideIndex = () => {
    return (
        <div className={cx('container')}>
            <div className={cx('wrapper')}>
                <input type="radio" className={cx('slider-btn')} name="radio-btn" id="radio1" />
                <input type="radio" className={cx('slider-btn')} name="radio-btn" id="radio2" />
                <input type="radio" className={cx('slider-btn')} name="radio-btn" id="radio3" />
                <input type="radio" className={cx('slider-btn')} name="radio-btn" id="radio4" />
                <input type="radio" className={cx('slider-btn')} name="radio-btn" id="radio5" />

                <div className={cx('slider-image')}>
                    <img src={images.slider_1} alt="slide_image_1" />
                    <div className={cx('slider-title')}>
                        <h2 className={cx('slider-text')}>The choice of chefs</h2>
                        <p className={cx('slider-text-sale')}>15% OFF ON SPICES</p>
                        <p className={cx('slider-text-booking')}>USE COUPON : 
                            <strong>SPI18</strong>
                        </p>
                    </div>
                </div>
                {/* <div className={cx('slider-image')}>
                    <img src={slide_image.slider_2} alt="slide_image_2" />
                </div>
                <div className={cx('slider-image')}>
                    <img src={slide_image.slider_3} alt="slide_image_3" />
                </div> */}

                <div className={cx('slider-nav-auto')}>
                    <div className={cx('slider-auto-btn1')}></div>
                    <div className={cx('slider-auto-btn2')}></div>
                    <div className={cx('slider-auto-btn3')}></div>
                </div>

                <div className={cx('slider-nav-manual')}>
                    <label for="radio1" className={cx('slider-manual-btn')}></label>
                    <label for="radio2" className={cx('slider-manual-btn')}></label>
                    <label for="radio3" className={cx('slider-manual-btn')}></label>
                </div>
                <div className={cx('slider-arrow-manual')}>
                    <label for="radio4" className={cx('slider-arrow-left')}></label>
                    <label for="radio5" className={cx('slider-arrow-right')}></label>
                </div>
            </div>
        </div>
    );
};

export default SlideIndex;
