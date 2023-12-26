import axios from './axios';

const Banner = async (number) => {
    const BannerUrl = `/api/banner_and_slide/banner_and_slide?position=${number}`;

    const headers = {
        'Content-Type': 'application/json',
    };

    try {
        const response = await axios.post(BannerUrl, { headers });
        
        return {
            response: response.data,
            success: true,
        };
    } catch (error) {
        return {
            success: false,
        };
    }
};

export { Banner };
