import axios from './axios';

const topProduct = async () => {
    const topProductUrl = '/api/product/highest_rating_products';

    try {
        const response = await axios.get(topProductUrl);
        return {
            response: response.top10Product,
            success: true,
        };
    } catch (error) {
        return {
            success: false,
        };
    }
};

const premiumProduct = async () => {
    const premiumProductUrl =  '/api/product/featured_products';

    try {
        const response = await axios.get(premiumProductUrl);
        return {
            response: response.featuredProduct,
            success: true,
        };
    } catch (error) {
        return {
            success: false,
        };
    }
}
export { topProduct, premiumProduct };
