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
                            "Our Money Back Guarantee promises a refund if you're not completely satisfied. Shop worry-free with us."
                        }
                        icon={<ArrowRotate />}
                    />
                    <BenefitIndex
                        title={'Free Shipping'}
                        description={
                            'Enjoy the convenience of Free Delivery, bringing the best products right to your door at no additional cost.'
                        }
                        icon={<Suitcase />}
                    />
                    <BenefitIndex
                        title={'24/7 Customer Service'}
                        description={
                            'Our  team is ready to assist you around 24/7, ensuring a seamless and satisfying shopping journey.'
                        }
                        icon={<Clock />}
                    />
                </div>
            </div>
        </div>
    );
};

export default Main;
