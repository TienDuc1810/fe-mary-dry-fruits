import React from 'react';

import classNames from 'classnames/bind';
import styles from './AboutThree.module.scss';

import images from '@/assets';

const cx = classNames.bind(styles);

const AboutThree = () => {
    return (
        <div className={cx('about-us-three')}>
            <div className={cx('three-image')}>
                <img src={images.finest} alt="finest" />
            </div>
            <div className={cx('three-dis')}>
                <h4>The Richest Masala In The World</h4>
                <p>
                    Nullam malesuada erat ut ki diaml ka dhuddu pochu turpis. Suspendisse urna nibh, viverra non, semper
                    suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Morbi in sem quis dui
                    placerat ornare. Tortor dignissim convallis aenean et tortor. Ac tincidunt vitae semper quis lectus
                    nulla at volutpat diam.
                </p>
            </div>
        </div>
    );
};

export default AboutThree;
