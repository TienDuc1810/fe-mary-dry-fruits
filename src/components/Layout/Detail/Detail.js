import React from 'react';

import classNames from 'classnames/bind';
import styles from './Detail.module.scss';

import Banner from '@/components/Layout/Banner/Banner';
import DetailMulImage from './DetailMulImage/DetailMulImage';
import ProductEvaluate from './ProductEvaluate/ProductEvaluate';
import DetailComment from './DetailComment/DetailComment';
import CommentProduct from './CommetProduct/CommentProduct';
import { StarYellow, StarCheck } from '@/icons';
import Footer from '@/components/Layout/Footer/Footer_Index';
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
            <div className={cx('detail-evaluate')}>
                <ProductEvaluate />
                <div className={cx('detail-form')}>
                    <DetailComment />
                    <DetailComment />
                    <DetailComment />
                    <CommentProduct />
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Detail;
