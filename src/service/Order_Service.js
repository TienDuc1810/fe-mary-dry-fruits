import axios from './axios';




const placeOrder = async ( ) => {
    const orderDataUrl = '/api/order/order';
    
    const headers = {
        'Content-Type': 'application/json',
    };

    const orderData = {
        email: "test@gmail.com",
        full_name: "duc",
        address: "TP.HCM",
        phone: '123456789',
        transaction: "ABC",
        subtotal: 500,
    };

    const orderItems = [
        {
          product_id: 1,
          price: 123,
          weight: 2,
          quantity: 3,
        },
        {
          product_id: 2,
          price: 456,
          weight: 1,
          quantity: 2,
        },
        
      ];
    

    try {
        const orderResponse = await axios.post(orderDataUrl, orderData,orderItems , { headers });
        
        return {
            success: true,
            orderResponse: orderResponse
        };
    } catch (error) {
        return {
            success: false,
        };
    }
}

export { placeOrder }





 

    

   






