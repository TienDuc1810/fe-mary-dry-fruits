import React from 'react';

import classNames from 'classnames/bind';
import styles from './Detail.module.scss';
import Header from '../Header/Header_Index';

import DetailMulImage from './DetailMulImage/DetailMulImage';

import Footer from '@/components/Layout/Footer/Footer_Index';

const cx = classNames.bind(styles);

const Detail = () => {
    return (
        <div className={cx('detail-contairner')}>
            <Header title={'Detail Product'}/>
            {
                <div className={cx('first')}>
                    <DetailMulImage />
                </div>
            }
            <Footer />
        </div>
    );
};

export default Detail;
