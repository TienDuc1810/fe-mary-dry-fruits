import React from 'react';

import classNames from 'classnames/bind';
import styles from './Index.module.scss';

import Banner from '../Banner/Banner';
import images from '@/assets';
import BestProductsIndex from '../Main/BestProducts/BestProductsIndex';

const cx = classNames.bind(styles);

const Index = () => {
    return (
        <div className={cx('about-us-container')}>
            <Banner pageMain="all" pageEtra="Rosehip Berries" backGround={images.banner}>
                product
            </Banner>
            <div className={cx('about-us')}>
                <div className={cx('about-us-first')}>
                    <div className={cx('first-content')}>
                        <h4>The Richest Masala In The World</h4>
                        <p>
                            Nullam malesuada erat ut ki diaml ka dhuddu pochu turpis. Suspendisse urna nibh, viverra
                            non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Morbi
                            in sem quis dui placerat ornare. Tortor dignissim convallis aenean et tortor. Ac tincidunt
                            vitae semper quis lectus nulla at volutpat diam.
                        </p>
                        <blockquote>
                            Nullam malesuada erat ut ki diaml ka dhuddu pochu turpis. Suspendisse urna nibh, viverra
                            non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Morbi
                            in sem quis dui placerat ornare. Tortor dignissim convallis aenean et tortor. Ac tincidunt
                            vitae semper quis lectus nulla at volutpat diam.
                        </blockquote>
                    </div>
                    <div className={cx('first-image')}></div>
                </div>
                <BestProductsIndex />  
                <div className={cx('about-us-second')}>
                    <div className={cx('second-flavors')}>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;
