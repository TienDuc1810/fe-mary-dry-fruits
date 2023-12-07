import React from 'react';
import classNames from 'classnames/bind';
import styles from './Detail.module.scss';
import detail from '@/Images/detailProduct.webp';
import star from '@/Images/icont/star (1).svg'

const cx = classNames.bind(styles);

const Detail = () => {
    return (
        <div className={cx('detail-contairner')}>
            <div className={cx('detail-content')}>
                <div className={cx('image')}>
                    <img src={detail} alt="detailProduct" />
                    <div className={cx('image-mul')}>
                        <img src={detail} alt="detailProduct" />
                        <img src={detail} alt="detailProduct" />
                        <img src={detail} alt="detailProduct" />
                        <img src={detail} alt="detailProduct" />
                        <img src={detail} alt="detailProduct" />
                    </div>
                </div>
                <div className={cx('tab')}>
                    <h2>Rosehip Berries</h2>
                    <div>
                        <img src={star} alt="star"/>
                    </div>
                    <p>
                        Nam tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque
                        diam dolor, elementum etos lobortis des mollis ut risus. Sedcus faucibus an sullamcorper mattis
                        drostique des commodo pharetras...
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Detail;
