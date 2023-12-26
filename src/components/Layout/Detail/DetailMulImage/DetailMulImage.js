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

const cx = classNames.bind(styles);

const DetailMulImage = ({ product }) => {
    const { addCartItem, increaseQuantity, decreaseQuantity, cartQuantity } = useShoppingContext();
    const [zoneDetails, setZoneDetails] = useState(1);

    const [item, setItem] = useState({
        name: product.name || '',
        id: product.id || '',
        price: product.price || 0,
        weight: product.weight_tags ? product.weight_tags[0].mass : 0,
        
    });

    const handleSetWeight = (e) => {
        setItem({ ...item, weight: parseInt(e.target.value) });
    };

    const fetchData = async () => {
        try {
            const res = await axios.post('api/review/return_review', { product_id: product.id });
            console.log(res);
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
                    <img src={product.image} alt="detailProduct" className={cx('image-main')} />
                </div>
                <div className={cx('detail-tab-dis')}>
                    <div className={cx('detail-tab')}>
                        <h2 className={cx('title')}>{product.name}</h2>
                        <div className={cx('img-mul')}>
                            {[...Array(5)].map((_, i) => (
                                <img
                                    key={i}
                                    src={i < product.star ? starYello : nostar}
                                    alt={i < product.star ? 'star yellow' : 'no star'}
                                />
                            ))}
                        </div>

                        <div className={cx('col')}>
                            <h6>Price:</h6>
                            <span>${product.price}</span>
                        </div>

                        <div className={cx('col')}>
                            <h6>Weight:</h6>
                            {product.weight_tags
                                ? product.weight_tags.map((element) => (
                                      <button
                                          key={element.id}
                                          className={cx('gram')}
                                          onClick={(e) => handleSetWeight(e)}
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
                                <button onClick={() => decreaseQuantity(product.id)}>-</button>
                                <p className={cx('gramPlus')}>{cartQuantity}</p>
                                <button onClick={() => increaseQuantity(product.id)}>+</button>
                            </div>
                        </div>

                        <div className={cx('add-cart')}>
                            <button
                                className={cx('add')}
                                type="button"
                                value="Add To Cart"
                                onClick={() => addCartItem(product)}
                            >
                                Add Cart
                            </button>
                        </div>
                        <p className={cx('description')}>***{product.sumary}</p>
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
                    <div dangerouslySetInnerHTML={{ __html: product.description }} className={cx('plr-40')} />
                ) : (
                    ''
                )}
                {zoneDetails === 2 ? <div dangerouslySetInnerHTML={{ __html: product.nutrition_detail }} /> : ''}
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
