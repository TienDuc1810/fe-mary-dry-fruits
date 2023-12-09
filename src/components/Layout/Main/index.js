import { NormalBanner,ParallaxBanner } from "./BannerSale/BannerSaleIndex";
import BestProductsIndex from "./BestProducts/BestProductsIndex";
import SlideIndex from "./Slide/SlideIndex";
import PremiumProductsIndex from "./PremiumProducts/PremiumProductsIndex";

import classNames from 'classnames/bind';
import styles from './index.module.scss';

const cx = classNames.bind(styles);

const Main = () => {
    return ( 
        <div className={cx('container')}>
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