import React, { useState, useEffect } from 'react';

import classNames from 'classnames/bind';
import styles from './Detail.module.scss';
import axios from '@/service/axios';
import { useParams } from 'react-router-dom';

import Banner from '@/components/Layout/Banner/Banner';
import DetailMulImage from './DetailMulImage/DetailMulImage';

import Footer from '@/components/Layout/Footer/Footer_Index';
import images from '@/assets';

const cx = classNames.bind(styles);

const Detail = () => {
    const id = useParams();
    const [item, setItem] = useState([]);
    const fetchData = async () => {
        try {
            const res = await axios.post('api/product/product_details', { product_id: id });
            setItem(res.data[0]);
        } catch (error) {
            console.log('error', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className={cx('detail-contairner')}>
            <Banner pageMain="all" pageEtra="Rosehip Berries" backGround={images.banner}>
                product
            </Banner>
            {
                <div className={cx('first')}>
                    <DetailMulImage product={item} />
                </div>
            }

            <Footer />
        </div>
    );
};

export default Detail;
