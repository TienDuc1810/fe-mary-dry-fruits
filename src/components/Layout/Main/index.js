import { NormalBanner, ParallaxBanner } from './BannerSale/Banner_Sale_Index';
import BestProducts from './BestProducts/Best_Product_Index';
import Slide from './Slide/Slider_Index';
import PremiumProducts from './PremiumProducts/Premium_Product_Index';
import Benefit from './Benefit/Benefit_Index';
import CategoryProduct from './CategoryProduct/Category_Product';
import images from '@/assets';
import { useEffect, useState } from 'react';
import { topProduct } from '@/service/Product_Service';
import { Banner } from '@/service/Banner_Service';
import FadeLoader from 'react-spinners/FadeLoader';
import classNames from 'classnames/bind';
import styles from '@/components/GlobalStyles/GlobalStyles.scss';

const cx = classNames.bind(styles);

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

    const [products, setProducts] = useState([]);
    const [banners, setBanners] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const resBanner = await Banner();
                const resTopProduct = await topProduct();

                
                if (resBanner.success && resBanner.response){
                    setBanners(resBanner.response)
                    console.log(resBanner.response)
                }

                if (resTopProduct.success && resTopProduct.response) {
                    setProducts(resTopProduct.response);
                }

            } catch (error) {
                console.error('Error fetching top products:', error);
                setProducts([]);
            } finally {
                setTimeout(() => {
                    setLoading(false);
                }, 1000);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {loading === true ? (
                <div className={cx('loading-container')}>
                    <FadeLoader
                        color="#1877f2"
                        loading={loading}
                        size={30}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                    />
                    <div>Loading Data...</div>
                </div>
            ) : (
                <div>
                    <Slide banners={banners}/>
                    <BestProducts products={products} />
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
            )}
        </div>
    );
};

export default Main;
