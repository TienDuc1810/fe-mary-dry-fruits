import axios from './axios';

const Order = async (data_order) => {
    const orderDataUrl = '/api/order/order';

    const headers = {
        'Content-Type': 'application/json',
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
