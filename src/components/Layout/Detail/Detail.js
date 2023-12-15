import React from 'react';

import classNames from 'classnames/bind';
import styles from './Detail.module.scss';

import Banner from '@/components/Layout/Banner/Banner';
import DetailMulImage from './DetailMulImage/DetailMulImage';
import Footer from '@/components/Layout/Footer/FooterIndex';

import images from '@/assets';

const cx = classNames.bind(styles);

const Detail = () => {
    return (
        <div className={cx('detail-contairner')}>
            <Banner pageMain="all" pageEtra="Rosehip Berries" backGround={images.banner}>
                product
            </Banner>
            <DetailMulImage
                imgMain={images.imgMain}
                img1={images.img1}
                img2={images.imgMain}
                img3={images.img1}
                img4={images.imgMain}
                img5={images.img1}
            >
                Rosehip Berries
            </DetailMulImage>
            <Footer />
        </div>
    );
};

export default Detail;
