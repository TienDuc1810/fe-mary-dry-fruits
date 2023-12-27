import classNames from 'classnames/bind';
import styles from './Shopping_Cart.module.scss';
import { useShoppingContext } from '@/contexts/Shopping_Context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import { useState } from 'react';

const cx = classNames.bind(styles);

function ShoppingCartItem({ id, name, price, quantity, image, weight_tags, weight }) {
    const { increaseQuantity, decreaseQuantity, removeCartItem, cartQuantity } = useShoppingContext();

    const [selectedWeight, setSelectedWeight] = useState(weight);

    const handleWeightChange = (event) => {
        setSelectedWeight(parseFloat(event.target.value));
    };

    return (
        <div className={cx('cart-item-container')}>
            <div className={cx('cart-item-outner-image')}>
                <img src={image} alt="cart_image" className={cx('cart-item-image')} />
            </div>
            <div className={cx('cart-item-info')}>
                <p className={cx('cart-item-name')}>{name}</p>
                <p className={cx('cart-item-brand')}>Cost: {price}$</p>
            </div>
            <div className={cx('cart-item-size')}>
                <select className={cx('cart-item-select')} value={selectedWeight} onChange={handleWeightChange}>
                    {weight_tags.map((element, index) => {
                        return (
                            <option value={element.mass} key={index}>
                                {element.mass < 1000 ? element.mass + 'gram' : element.mass / 1000 + 'kg'}
                            </option>
                        );
                    })}
                </select>
            </div>
            <div className={cx('cart-item-quantity')}>
                <button className={cx('cart-item-up')} onClick={() => decreaseQuantity(id)}>
                    <FontAwesomeIcon icon={icon({ name: 'minus', style: 'solid' })} className={cx('minus-icon')} />
                </button>
                <span className={cx('cart-item-number')}>{cartQuantity}</span>
                <button className={cx('cart-item-down')} onClick={() => increaseQuantity(id)}>
                    <FontAwesomeIcon icon={icon({ name: 'plus', style: 'solid' })} className={cx('plus-icon')} />
                </button>
            </div>
            <div className={cx('cart-item-price')}>
                <span>{(price * (selectedWeight / 100) * cartQuantity).toFixed(2)} $</span>
            </div>
            <div className={cx('cart-item-action')}>
                <button className={cx('cart-item-btn')} onClick={() => removeCartItem(id)}>
                    Remove
                </button>
            </div>
        </div>
    );
}

export default ShoppingCartItem;
