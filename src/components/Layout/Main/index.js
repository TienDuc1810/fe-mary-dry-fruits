import { NormalBanner,ParallaxBanner } from "./BannerSale/BannerSaleIndex";
import BestProductsIndex from "./BestProducts/BestProductsIndex";
import SlideIndex from "./Slide/SlideIndex";
import PremiumProductsIndex from "./PremiumProducts/PremiumProductsIndex";
const Main = () => {
    return ( 
        <div>
            <SlideIndex/>
            <BestProductsIndex/>
            <ParallaxBanner/>
            <BestProductsIndex/>
            <NormalBanner/>
            <PremiumProductsIndex/>
        </div>
     );
}

export default Main;