import { createContext, useContext, useEffect, useState } from 'react';

const ShoppingContext = createContext({});

export const useShoppingContext = () => {
    return useContext(ShoppingContext);
};

export const ShoppingContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        const data = localStorage.getItem('shopping_cart');
        return data && typeof data === 'string' ? JSON.parse(data) : data || [];
    });

    useEffect(  () => {
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
            if (currentCartItem.quantity === 0) {
                removeCartItem(id);
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
    };

    const clearCart = () => {
        setCartItems([]);
    };

    return (
        <ShoppingContext.Provider
            value={{
                cartItems,
                cartQuantity,
                totalPrice,
                increaseQuantity,
                decreaseQuantity,
                addCartItem,
                removeCartItem,
                clearCart,
            }}
        >
            {children}
        </ShoppingContext.Provider>
    );
};

export default ShoppingContext;
