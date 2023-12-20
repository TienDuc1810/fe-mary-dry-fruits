import React, { useState, useEffect } from 'react';

import classNames from 'classnames/bind';
import styles from './Detail.module.scss';
import axios from '@/service/axios';

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
    const [product, setProduct] = useState(null);

    const a = async () => {
        try {
            const res = await axios.get('api/product/allproduct');
            console.log(res.product);
            if (res?.product) {
                setProduct(res?.product);
            }
        } catch (error) {
            console.log('error', error);
        }
    };
 

    return (
        <div className={cx('detail-contairner')}>
            <Banner pageMain="all" pageEtra="Rosehip Berries" backGround={images.banner}>
                product
            </Banner>
            <DetailMulImage imgMain={images.imgMain}>Rosehip Berries</DetailMulImage>
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
