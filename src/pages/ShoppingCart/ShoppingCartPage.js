import classNames from 'classnames/bind';
import styles from './ShoppingCartPage.module.scss';
import Header from '@/components/Layout/Header/HeaderIndex';
import Footer from '@/components/Layout/Footer/FooterIndex';
import Button from '@/components/Button/ButtonIndex';
import images from '@/assets';
import { useState, useEffect } from 'react';
import CartItem from './ShoppingCartItem';

const cx = classNames.bind(styles);

function ShoppingCartPage() {
    const [totalPrice, setTotalPrice] = useState(948);
    const [transport, setTransport] = useState(13);
    const [discount, setDiscount] = useState(17);
    const [total, setTotal] = useState(0);

    const amount = totalPrice + transport;

    useEffect(() => {
        setTotal(amount - amount * (discount / 100));
    }, [totalPrice, transport, discount]);

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
                                    <h4>QUANTITY</h4>
                                    <h4>PRICE</h4>
                                    <h4>ACTION</h4>
                                </div>
                            </div>
                            <CartItem/>
                            <CartItem/>
                            <CartItem/>
                        </div>
                        <div className={cx('cart-option')}>
                            <Button text={'Continue shopping'} blackText />
                            <Button text={'Make Purchase'} blackText />
                        </div>
                        <div className={cx('cart-transport')}>
                            <span>icon</span>
                            <span>Free Delivery within 1-2 weeks</span>
                        </div>
                    </div>

                    <div className={cx('cart-info-pay')}>
                        <div className={cx('cart-coupon')}>
                            <span>Have coupon?</span>
                            <div>
                                <input type="text" className={cx('cart-coupon-input')} placeholder="Coupon code" />
                                <button className={cx('cart-coupon-btn')}>Apply</button>
                            </div>
                        </div>
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
                                        <span>{transport}</span>
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
                    <div className={cx('cart-info-pay')}>
                        
                        <div className={cx('cart-bill')}>
                            <div className={cx('cart-bill-outner')}>
                                <div className={cx('cart-bill-detail')}>
                                    <span>Name:</span>
                                    <span>
                                        <span>Tiến Đức</span>
                                        <span className={cx('cart-bill-unit')}></span>
                                    </span>
                                </div>
                                <div className={cx('cart-bill-detail')}>
                                    <span>Email:</span>
                                    <span>
                                        <span>dotienduc@gmail.com</span>
                                        <span className={cx('cart-bill-unit')}></span>
                                    </span>
                                </div>
                                <div className={cx('cart-bill-detail')}>
                                    <span>Address:</span>
                                    <span>
                                        <span>70 Duong Dinh Hoi</span>
                                        <span className={cx('cart-bill-percent')}></span>
                                    </span>
                                </div>
                                <div className={cx('cart-bill-detail')}>
                                    <span>Phone:</span>
                                    <span>
                                        <span>0123456789</span>
                                        <span className={cx('cart-bill-unit')}></span>
                                    </span>
                                </div>
                                <div className={cx('cart-bill-outner-btn')}>
                                    <button className={cx('cart-bill-btn')}>Change</button>
                                </div>
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
