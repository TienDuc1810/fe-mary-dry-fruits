import React from 'react';

import classNames from 'classnames/bind';
import styles from './Detail.module.scss';

import DetailMulImage from './DetailMulImage/DetailMulImage';
import DetailDes from './DetailDes/DetailDes';

import img1 from '@/Images/img1.webp';
import imgMail from '@/Images/detailProduct.webp';

const cx = classNames.bind(styles);

const Detail = () => {
    return (
        <div className={cx('detail-contairner')}>
            <DetailMulImage imgMain={imgMail} img1={img1} ing2={1} ing3={1} ing4={1} ing5={1}>
                Rosehip Berries
            </DetailMulImage>
            <DetailDes></DetailDes>
        </div>
    );
};

export default Detail;
