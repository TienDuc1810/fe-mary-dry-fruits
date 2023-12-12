import classNames from 'classnames/bind';
import styles from './ShoppingCartPage.module.scss';
import images from '@/assets';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';

const cx = classNames.bind(styles);

function ShoppingCartItem() {
    const [quantity, setQuantity] = useState(1);
    const [favourite, setFavourite] = useState(false);

    console.log(favourite)
    const updateQuantity = (newQuantity) => {
        setQuantity((prevQuantity) => Math.max(newQuantity, 0));
    };

    return (
        <div className={cx('cart-item-container')}>
            <div className={cx('cart-item-outner-image')}>
                <img src={images.product_1} alt="cart_image" className={cx('cart-item-image')} />
            </div>
            <div className={cx('cart-item-info')}>
                <p className={cx('cart-item-name')}>Black Cardamom</p>
                <p className={cx('cart-item-size')}>Size: 1kg</p>
                <p className={cx('cart-item-brand')}>Brand: Healthy Herbs</p>
            </div>
            <div className={cx('cart-item-quantity')}>
                <button className={cx('cart-item-up')} onClick={() => updateQuantity(quantity - 1)}>
                <FontAwesomeIcon
                        icon={icon({ name: 'minus', style: 'solid' })}
                        className={cx('minus-icon')}
                    />
                </button>
                <span className={cx('cart-item-number')}>{quantity}</span>
                <button className={cx('cart-item-down')} onClick={() => updateQuantity(quantity + 1)}>
                <FontAwesomeIcon
                        icon={icon({ name: 'plus', style: 'solid' })}
                        className={cx('plus-icon')}
                    />
                </button>
            </div>
            <div className={cx('cart-item-price')}>
                <span>100$</span>
            </div>
            <div className={cx('cart-item-action')}>
                <button className={cx('cart-item-btn')} onClick={()=>setFavourite(!favourite)}>
                    <FontAwesomeIcon
                        icon={icon({ name: 'heart', style: 'solid' })}
                        className={cx('heart-icon', { favourite: favourite })}
                    />
                </button>
                <button className={cx('cart-item-btn')}>Remove</button>
            </div>
        </div>
    );
}

export default ShoppingCartItem;
