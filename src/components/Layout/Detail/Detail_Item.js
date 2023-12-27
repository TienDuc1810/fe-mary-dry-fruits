import React, { useEffect, useState } from 'react';
import axios from '@/service/axios';
import classNames from 'classnames/bind';
import styles from './Detail.module.scss';
import BestProductsIndex from '../Main/BestProducts/Best_Product_Index';
import ProductEvaluate from './ProductEvaluate/ProductEvaluate';
import DetailComment from './DetailComment/DetailComment';
import CommentProduct from './CommetProduct/CommentProduct';
import { useShoppingContext } from '@/contexts/Shopping_Context';
import { useParams } from 'react-router-dom';

const cx = classNames.bind(styles);

const DetailItem = () => {
    const id = useParams();

    const { addCartItem, setCartQuantity } = useShoppingContext();
    const [zoneDetails, setZoneDetails] = useState(1);
    const [quantity, setQuantity] = useState(1);
    const [item, setItem] = useState([]);
    const [activeTab, setActiveTab] = useState(0);

    const handleCheckActive = (index) => {
        setActiveTab(index);
        setZoneDetails(index + 1);
    };

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
        window.scrollTo(0, 0);
    }, [id]);

    const addCartItemWithQuantity = () => {
        setCartQuantity(quantity);
        const itemWithQuantity = { ...item, cartQuantity: quantity };
        addCartItem(itemWithQuantity);
    };

    return (
        <div className={cx('detail-container')}>
            <link
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
                rel="stylesheet"
                integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
                crossOrigin="anonymous"
            ></link>
            <div className={cx('detail-wrapper')}>
                <div className={cx('detail-main')}>
                    <div className={cx('detail-outner-image')}>
                        <img src={item.image} alt="detailProduct" className={cx('detail-image')} />
                    </div>
                    <div className={cx('detail-info')}>
                        <h2 className={cx('detail-info-name')}>{item.name}</h2>
                        <p className={cx('detail-info-description')}>{item.description}</p>
                        <div className={cx('detail-info-price')}>
                            <h6 className={cx('detail-info-title')}>Price:</h6>
                            <span className={cx('detail-info-price-amount')}>${item.price}</span>
                        </div>
                        <div className={cx('detail-info-weight')}>
                            <h6 className={cx('detail-info-title')}>Weight:</h6>
                            {item.weight_tags
                                ? item.weight_tags.map((element) => (
                                      <button
                                          key={element.id}
                                          className={cx('detail-info-btn')}
                                          onClick={(e) => handleSelectWeight(e)}
                                          disabled={element.mass !== item.weight ? false : true}
                                          value={element.mass}
                                      >
                                          {element.mass < 1000 ? element.mass + 'gram' : element.mass / 1000 + 'kg'}
                                      </button>
                                  ))
                                : ''}
                        </div>
                        <div className={cx('detail-info-quantity')}>
                            <h6 className={cx('detail-info-title')}>Quantity:</h6>
                            <div className={cx('detail-info-action')}>
                                <button
                                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                    className={cx('detail-info-btn-action')}
                                >
                                    -
                                </button>
                                <p className={cx('detail-info-amount')}>{quantity}</p>
                                <button
                                    onClick={() => setQuantity(quantity + 1)}
                                    className={cx('detail-info-btn-action')}
                                >
                                    +
                                </button>
                            </div>
                        </div>

                        <div className={cx('detail-info-add-cart')}>
                            <button
                                className={cx('detail-info-btn')}
                                value="Add To Cart"
                                onClick={addCartItemWithQuantity}
                            >
                                Add Cart
                            </button>
                        </div>
                        {/* <p className={cx('description')}>***{item.sumary}</p> */}
                    </div>
                </div>

                <div className={cx('detail-description')}>
                    {['Product Description', 'Nutrition Label', 'Reviewer'].map((title, index) => (
                        <button
                            key={index}
                            className={cx('detail-description-btn', { active: activeTab === index })}
                            onClick={() => handleCheckActive(index)}
                        >
                            {title}
                        </button>
                    ))}
                </div>

                <div className={cx('detail-content')}>
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
        </div>
    );
};

export default DetailItem;
