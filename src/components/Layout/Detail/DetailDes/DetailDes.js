import React from 'react';

import classNames from 'classnames/bind';
import styles from './DetailDes.module.scss';

import { Link } from 'react-router-dom';
import search from '@/Images/icont/search.svg';

const cx = classNames.bind(styles);

const DetailDes = () => {
    return (
        <div className={cx('detail-discription')}>
            <div className={cx('discription-btn')}>
                <button className={cx('btn')}>Product Description</button>
                <button className={cx('btn')}>Product Description</button>
                <button className={cx('btn')}>Product Description</button>
            </div>
            <div className={cx('discription-content')}>
                <p className={cx('content')}>
                    Nam tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam
                    dolor, elementum etos lobortis des mollis ut risus. Sedcus faucibus an sullamcorper mattis drostique
                    des commodo pharetras loremos.Donec pretium egestas sapien et mollis.
                    <br />
                    Nam tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam
                    dolor, elementum etos lobortis des mollis ut risus. Sedcus faucibus an sullamcorper mattis drostique
                    des commodo pharetras loremos.Donec pretium egestas sapien et mollis.
                </p>
                <h4>Busey ipsum dolor sit amet</h4>
                <p className={cx('content')}>
                    Nam tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam
                    dolor, elementum etos lobortis des mollis ut risus. Sedcus faucibus an sullamcorper mattis drostique
                    des commodo pharetras loremos.Donec pretium egestas sapien et mollis.
                </p>
                <h4>Busey ipsum dolor sit amet</h4>
                <p className={cx('content')}>
                    Nam tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam
                    dolor, elementum etos lobortis des mollis ut risus. Sedcus faucibus an sullamcorper mattis drostique
                    des commodo pharetras loremos.Donec pretium egestas sapien et mollis.
                </p>
                <div className={cx('search')}>
                    <img src={search} alt="search" />
                    <Link to={'/'} className={cx('link')}>
                        Enquiry about product?
                    </Link>
                </div>
            </div>
            <h3>Related products</h3>
        </div>
    );
};

export default DetailDes;
