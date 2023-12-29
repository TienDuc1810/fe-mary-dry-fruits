import classNames from 'classnames/bind';
import styles from './Shopping_Cart.module.scss';
import images from '@/assets';
import { useShoppingContext } from '@/contexts/Shopping_Context';
import { useState, useEffect } from 'react';
import { Order } from '@/service/Order_Service';

const cx = classNames.bind(styles);

function ShoppingCartBill() {
    const [discount, setDiscount] = useState(10);
    const [total, setTotal] = useState(0);   
    const { totalPrice } = useShoppingContext();

    useEffect(() => {
        setTotal((totalPrice * 2.5) - totalPrice * (discount / 100));
    }, [totalPrice, discount]);

    const handlePayBill = async () => {
        await Order();
    }

    return (
        <div className={cx('cart-bill')}>
            <div className={cx('cart-bill-outner')}>
                <div className={cx('cart-bill-detail')}>
                    <span>Sub Total:</span>
                    <span>
                        <span className={cx('cart-bill-unit')}>$</span>
                        <span>{total.toFixed(2)}</span>
                    </span>
                </div>
                <div className={cx('cart-bill-detail')}>
                    <span>Transport:</span>
                    <span>
                        <span>0</span>
                        <span className={cx('cart-bill-unit')}>$</span>
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
                        <span className={cx('cart-bill-unit')}>$</span>
                        <span>{total.toFixed(2)}</span>
                    </span>
                </div>
                <div className={cx('cart-bill-outner-btn')} onClick={()=>handlePayBill()}>
                    <button className={cx('cart-bill-btn')}>Pay</button>
                </div>
            </div>

            <div className={cx('cart-bill-card')}>
                <img src={images.paypal} alt="payment card" width={'50px'} />
                <img src={images.visa} alt="payment card" width={'50px'} />
                <img src={images.mastercard} alt="payment card" width={'50px'} />
            </div>
        </div>
    );
}

export default ShoppingCartBill;
