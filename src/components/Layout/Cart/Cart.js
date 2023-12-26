import classNames from 'classnames/bind';
import styles from './Cart.module.scss';
import Button from '@/components/Button/ButtonIndex';
import { toast, Flip } from 'react-toastify';
import CartItem from '@/pages/ShoppingCart/Shopping_Cart_Item';
import { useShoppingContext } from '@/contexts/Shopping_Context';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

const Cart = () => {
    const { cartItems, totalPrice, removePoper } = useShoppingContext();
    const navigate = useNavigate();

    const handleCheckLogin = () =>{
        let check = localStorage.getItem('jwt');
        if(!check){
            toast.error('You need login to checkout this cart!', {
                transition: Flip,
                autoClose: 2000,
            });
            navigate('/account/login')
        }else{
            navigate('/cart')
        }
        removePoper()
    }

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
                <span className={cx('cart-total')}></span>
                <span onClick={()=>handleCheckLogin()}>
                    <Button text={'Checkout'} blackText link={'/cart'} />
                </span>
            </div>
        </div>
    );
};

export default Cart;
