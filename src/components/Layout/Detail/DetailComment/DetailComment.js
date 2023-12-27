import React from 'react';

import classNames from 'classnames/bind';
import styles from './DetailComment.module.scss';

import { StarYellow, StarCheck } from '@/icons';

const cx = classNames.bind(styles);

const DetailComment = () => {
    return (
        <div className={cx('detail-comment')}>
            <div className={cx('comment')}>
                <div className={cx('comment-pay')}>
                    <span>Cực kì hài lòng</span>
                </div>
                <div className={cx('comment-star')}>
                    <StarYellow />
                    <StarYellow />
                    <StarYellow />
                    <StarYellow />
                    <StarYellow />
                    <span>Cực kì hài lòng</span>
                </div>

                <p className={cx('comment-content')}>
                    Tiếc là không mua được màu Pink. Đành phải mua màu blue. Chứ màu pink thì ngon quá ạ. Mong tiki độ
                    mua cho vài con pink ạ. Màu pink thì đẹp mê
                </p>
            </div>
        </div>
    );
};

export default DetailComment;
