import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import classNames from 'classnames/bind';
import styles from './DetailMulImage.module.scss';

import nostar from '@/Images/icont/star-line.svg';
import starYello from '@/Images/icont/star (1).svg';
import detail from '@/Images/detailProduct.webp';

import DisContentContent from '../DetailDes/DisContentContent/DisContentContent';
import images from '@/assets';

const cx = classNames.bind(styles);

const DetailMulImage = (props) => {
    const navigate = useNavigate();
    const { children, imgMain, value, star } = props;
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

    const handleAdd = () => {
        navigate('/cart');
    };
    const handlePageNutri = () => {
        navigate('/product/nutritional');
    };
    return (
        <div className={cx('detail-content')}>
            <div className={cx('detail-image')}>
                <img src={imgMain} alt="detailProduct" className={cx('image-main')} />
                <DisContentContent dis={value.nutrition_detail}>Nutrition</DisContentContent>
                <div className={cx('detail-more')}>
                    <img src={images.food} alt="food" />
                    <p>
                        <span>&nbsp;Xem thêm</span>&nbsp;Ưu điểm & lưu ý của sản phẩm&nbsp;
                    </p>
                    <img src={images.right} alt="right" />
                </div>
            </div>

            <div className={cx('detail-tab-dis')}>
                <div className={cx('detail-tab')}>
                    <h2 className={cx('title')} onClick={handlePageNutri}>
                        {children}
                    </h2>
                    <div className={cx('img-mul')}>
                        {[...Array(5)].map((_, i) => (
                            <img
                                key={i}
                                src={i < star ? starYello : nostar}
                                alt={i < star ? 'star yellow' : 'no star'}
                            />
                        ))}
                    </div>
                    <p className={cx('dis')}>{value.description}</p>
                    <div className={cx('price')}>
                        <h6>Price:</h6>
                        <span>${value.price}</span>
                    </div>
                    <div className={cx('price')}>
                        <h6>Weight:</h6>
                        {value.weight_tags.map((weight) => (
                            <button
                                key={weight.id}
                                className={cx('gram')}
                                onClick={() => handleWeightSelection(weight)}
                                disabled={selectedWeight !== weight ? false : true}
                            >
                                {weight.mass / 1000} Kg
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
                        <input className={cx('add')} type="button" value="Add To Cart" onClick={handleAdd} />
                    </div>
                </div>
                <div className={cx('detail-dis')}>
                    <DisContentContent dis={value.nutrition_detail}>Nutrition</DisContentContent>
                </div>
            </div>
        </div>
    );
};

export default DetailMulImage;
