import CartItem from '@/pages/ShoppingCart/Shopping_Cart_Item';
import { useShoppingContext } from '@/contexts/Shopping_Context';
import classNames from 'classnames/bind';
import styles from './Profile.module.scss';

const cx = classNames.bind(styles);

const OrderComponent = () => {
    const { cartItems, totalPrice } = useShoppingContext();

    return (
        <div>
            <h2 className={cx('profile-detail-heading')}>Order Information</h2>
            {cartItems.map((item) => {
                return <CartItem key={item.id} {...item} />;
            })}
        </div>
    );
};

export default OrderComponent;
