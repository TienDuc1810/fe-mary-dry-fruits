import React, { useState, useEffect } from 'react';

import classNames from 'classnames/bind';
import styles from './Detail.module.scss';
import axios from '@/service/axios';
import { useParams } from 'react-router-dom';

import Banner from '@/components/Layout/Banner/Banner';
import DetailMulImage from './DetailMulImage/DetailMulImage';
import ProductEvaluate from './ProductEvaluate/ProductEvaluate';
import DetailComment from './DetailComment/DetailComment';
import CommentProduct from './CommetProduct/CommentProduct';
import Footer from '@/components/Layout/Footer/Footer_Index';
import images from '@/assets';

const cx = classNames.bind(styles);

const Detail = () => {
    const id = useParams();
    const [product, setProduct] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.post('api/product/product_details', { product_id: id });
                if (res?.product_detail) {
                    setProduct(res?.product_detail);
                } else {
                    setProduct('');
                }
            } catch (error) {
                console.log('error', error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className={cx('detail-contairner')}>
            <Banner pageMain="all" pageEtra="Rosehip Berries" backGround={images.banner}>
                product
            </Banner>
            {product.map((value) => {
                return (
                    <div className={cx('first')} key={value.id}>
                        <DetailMulImage imgMain={value.image} value={value} star={value.star}>
                            {value.name}
                        </DetailMulImage>
                    </div>
                );
            })}
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
