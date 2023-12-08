import React, { useState } from 'react';

import classNames from 'classnames/bind';
import styles from './Detail.module.scss';

import { Link } from 'react-router-dom';

import search from '@/Images/icont/search.svg';
import facebook from '@/Images/icont/facebook.svg';
import message from '@/Images/icont/messenger.svg';
import twitter from '@/Images/icont/twitter.svg';
import google from '@/Images/icont/google.svg';
import nostar from '@/Images/icont/star-line.svg';
import star from '@/Images/icont/star (1).svg';
import detail from '@/Images/detailProduct.webp';

const cx = classNames.bind(styles);

const Detail = (props) => {
    const { children, img1, ing2, ing3, ing4, ing5, imgMain } = props;
    const [plus, setPlus] = useState(0);

    const hanldePlus = () => {
        setPlus((pre) => pre + 1);
    };

    const handleMinus = () => {
        setPlus((pre) => pre - 1);
    };

    return (
        <div className={cx('detail-contairner')}>
            <div className={cx('detail-content')}>
                <div className={cx('image')}>
                    <img src={detail} alt="detailProduct" />
                    <div className={cx('image-mul')}>
                        <img src={imgMain} alt="detailProduct" className={cx('image')} />
                        <img src={img1} alt="detailProduct" className={cx('image')} />
                        <img src={imgMain} alt="detailProduct" className={cx('image')} />
                        <img src={img1} alt="detailProduct" className={cx('image')} />
                        <img src={imgMain} alt="detailProduct" className={cx('image')} />
                    </div>
                </div>
                <div className={cx('tab')}>
                    <h2 className={cx('title')}>{children}</h2>
                    <div className={cx('img-mul')}>
                        <img src={star} alt="star" />
                        <img src={star} alt="star" />
                        <img src={star} alt="star" />
                        <img src={star} alt="star" />
                        <img src={nostar} alt="star" />
                    </div>
                    <p className={cx('dis')}>
                        Nam tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque
                        diam dolor, elementum etos lobortis des mollis ut risus. Sedcus faucibus an sullamcorper mattis
                        drostique des commodo pharetras...
                    </p>
                    <div className={cx('price')}>
                        <h6>Price:</h6>
                        <span>$629.00</span>
                    </div>
                    <div className={cx('price')}>
                        <h6>Weight:</h6>
                        <p className={cx('gram')}>250 gram</p>
                    </div>
                    <div className={cx('price')}>
                        <h6>Quantity:</h6>
                        <div className={cx('plus')}>
                            <button onClick={handleMinus}>-</button>
                            <p className={cx('gram')}>{plus}</p>
                            <button onClick={hanldePlus}>+</button>
                        </div>
                    </div>
                    <div className={cx('add-cart')}>
                        <input className={cx('add')} type="button" value="Add To Cart" />
                        <input className={cx('add')} type="button" value="Buy It Now" />
                        <input className={cx('add')} type="button" value="Add To Wishlist" />
                    </div>
                    <div className={cx('share')}>
                        <h6>Share with us:</h6>
                        <img src={facebook} alt="facebook" />
                        <img src={message} alt="message" />
                        <img src={google} alt="google" />
                        <img src={twitter} alt="twitter" />
                    </div>
                </div>
            </div>
            <div className={cx('detail-discription')}>
                <div className={cx('discription-btn')}>
                    <button className={cx('btn')}>Product Description</button>
                    <button className={cx('btn')}>Product Description</button>
                    <button className={cx('btn')}>Product Description</button>
                </div>
                <div className={cx('discription-content')}>
                    <p className={cx('content')}>
                        Nam tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque
                        diam dolor, elementum etos lobortis des mollis ut risus. Sedcus faucibus an sullamcorper mattis
                        drostique des commodo pharetras loremos.Donec pretium egestas sapien et mollis.
                        <br />
                        Nam tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque
                        diam dolor, elementum etos lobortis des mollis ut risus. Sedcus faucibus an sullamcorper mattis
                        drostique des commodo pharetras loremos.Donec pretium egestas sapien et mollis.
                    </p>
                    <h4>Busey ipsum dolor sit amet</h4>
                    <p className={cx('content')}>
                        Nam tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque
                        diam dolor, elementum etos lobortis des mollis ut risus. Sedcus faucibus an sullamcorper mattis
                        drostique des commodo pharetras loremos.Donec pretium egestas sapien et mollis.
                    </p>
                    <h4>Busey ipsum dolor sit amet</h4>
                    <p className={cx('content')}>
                        Nam tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque
                        diam dolor, elementum etos lobortis des mollis ut risus. Sedcus faucibus an sullamcorper mattis
                        drostique des commodo pharetras loremos.Donec pretium egestas sapien et mollis.
                    </p>
                    <div className={cx('search')}>
                        <img src={search} alt="search" />
                        <Link to={'/'} className={cx('link')}>
                            Enquiry about product?
                        </Link>
                    </div>
                    <h3>Related products</h3>
                </div>
            </div>
        </div>
    );
};

export default Detail;
