import React from 'react';

import classNames from 'classnames/bind';
import styles from './Detail.module.scss';

import DetailMulImage from './DetailMulImage/DetailMulImage';
import DetailDes from './DetailDes/DetailDes';
// import ProductItem from '@/pages/product/ProductItem';

import images from '@/assets';

import imgMail from '@/Images/detailProduct.webp';

const cx = classNames.bind(styles);

const Detail = () => {
    return (
        <div className={cx('detail-contairner')}>
            <DetailMulImage
                imgMain={imgMail}
                img1={images.img1}
                img2={images.imgMain}
                img3={images.img1}
                img4={images.imgMain}
                img5={images.img1}
            >
                Rosehip Berries
            </DetailMulImage>
            {/* <DetailDes></DetailDes> */}
        </div>
    );
};

export default Detail;
