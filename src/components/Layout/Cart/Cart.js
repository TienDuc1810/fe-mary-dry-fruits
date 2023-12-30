import classNames from 'classnames/bind';
import styles from './Cart.module.scss';
import Button from '@/components/Button/ButtonIndex';
import { toast, Flip } from 'react-toastify';
import CartItem from '@/pages/ShoppingCart/Shopping_Cart_Item';
import { useShoppingContext } from '@/contexts/Shopping_Context';
import { useNavigate } from 'react-router-dom';
import { dataUser } from '@/service/User_Service';
import { Order } from '@/service/Order_Service';

const cx = classNames.bind(styles);

const Cart = () => {
    const { cartItems, totalPrice, removePoper } = useShoppingContext();
    const navigate = useNavigate();

    const handleCheckLogin = async () => {
        removePoper();
        let check = localStorage.getItem('jwt');
        if (!check) {
            toast.error('You need login to checkout this cart!', {
                transition: Flip,
                autoClose: 2000,
            });
            navigate('/account/login');
        } else {
            try {
                const res = await dataUser();
                if (res && res.success === true) {
                    const orderItems = cartItems.map((item) => ({
                        product_id: item.id,
                        price: item.price,
                        weight: item.weight,
                        quantity: item.addQuantity,
                    }));

                    const data_order = {
                        full_name: res.response.full_name,
                        address: res.response.address,
                        phone: res.response.phone,
                        transaction: 100,
                        subtotal: totalPrice,
                        order_items: orderItems,
                    };

                    try {
                        const res = await Order(data_order);
                        if (res && res.success === true) {
                            navigate('/cart');
                        }
                    } catch (error) {
                        console.error(error);
                    }
                }
            } catch (error) {
                console.log(error);
            }
        }
    };

    return (
        <>
            <div className={cx('cart-container')}>
                <div className={cx('cart-wrapper')}>
                    {cartItems.map((item, index) => {
                        return (
                            <div key={index}>
                                <CartItem {...item} />
                            </div>
                        );
                    })}
                </div>
                <div className={cx('cart-checkout')}>
                    <span className={cx('cart-total')}>Totol Price: ${totalPrice.toFixed(2)}</span>
                    <span onClick={() => handleCheckLogin()}>
                        <Button text={'Checkout'} blackText link={'/cart'} />
                    </span>
                </div>
            </div>
        </>
    );
};

export default Cart;
