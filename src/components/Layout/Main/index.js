import { NormalBanner, ParallaxBanner } from './BannerSale/BannerSaleIndex';
import BestProductsIndex from './BestProducts/BestProductsIndex';
import SlideIndex from './Slide/SlideIndex';
import PremiumProductsIndex from './PremiumProducts/PremiumProductsIndex';
import BenefitIndex from './Benefit/BenefitIndex';
import { ArrowRotate, Suitcase, Clock } from '@/icons';

import classNames from 'classnames/bind';
import styles from './index.module.scss';

const cx = classNames.bind(styles);

const Main = () => {
    return (
        <div className={cx('container')}>
            <SlideIndex />
            <BestProductsIndex />
            <ParallaxBanner />
            <BestProductsIndex />
            <NormalBanner />
            <PremiumProductsIndex />
            <div className={cx('wrapper')}>
                <div className={cx('benefit')}>
                    <BenefitIndex
                        title={'Money Back Guarantee'}
                        description={
                            'Consecteur adipisicing elitsed do eiusmod tempor incididunt ulabore et dolore ulabore et dolore dolor sit amet.'
                        }
                        icon={<ArrowRotate/>}
                    />
                    <BenefitIndex
                        title={'Free Shipping'}
                        description={
                            'Sit amet dolor consecteur adipisicing elitsed do eiusmod tempor incididunt ulabore et dolore ulabore et dolore.'
                        }
                        icon={<Suitcase/>}
                    />
                    <BenefitIndex
                        title={'24/7 Customer Service'}
                        description={
                            'Dolor sit amet consecteur adipisicing elitsed do eiusmod tempor incididunt ulabore et dolore ulabore et dolore.'
                        }
                        icon={<Clock/>}
                    />
                </div>
            </div>
        </div>
    );
};

export default Main;
