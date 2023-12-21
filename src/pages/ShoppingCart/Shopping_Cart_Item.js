import classNames from 'classnames/bind';
import styles from './Shopping_Cart.module.scss';
import { useState } from 'react';
import { useShoppingContext } from '@/contexts/Shopping_Context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';

const cx = classNames.bind(styles);

function ShoppingCartItem({ id, name, price, quantity, image }) {
    const {increaseQuantity, decreaseQuantity, removeCartItem} = useShoppingContext();

    const [favourite, setFavourite] = useState(false);

    return (
        <div className={cx('cart-item-container')}>
            <div className={cx('cart-item-outner-image')}>
                <img src={image} alt="cart_image" className={cx('cart-item-image')} />
            </div>
            <div className={cx('cart-item-info')}>
                <p className={cx('cart-item-name')}>{name}</p>
                <p className={cx('cart-item-size')}>Size: 1kg</p>
                <p className={cx('cart-item-brand')}>Cost: {price}$</p>
            </div>
            <div className={cx('cart-item-quantity')}>
                <button className={cx('cart-item-up')} onClick={()=>decreaseQuantity(id)}>
                    <FontAwesomeIcon icon={icon({ name: 'minus', style: 'solid' })} className={cx('minus-icon')} />
                </button>
                <span className={cx('cart-item-number')}>{quantity}</span>
                <button className={cx('cart-item-down')} onClick={()=>increaseQuantity(id)}>
                    <FontAwesomeIcon icon={icon({ name: 'plus', style: 'solid' })} className={cx('plus-icon')} />
                </button>
            </div>
            <div className={cx('cart-item-price')}>
                <span>{price * quantity}$</span>
            </div>
            <div className={cx('cart-item-action')}>
                <button className={cx('cart-item-btn')} onClick={() => setFavourite(!favourite)}>
                    <FontAwesomeIcon
                        icon={icon({ name: 'heart', style: 'solid' })}
                        className={cx('heart-icon', { favourite: favourite })}
                    />
                </button>
                <button className={cx('cart-item-btn')} onClick={()=>removeCartItem(id)}>Remove</button>
            </div>
        </div>
    );
}

export default ShoppingCartItem;
