import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import classNames from 'classnames/bind';
import styles from './DetailMulImage.module.scss';

import nostar from '@/Images/icont/star-line.svg';
import star from '@/Images/icont/star (1).svg';
import detail from '@/Images/detailProduct.webp';

import DisContentContent from '../DetailDes/DisContentContent/DisContentContent';
import images from '@/assets';

const cx = classNames.bind(styles);

const DetailMulImage = (props) => {
    const navigate = useNavigate();
    const { children, img1, img2, img3, img4, img5, imgMain } = props;
    const dataImg = [img1, img2, img3, img4, img5];
    const [plus, setPlus] = useState(0);
    const [selectedWeight, setSelectedWeight] = useState(null);
    const [more, setMore] = useState(false);

    const [changeImg, setChangeImg] = useState(dataImg);
    const [changeImage, setChangeIamge] = useState('');
    const [failImg, setFailImg] = useState(false);

    const handleImg = (msd) => {
        setChangeIamge(msd);
        setFailImg(true);
    };
    const hanldePlus = () => {
        setPlus((pre) => pre + 1);
    };

    const handleMinus = () => {
        plus <= 0 ? setPlus(0) : setPlus((pre) => pre - 1);
    };

    const handleWeightSelection = (weight) => {
        setSelectedWeight(weight);
    };

    const handleit = () => {
        setMore(false);
    };

    const handleAdd = () => {
        navigate('/addtocard');
    };
    return (
        <div className={cx('detail-content')}>
            <div className={cx('detail-image')}>
                <img src={!failImg ? imgMain : changeImage} alt="detailProduct" className={cx('image-main')} />
                <div className={cx('image-mul')}>
                    {changeImg.map((value, index) => {
                        return (
                            <img
                                key={index}
                                src={value}
                                alt="detailProduct"
                                className={cx('image')}
                                onClick={() => {
                                    handleImg(value);
                                }}
                            />
                        );
                    })}
                </div>
                <DisContentContent
                    dis=" Nam tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam
                    commodo pharetras loremos.Donec pretium egestas sapien et mollis."
                >
                    Busey ipsum dolor sit amet
                </DisContentContent>
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
                        <input className={cx('add')} type="button" value="Add To Cart" onClick={handleAdd} />
                    </div>
                </div>
                <div className={cx('detail-dis')}>
                    <DisContentContent
                        dis=" Nam tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam
                    dolor, elementum etos lobortis des mollis ut risus. Sedcus faucibus an sullamcorper mattis drostique des
                    commodo pharetras loremos.Donec pretium egestas sapien et mollis."
                    >
                        Busey ipsum dolor sit amet
                    </DisContentContent>
                </div>
            </div>
        </div>
    );
};

export default DetailMulImage;
