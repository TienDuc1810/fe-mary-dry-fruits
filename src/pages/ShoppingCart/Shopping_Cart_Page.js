import classNames from 'classnames/bind';
import styles from './Shopping_Cart.module.scss';
import Header from '@/components/Layout/Header/HeaderIndex';
import Footer from '@/components/Layout/Footer/FooterIndex';
import Button from '@/components/Button/ButtonIndex';
import images from '@/assets';
import { useState, useEffect } from 'react';
import CartItem from './Shopping_Cart_Item';
import CartInfoUser from './Shopping_Cart_Info_User';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';

const cx = classNames.bind(styles);

function ShoppingCartPage() {
    const [totalPrice, setTotalPrice] = useState(948);
    const [transport, setTransport] = useState(0);
    const [discount, setDiscount] = useState(17);
    const [total, setTotal] = useState(0);
    const [transportOption, setTransportOption] = useState(false);
    const [transportCheck, setTransportCheck] = useState(false);
    const [transportCheckIcon1, setTransportCheckIcon1] = useState(false);
    const [transportCheckIcon2, setTransportCheckIcon2] = useState(false);

    const amount = totalPrice + transport;

    useEffect(() => {
        setTotal(amount - amount * (discount / 100));
    }, [totalPrice, transport, discount]);

    const handleChoiceTransport = () => {
        setTransport(0);
        setTransportCheck(!transportCheck);
        setTransportCheckIcon1(!transportCheckIcon1);
    };

    const handleChoiceFastTransport = () => {
        setTransport(5);
        setTransportCheck(!transportCheck);
        setTransportCheckIcon2(!transportCheckIcon2);
    };

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
                            <CartItem />
                            <CartItem />
                            <CartItem />
                        </div>
                        <div className={cx('cart-option')}>
                            <Button text={'Continue shopping'} blackText />
                            <span onClick={() => setTransportOption(!transportOption)}>
                                <Button text={'Make Purchase'} blackText />
                            </span>
                        </div>
                        {transportOption === true ? (
                            <>
                                <div className={cx('cart-transport-normal')} onClick={() => handleChoiceTransport()}>
                                    <span>
                                        <FontAwesomeIcon
                                            icon={icon({ name: 'truck', style: 'solid' })}
                                            className={cx('truck-icon')}
                                        />
                                    </span>
                                    <span className={cx('cart-transport-text')}>Free Delivery within 1-2 weeks</span>
                                    <span className={cx('cart-transport-check')}>
                                        <input type="radio" id="transport" checked={transportCheck} hidden />
                                        <label htmlFor="transport" className={cx('cart-transport-btn')}>
                                            {transportCheckIcon1 === true ? (
                                                <FontAwesomeIcon
                                                    icon={icon({ name: 'check', style: 'solid' })}
                                                    className={cx('check-icon')}
                                                />
                                            ) : null}
                                        </label>
                                    </span>
                                </div>
                                <div className={cx('cart-transport-fast')} onClick={() => handleChoiceFastTransport()}>
                                    <span>
                                        <FontAwesomeIcon
                                            icon={icon({ name: 'truck-fast', style: 'solid' })}
                                            className={cx('truck-icon')}
                                        />
                                    </span>
                                    <span className={cx('cart-transport-text')}>Fast Delivery within 3 days</span>
                                    <span className={cx('cart-transport-check')}>
                                        <input type="radio" id="transport" checked={!transportCheck} hidden />
                                        <label htmlFor="transport" className={cx('cart-transport-btn')}>
                                            {transportCheckIcon2 === true ? (
                                                <FontAwesomeIcon
                                                    icon={icon({ name: 'check', style: 'solid' })}
                                                    className={cx('check-icon')}
                                                />
                                            ) : null}
                                        </label>
                                    </span>
                                </div>
                            </>
                        ) : null}
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
                    <CartInfoUser />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default ShoppingCartPage;
