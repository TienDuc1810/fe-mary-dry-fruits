import React from 'react';

import classNames from 'classnames/bind';
import styles from './AboutFirst.module.scss';
import images from '@/assets';

const cx = classNames.bind(styles);

const AboutFirst = () => {
    return (
        <div className={cx('about-us-first')}>
            <div className={cx('first-content')}>
                <h4>The Richest Masala In The World</h4>
                <p>
                    Nullam malesuada erat ut ki diaml ka dhuddu pochu turpis. Suspendisse urna nibh, viverra non, semper
                    suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Morbi in sem quis dui
                    placerat ornare. Tortor dignissim convallis aenean et tortor. Ac tincidunt vitae semper quis lectus
                    nulla at volutpat diam.
                </p>
                <blockquote>
                    Nullam malesuada erat ut ki diaml ka dhuddu pochu turpis. Suspendisse urna nibh, viverra non, semper
                    suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Morbi in sem quis dui
                    placerat ornare. Tortor dignissim convallis aenean et tortor. Ac tincidunt vitae semper quis lectus
                    nulla at volutpat diam.
                </blockquote>
            </div>
            <div className={cx('first-image')}>
            </div>
        </div>
    );
};

export default AboutFirst;
