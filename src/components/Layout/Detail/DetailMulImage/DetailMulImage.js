import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import classNames from 'classnames/bind';
import styles from './DetailMulImage.module.scss';

import nostar from '@/Images/icont/star-line.svg';
import starYello from '@/Images/icont/star (1).svg';
import BestProductsIndex from '../../Main/BestProducts/Best_Product_Index';
import ProductEvaluate from '../ProductEvaluate/ProductEvaluate';
import DetailComment from '../DetailComment/DetailComment';
import CommentProduct from '../CommetProduct/CommentProduct';

const cx = classNames.bind(styles);

const DetailMulImage = (props) => {
    const navigate = useNavigate();
    const { children, imgMain, value, star } = props;
    const [plus, setPlus] = useState(0);
    const [zoneDetails, setZoneDetails] = useState(1);
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

    return (
        <div className={cx('detail-content')}>
            <link
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
                rel="stylesheet"
                integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
                crossorigin="anonymous"
            ></link>
            <div className={cx('detail-head')}>
                <div className={cx('detail-image')}>
                    <img src={imgMain} alt="detailProduct" className={cx('image-main')} />
                </div>
                <div className={cx('detail-tab-dis')}>
                    <div className={cx('detail-tab')}>
                        <h2 className={cx('title')}>{children}</h2>
                        <div className={cx('img-mul')}>
                            {[...Array(5)].map((_, i) => (
                                <img
                                    key={i}
                                    src={i < star ? starYello : nostar}
                                    alt={i < star ? 'star yellow' : 'no star'}
                                />
                            ))}
                        </div>
                        <div className={cx('description')}>
                            <div dangerouslySetInnerHTML={{ __html: value.description }} />
                        </div>

                        <div className={cx('col')}>
                            <h6>Price:</h6>
                            <span>${value.price}</span>
                        </div>

                        <div className={cx('col')}>
                            <h6>Weight:</h6>
                            {value.weight_tags.map((weight) => (
                                <button
                                    key={weight.id}
                                    className={cx('gram')}
                                    onClick={() => handleWeightSelection(weight)}
                                    disabled={selectedWeight !== weight ? false : true}
                                >
                                    {weight.mass < 1000 ? weight.mass + 'gram' : weight.mass / 1000 + 'kg'}
                                </button>
                            ))}
                        </div>
                        <div className={cx('col')}>
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
                </div>
            </div>
            <div className={cx('detail-description')}>
                <button onClick={() => setZoneDetails(1)}>Product Description</button>
                <button onClick={() => setZoneDetails(2)}>Nutrition Label</button>
                <button onClick={() => setZoneDetails(3)}>Reviewer</button>
            </div>
            <div className={cx('zone')}>
                {' '}
                {zoneDetails == 1 ? (
                    <div dangerouslySetInnerHTML={{ __html: value.description }} className={cx('plr-40')} />
                ) : (
                    ''
                )}
                {zoneDetails == 2 ? <div dangerouslySetInnerHTML={{ __html: value.nutrition_detail }} /> : ''}
                {zoneDetails == 3 ? (
                    <div className={cx('detail-evaluate')}>
                        <ProductEvaluate />
                        <div className={cx('detail-form')}>
                            <DetailComment />
                            <DetailComment />
                            <DetailComment />
                            <CommentProduct />
                        </div>
                    </div>
                ) : (
                    ''
                )}
            </div>

            <BestProductsIndex />
        </div>
    );
};

export default DetailMulImage;
