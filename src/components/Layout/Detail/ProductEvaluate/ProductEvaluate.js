import React from 'react';

import classNames from 'classnames/bind';
import styles from './ProductEvaluate.module.scss';
import { StarYellow, StarCheck } from '@/icons';

import images from '@/assets';
const cx = classNames.bind(styles);

const ProductEvaluate = () => {
    return (
        <div className={cx('customer-evaluate')}>
            <h4>Khách hàng đánh giá</h4>
            <p>Tổng quan</p>
            <div className={cx('evaluate-star')}>
                <h3>4.9</h3>
                <StarYellow />
                <StarYellow />
                <StarYellow />
                <StarYellow />
                <StarYellow />
            </div>
            <div className={cx('evaluate-star-turn')}>
                <div className={cx('star-turn')}>
                    <StarYellow />
                    <StarYellow />
                    <StarYellow />
                    <StarYellow />
                    <StarYellow />
                </div>
                <div className={cx('percent')}>
                    <div className={cx('percent-90')}></div>
                </div>
                <span className={cx('ratting-munber')}>13</span>
            </div>
            <div className={cx('evaluate-star-turn')}>
                <div className={cx('star-turn')}>
                    <StarYellow />
                    <StarYellow />
                    <StarYellow />
                    <StarYellow />
                    <StarYellow />
                </div>
                <div className={cx('percent')}>
                    <div className={cx('percent-90')}></div>
                </div>
                <span className={cx('ratting-munber')}>13</span>
            </div>
            <div className={cx('evaluate-star-turn')}>
                <div className={cx('star-turn')}>
                    <StarYellow />
                    <StarYellow />
                    <StarYellow />
                    <StarYellow />
                    <StarYellow />
                </div>
                <div className={cx('percent')}>
                    <div className={cx('percent-90')}></div>
                </div>
                <span className={cx('ratting-munber')}>13</span>
            </div>
            <div className={cx('evaluate-star-turn')}>
                <div className={cx('star-turn')}>
                    <StarYellow />
                    <StarYellow />
                    <StarYellow />
                    <StarYellow />
                    <StarYellow />
                </div>
                <div className={cx('percent')}>
                    <div className={cx('percent-90')}></div>
                </div>
                <span className={cx('ratting-munber')}>13</span>
            </div>
            <div className={cx('evaluate-star-turn')}>
                <div className={cx('star-turn')}>
                    <StarYellow />
                    <StarYellow />
                    <StarYellow />
                    <StarYellow />
                    <StarYellow />
                </div>
                <div className={cx('percent')}>
                    <div className={cx('percent-90')}></div>
                </div>
                <span className={cx('ratting-munber')}>13</span>
            </div>
        </div>
    );
};

export default ProductEvaluate;
