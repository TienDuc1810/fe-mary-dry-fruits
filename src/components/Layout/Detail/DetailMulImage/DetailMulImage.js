import React, { useEffect, useState } from 'react';
import axios from '@/service/axios';
import classNames from 'classnames/bind';
import styles from './DetailMulImage.module.scss';
import nostar from '@/Images/icont/star-line.svg';
import starYello from '@/Images/icont/star (1).svg';
import BestProductsIndex from '../../Main/BestProducts/Best_Product_Index';
import ProductEvaluate from '../ProductEvaluate/ProductEvaluate';
import DetailComment from '../DetailComment/DetailComment';
import CommentProduct from '../CommetProduct/CommentProduct';
import { useShoppingContext } from '@/contexts/Shopping_Context';
import { useParams } from 'react-router-dom';

const cx = classNames.bind(styles);

const DetailMulImage = () => {
    const id = useParams();

    const { addCartItem, increaseQuantity, decreaseQuantity, cartQuantity } = useShoppingContext();
    const [zoneDetails, setZoneDetails] = useState(1);
    const [item, setItem] = useState([]);

    const handleSelectWeight = (e) => {
        setItem({ ...item, weight: parseInt(e.target.value) });
    };

    const fetchData = async () => {
        try {
            const res = await axios.post('api/product/product_details', { product_id: id });
            setItem({ ...res.data[0], weight: 250 });
        } catch (error) {
            console.log('error', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className={cx('detail-content')}>
            <link
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
                rel="stylesheet"
                integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
                crossOrigin="anonymous"
            ></link>
            <div className={cx('detail-head')}>
                <div className={cx('detail-image')}>
                    <img src={item.image} alt="detailProduct" className={cx('image-main')} />
                </div>
                <div className={cx('detail-tab-dis')}>
                    <div className={cx('detail-tab')}>
                        <h2 className={cx('title')}>{item.name}</h2>
                        <div className={cx('img-mul')}>
                            {[...Array(5)].map((_, i) => (
                                <img
                                    key={i}
                                    src={i < item.star ? starYello : nostar}
                                    alt={i < item.star ? 'star yellow' : 'no star'}
                                />
                            ))}
                        </div>

                        <div className={cx('col')}>
                            <h6>Price:</h6>
                            <span>${item.price}</span>
                        </div>

                        <div className={cx('col')}>
                            <h6>Weight:</h6>
                            {item.weight_tags
                                ? item.weight_tags.map((element) => (
                                      <button
                                          key={element.id}
                                          className={cx('gram')}
                                          onClick={(e) => handleSelectWeight(e)}
                                          disabled={element.mass !== item.weight ? false : true}
                                          value={element.mass}
                                      >
                                          {element.mass < 1000 ? element.mass + 'gram' : element.mass / 1000 + 'kg'}
                                      </button>
                                  ))
                                : ''}
                        </div>
                        <div className={cx('col')}>
                            <h6>Quantity:</h6>
                            <div className={cx('plus')}>
                                <button onClick={() => decreaseQuantity(item.id)}>-</button>
                                <p className={cx('gramPlus')}>{cartQuantity}</p>
                                <button onClick={() => increaseQuantity(item.id)}>+</button>
                            </div>
                        </div>

                        <div className={cx('add-cart')}>
                            <button
                                className={cx('add')}
                                type="button"
                                value="Add To Cart"
                                onClick={() => addCartItem(item)}
                            >
                                Add Cart
                            </button>
                        </div>
                        <p className={cx('description')}>***{item.sumary}</p>
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
                {zoneDetails === 1 ? (
                    <div dangerouslySetInnerHTML={{ __html: item.description }} className={cx('plr-40')} />
                ) : (
                    ''
                )}
                {zoneDetails === 2 ? <div dangerouslySetInnerHTML={{ __html: item.nutrition_detail }} /> : ''}
                {zoneDetails === 3 ? (
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
