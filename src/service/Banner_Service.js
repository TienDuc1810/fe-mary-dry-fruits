import axios from './axios';

const Banner = async () => {
    const BannerUrl = '/api/banner_and_slide/banner_and_slide';

    try {
        const response = await axios.get(BannerUrl);
        return {
            response: response.banner_and_slide,
            success: true,
        };
        
    } catch (error) {
        return {
            success: false,
        };
    }
};

export { Banner };