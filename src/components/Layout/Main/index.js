import { NormalBanner, ParallaxBanner } from './BannerSale/Banner_Sale_Index';
import BestProducts from './BestProducts/BestProductsIndex';
import Slide from './Slide/SlideIndex';
import PremiumProducts from './PremiumProducts/Premium_Product_Index';
import Benefit from './Benefit/Benefit_Index';
import CategoryProduct from './CategoryProduct/Category_Product';
import images from '@/assets';

const Main = () => {
    const urlNormalBanner = {
        backgroundImage: `url(${images.br_image_2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    const urlParallaxBanner = {
        backgroundImage: `url(${images.banner_sale})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    return (
        <div>
            <Slide />
            <BestProducts />
            <ParallaxBanner
                image={urlParallaxBanner}
                name={'Healthy Herbs'}
                percent_decrease={10}
                description={'On all Spicy & Herbs'}
                text={
                    'Lorem ipsum has become the industry standard for design mockups and prototypes. By adding a little bit of Latin to a mockup.'
                }
            />
            <CategoryProduct />
            <NormalBanner
                image={urlNormalBanner}
                name={'Cardamom / Clove / Cumin'}
                percent_decrease={50}
                description={'ALL PRODUCTS'}
            />
            <PremiumProducts />
            <Benefit />
        </div>
    );
};

export default Main;
