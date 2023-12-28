import axios from './axios';

const Order = async () => {
    const orderDataUrl = '/api/order/order';

    const headers = {
        'Content-Type': 'application/json',
    };

    const data_order = {
        full_name: 'đức',
        address: 'TP.HCM',
        phone: '123456789',
        transaction: 100,
        subtotal: 500,
        order_items: [
            {
                product_id: 1,
                price: 123,
                weight: 2,
                quantity: 3,
            },
        ],
    };
    try {
        const orderResponse = await axios.post(orderDataUrl, data_order, { headers });

        return {
            success: true,
            orderResponse: orderResponse,
        };
    } catch (error) {
        return {
            success: false,
        };
    }
};

export { Order };
