import React from 'react';

import classNames from 'classnames/bind';
import styles from './Index.module.scss';

import Banner from '../Banner/Banner';
import images from '@/assets';
import TitleIndex from '../Main/Title/Title_Index';
import AboutFirst from './AboutFirst/AboutFirst';
import AboutSecond from './AboutUsSecond/AboutSecond';
import AboutThree from './AboutThree/AboutThree';
import BenefitIndex from '../Main/Benefit/Benefit_Index';
import Footer from '../Footer/Footer_Index';

import { ArrowRotate, Suitcase, Clock } from '@/icons';

const cx = classNames.bind(styles);

const Index = () => {
    return (
        <div className={cx('about-us-container')}>
            <Banner pageMain="all" pageEtra="Rosehip Berries" backGround={images.banner}>
                about us
            </Banner>
            <div className={cx('about-us')}>
                <AboutFirst />
                <TitleIndex heading={'Unique flavors spices'} description={'Quisque volutpat mattis eros.'} />
                <AboutSecond />
                <AboutSecond />
                <TitleIndex
                    heading={'A unique blended taste'}
                    description={'Pellentesque habitant morbi tristique senectus et netus et male.'}
                />
                <AboutThree />
                <TitleIndex heading={'Unique flavors spices'} description={'Quisque volutpat mattis eros.'} />
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
            <Footer />
        </div>
    );
};

export default Index;
