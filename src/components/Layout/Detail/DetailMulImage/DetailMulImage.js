import React, { useState } from 'react';

import classNames from 'classnames/bind';
import styles from './DetailMulImage.module.scss';

import facebook from '@/Images/icont/facebook.svg';
import message from '@/Images/icont/messenger.svg';
import twitter from '@/Images/icont/twitter.svg';
import google from '@/Images/icont/google.svg';
import nostar from '@/Images/icont/star-line.svg';
import star from '@/Images/icont/star (1).svg';
import detail from '@/Images/detailProduct.webp';

const cx = classNames.bind(styles);

const DetailMulImage = (props) => {
    const { children, img1, ing2, ing3, ing4, ing5, imgMain } = props;
    const [plus, setPlus] = useState(0);
    const [selectedWeight, setSelectedWeight] = useState(null);

    const hanldePlus = () => {
        setPlus((pre) => pre + 1);
    };

    const handleMinus = () => {
        plus <= 0 ? setPlus(0) : setPlus((pre) => pre - 1);
    };

    const handleWeightSelection = (weight) => {
        setSelectedWeight(weight);
    };

    return (
        <div className={cx('detail-content')}>
            <div className={cx('detail-image')}>
                <img src={detail} alt="detailProduct" />
                <div className={cx('image-mul')}>
                    <img src={imgMain} alt="detailProduct" className={cx('image')} />
                    <img src={img1} alt="detailProduct" className={cx('image')} />
                    <img src={imgMain} alt="detailProduct" className={cx('image')} />
                    <img src={img1} alt="detailProduct" className={cx('image')} />
                    <img src={imgMain} alt="detailProduct" className={cx('image')} />
                </div>
            </div>
            <div className={cx('detail-tab')}>
                <h2 className={cx('title')}>{children}</h2>
                <div className={cx('img-mul')}>
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={nostar} alt="star" />
                </div>
                <p className={cx('dis')}>
                    Nam tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam
                    dolor, elementum etos lobortis des mollis ut risus. Sedcus faucibus an sullamcorper mattis drostique
                    des commodo pharetras...
                </p>
                <div className={cx('price')}>
                    <h6>Price:</h6>
                    <span>629.000 VND</span>
                </div>
                <div className={cx('price')}>
                    <h6>Weight:</h6>
                    {[250, 500, 750, 1000, 1250, 1500].map((weight) => (
                        <button
                            key={weight}
                            className={cx('gram')}
                            onClick={() => handleWeightSelection(weight)}
                            disabled={selectedWeight !== weight ? false : true}
                        >
                            {weight / 1000} kg
                        </button>
                    ))}
                </div>
                <div className={cx('price')}>
                    <h6>Quantity:</h6>
                    <div className={cx('plus')}>
                        <button onClick={handleMinus}>-</button>
                        <p className={cx('gramPlus')}>{plus}</p>
                        <button onClick={hanldePlus}>+</button>
                    </div>
                </div>
                <div className={cx('add-cart')}>
                    <input className={cx('add')} type="button" value="Add To Cart" />
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
    );
};

export default DetailMulImage;
