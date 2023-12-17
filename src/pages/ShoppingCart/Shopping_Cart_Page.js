import classNames from 'classnames/bind';
import styles from './Shopping_Cart.module.scss';
import Header from '@/components/Layout/Header/HeaderIndex';
import Footer from '@/components/Layout/Footer/Footer_Index';
import Button from '@/components/Button/ButtonIndex';
import images from '@/assets';
import CartItem from './Shopping_Cart_Item';
import CartInfoUser from './Shopping_Cart_Info_User';

import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function ShoppingCartPage() {
    const [totalPrice, setTotalPrice] = useState(900);
    const [discount, setDiscount] = useState(10);
    const [total, setTotal] = useState(0);
    const [show, setShow] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        setTotal(totalPrice - totalPrice * (discount / 100));
    }, [totalPrice, discount]);

    return (
        <>
            <Header />
            <div className={cx('cart-container')}>
                <div className={cx('cart-wrapper')}>
                    <div className={cx('cart-info-product')}>
                        <div className={cx('cart-info-container')}>
                            <div className={cx('cart-outner-title')}>
                                <div className={cx('cart-title')}>
                                    <h4 className={cx('cart-title-1')}>PRODUCT</h4>
                                    <h4 className={cx('cart-title-2')}>NAME</h4>
                                    <h4 className={cx('cart-title-3')}>QUANTITY</h4>
                                    <h4 className={cx('cart-title-4')}>PRICE</h4>
                                    <h4 className={cx('cart-title-5')}>ACTION</h4>
                                </div>
                            </div>
                            <CartItem />
                            <CartItem />
                            <CartItem />
                        </div>
                        <div className={cx('cart-option')}>
                            <Button text={'Continue shopping'} blackText link={'/product'}/>
                            <span onClick={() => setShow(!show)}>
                                <Button text={'Special Offers'} blackText />
                            </span>
                        </div>
                        {show === false ? (
                            <div className={cx('cart-transport-normal')}>
                                <span>
                                    <FontAwesomeIcon
                                        icon={icon({ name: 'truck', style: 'solid' })}
                                        className={cx('truck-icon')}
                                    />
                                </span>
                                <span className={cx('cart-transport-text')}>Free Delivery within 1-2 weeks</span>
                            </div>
                        ) : null}
                    </div>

                    <div className={cx('cart-info-pay')}>
                        <CartInfoUser />
                        <div className={cx('cart-bill')}>
                            <div className={cx('cart-bill-outner')}>
                                <div className={cx('cart-bill-detail')}>
                                    <span>Total Price:</span>
                                    <span>
                                        <span>{totalPrice}</span>
                                        <span className={cx('cart-bill-unit')}>USD</span>
                                    </span>
                                </div>
                                <div className={cx('cart-bill-detail')}>
                                    <span>Transport:</span>
                                    <span>
                                        <span>0</span>
                                        <span className={cx('cart-bill-unit')}>USD</span>
                                    </span>
                                </div>
                                <div className={cx('cart-bill-detail')}>
                                    <span>Discount:</span>
                                    <span>
                                        <span>- {discount}</span>
                                        <span className={cx('cart-bill-percent')}>%</span>
                                    </span>
                                </div>
                                <div className={cx('cart-bill-detail')}>
                                    <span>Total:</span>
                                    <span>
                                        <span>{total.toFixed(1)}</span>
                                        <span className={cx('cart-bill-unit')}>USD</span>
                                    </span>
                                </div>
                                <div className={cx('cart-bill-outner-btn')}>
                                    <button className={cx('cart-bill-btn')}>Pay</button>
                                </div>
                            </div>

                            <div className={cx('cart-bill-card')}>
                                <img src={images.paypal} alt="payment card" width={'50px'} />
                                <img src={images.visa} alt="payment card" width={'50px'} />
                                <img src={images.mastercard} alt="payment card" width={'50px'} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default ShoppingCartPage;
