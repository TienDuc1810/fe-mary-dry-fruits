import classNames from 'classnames/bind';
import styles from './Cart.module.scss';
import Button from '@/components/Button/ButtonIndex';
import CartItem from '@/pages/ShoppingCart/Shopping_Cart_Item';
import { useShoppingContext } from '@/contexts/Shopping_Context';

const cx = classNames.bind(styles);

const Cart = () => {
    const { cartItems, totalPrice, removePoper } = useShoppingContext();

    return (
        <div className={cx('cart-wrapper')}>
            {cartItems.map((item) => {
                return (
                    <div key={item.id}>
                        <CartItem {...item} />
                    </div>
                );
            })}
            <div className={cx('cart-checkout')}>
                <span className={cx('cart-total')}>Total: {totalPrice} $</span>
                <span onClick={removePoper}>
                    <Button text={'Checkout'} blackText link={'/cart'} />
                </span>
            </div>
        </div>
    );
};

export default Cart;
