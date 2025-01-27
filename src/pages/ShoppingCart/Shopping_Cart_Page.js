import classNames from 'classnames/bind';
import styles from './Shopping_Cart.module.scss';
import Header from '@/components/Layout/Header/Header_Index';
import Button from '@/components/Button/ButtonIndex';
import CartItem from './Shopping_Cart_Item';
import ShoppingCartBill from './Shopping_Cart_Bill';
import { useShoppingContext } from '@/contexts/Shopping_Context';
import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';

const cx = classNames.bind(styles);

function ShoppingCartPage() {
    const { cartItems } = useShoppingContext();
    const [show, setShow] = useState(false);

    return (
        <>
            <Header title={'Shopping Cart'}/>
            <div className={cx('cart-container')}>
                <div className={cx('cart-wrapper')}>
                    <div className={cx('cart-info-product')}>
                        <div className={cx('cart-info-container')}>
                            <div className={cx('cart-outner-title')}>
                                <div className={cx('cart-title')}>
                                    <h4 className={cx('cart-title-1')}>PRODUCT</h4>
                                    <h4 className={cx('cart-title-2')}>NAME</h4>
                                    <h4 className={cx('cart-title-3')}>SIZE</h4>
                                    <h4 className={cx('cart-title-4')}>QUANTITY</h4>
                                    <h4 className={cx('cart-title-5')}>SUBTOTAL</h4>
                                    <h4 className={cx('cart-title-6')}>ACTION</h4>
                                </div>
                            </div>
                            {cartItems.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <CartItem {...item} />
                                    </div>
                                );
                            })}
                        </div>
                        <div className={cx('cart-option')}>
                            <Button text={'Continue shopping'} blackText link={'/product'} />
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
                                <span className={cx('cart-transport-text')}>Free Delivery On Orders $20.00 Or More </span>
                            </div>
                        ) : null}
                    </div>

                    <div className={cx('cart-info-pay')}>
                        
                        <ShoppingCartBill />
                    </div>
                </div>
            </div>
        </>
    );
}

export default ShoppingCartPage;
