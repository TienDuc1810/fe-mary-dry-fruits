import React from 'react';

import classNames from 'classnames/bind';
import styles from '../Detail.module.scss';

import { Star, StarCheck } from '@/icons';

const cx = classNames.bind(styles);

const DetailComment = ({text, star}) => {
    return (
        <div className={cx('detail-comment-container')}>
            <div className={cx('detail-comment-wrapper')}>
                <span className={cx('detail-comment-level')}>Cực kì hài lòng</span>
                <div className={cx('detail-comment-star')}>
                    {Array.from({ length: 5 }).map((_, index) =>
                        index < star ? (
                            <StarCheck key={index} className={cx('check')} />
                        ) : (
                            <Star key={index} className={cx('no-check')} />
                        ),
                    )}
                </div>
            </div>
            <p className={cx('detail-comment-text')}>{text}</p>
        </div>
    );
};

export default DetailComment;
