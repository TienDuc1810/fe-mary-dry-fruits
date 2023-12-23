import { createContext, useContext, useEffect, useState } from 'react';
import { loginUser } from '@/service/User_Service';
import { toast, Flip } from 'react-toastify';


const ShoppingContext = createContext({});

export const useShoppingContext = () => {
    return useContext(ShoppingContext);
};

export const ShoppingContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        const data = localStorage.getItem('shopping_cart');
        return data && typeof data === 'string' ? JSON.parse(data) : data || [];
    });

    useEffect(() => {
        localStorage.setItem('shopping_cart', JSON.stringify(cartItems));
    }, [cartItems]);

    const cartQuantity = cartItems.reduce((quantity, item) => quantity + item.quantity, 0);
    const totalPrice = cartItems.reduce((total, item) => total + item.quantity * item.price, 0);

    const increaseQuantity = (id) => {
        const currentCartItem = cartItems.find((item) => item.id === id);
        if (currentCartItem) {
            const newItems = cartItems.map((item) => {
                if (item.id === id) {
                    return { ...item, quantity: item.quantity + 1 };
                } else {
                    return item;
                }
            });
            setCartItems(newItems);
        }
    };

    const decreaseQuantity = (id) => {
        const currentCartItem = cartItems.find((item) => item.id === id);
        if (currentCartItem) {
            if (currentCartItem.quantity === 1) {
                removeCartItem(id);
                if (cartQuantity === 0) {
                    removePoper();
                }
            } else {
                const newItems = cartItems.map((item) => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity - 1 };
                    } else {
                        return item;
                    }
                });
                setCartItems(newItems);
            }
        }
    };

    const addCartItem = (product) => {
        removePoper();
        if (product) {
            const currentCartItem = cartItems.find((item) => item.id === product.id);
            if (currentCartItem) {
                const newItems = cartItems.map((item) => {
                    if (item.id === product.id) {
                        return { ...item, quantity: item.quantity + 1 };
                    } else {
                        return item;
                    }
                });
                setCartItems(newItems);
                console.log(currentCartItem);
            } else {
                const newItem = { ...product, quantity: 1 };
                setCartItems([...cartItems, newItem]);
            }
        }
    };

    const removeCartItem = (id) => {
        const currentCartItemIndex = cartItems.findIndex((item) => item.id === id);
        const newItems = [...cartItems];
        newItems.splice(currentCartItemIndex, 1);
        setCartItems(newItems);
        if (cartQuantity === 0) {
            removePoper();
        }
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const [remove, setRemove] = useState(true);

    const removePoper = () => {
        setRemove(false);
    };

    const showPoper = () => {
        setRemove(true);
    };

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const infoUser = async () => {
        let res = await loginUser(email, password);

        if (res && res.success === true) {
            toast.success('Login Success', {
                transition: Flip,
                autoClose: 2000,
            });
            let token = res.response.access_token;
            localStorage.setItem('jwt', token);
            
        } else {
            toast.error('Wrong Login Information', {
                transition: Flip,
                autoClose: 2000,
            });
        }
    };
    return (
        <ShoppingContext.Provider
            value={{
                cartItems,
                cartQuantity,
                totalPrice,
                remove,
                email,
                password,
                increaseQuantity,
                decreaseQuantity,
                addCartItem,
                removeCartItem,
                clearCart,
                removePoper,
                showPoper,
                setEmail,
                setPassword,
                infoUser,
            }}
        >
            {children}
        </ShoppingContext.Provider>
    );
};

export default ShoppingContext;
