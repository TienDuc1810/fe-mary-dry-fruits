import React, { useState, useEffect } from 'react';

import classNames from 'classnames/bind';
import styles from './Detail.module.scss';

import Banner from '@/components/Layout/Banner/Banner';
import DetailMulImage from './DetailMulImage/DetailMulImage';

import Footer from '@/components/Layout/Footer/Footer_Index';
import images from '@/assets';

const cx = classNames.bind(styles);

const Detail = () => {
    return (
        <div className={cx('detail-contairner')}>
            <Banner pageMain="all" pageEtra="Rosehip Berries" backGround={images.banner}>
                product
            </Banner>

            <div className={cx('first')}>
                <DetailMulImage />
            </div>

            <Footer />
        </div>
    );
};

export default Detail;
