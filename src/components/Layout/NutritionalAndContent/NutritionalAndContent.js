import React from 'react';

import classNames from 'classnames/bind';
import styles from './NutritionalAndContent.module.scss';
import images from '@/assets';
import { Calendar } from '@/icons';

const cx = classNames.bind(styles);

const NutritionalAndContent = () => {
    return (
        <div className={cx('nutritional-containner')}>
            <div className={cx('nutritional-img')}>
                <img src={images.nutritional} alt="nutritional" />
            </div>
            <div className={cx('nutritional-dis')}>
                <h4>The full cardamom</h4>
                <div className={cx('dis-calendar')}>
                    <p>
                        <Calendar />
                        <span>Ram M</span>
                    </p>
                    <p>
                        <Calendar />
                        <span>Nov 13, 2018</span>
                    </p>
                    <p>
                        <Calendar />
                        <span>2 comments</span>
                    </p>
                </div>
                <p>
                    Gravida quis blandit turpis cursus in hac. Fames ac turpis egestas integer eget aliquet nibh
                    praesent. Elementum facilisis leo vel fringilla est ullamcorper.Quis imperdiet massa tincidunt nunc
                    pulvinar sapien et.
                </p>
                <b>
                    <i>
                        Ridiculus mus mauris vitae ultricies leo. Non enim praesent elementum facilisis leo vel
                        fringilla. Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada
                    </i>
                </b>
                <p>
                    Gravida quis blandit turpis cursus in hac. Fames ac turpis egestas integer eget aliquet nibh
                    praesent. Elementum facilisis leo vel fringilla est ullamcorper.Quis imperdiet massa tincidunt nunc
                    pulvinar sapien et.
                </p>
                <p>
                    Gravida quis blandit turpis cursus in hac. Fames ac turpis egestas integer eget aliquet nibh
                    praesent. Elementum facilisis leo vel fringilla est ullamcorper.Quis imperdiet massa tincidunt nunc
                    pulvinar sapien et.
                </p>
            </div>
        </div>
    );
};

export default NutritionalAndContent;
