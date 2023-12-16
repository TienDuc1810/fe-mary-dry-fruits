import React from 'react';

import classNames from 'classnames/bind';
import styles from './AboutSecond.module.scss';

import { World, User, Coffee, Eye } from '@/icons';

const cx = classNames.bind(styles);

const AboutSecond = () => {
    return (
        <div className={cx('about-us-second')}>
            <div className={cx('second-flavors')}>
                <div className={cx('flavors-img')}>
                    <World />
                </div>
                <div className={cx('flavors-title')}>
                    <h4>Flavors</h4>
                    <p>
                        Sed vestibulum nulla elementum auctor tincidunt. Aliquam sit amet cursus mauris. Sed vitae
                        mattis ipsum. Vestibulum enim nulla, sollicitudin ac hendrerit nec, tempor quis nisl
                    </p>
                </div>
            </div>
            <div className={cx('second-flavors')}>
                <div className={cx('flavors-img')}>
                    <User />
                </div>
                <div className={cx('flavors-title')}>
                    <h4>Flavors</h4>
                    <p>
                        Sed vestibulum nulla elementum auctor tincidunt. Aliquam sit amet cursus mauris. Sed vitae
                        mattis ipsum. Vestibulum enim nulla, sollicitudin ac hendrerit nec, tempor quis nisl
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutSecond;
