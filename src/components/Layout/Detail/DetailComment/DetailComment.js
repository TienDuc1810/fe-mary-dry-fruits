import React from 'react';

import classNames from 'classnames/bind';
import styles from './DetailComment.module.scss';

import { StarYellow, StarCheck } from '@/icons';

const cx = classNames.bind(styles);

const DetailComment = ({ content, star }) => {
    return (
        <div className={cx('detail-comment')}>
            <div className={cx('comment')}>
                <div className={cx('comment-name')}>
                    HeoloveNinh
                </div>
                <div className={cx('comment-star')}>
                    <StarYellow />
                    <StarYellow />
                    <StarYellow />
                    <StarYellow />
                    <StarYellow />
                </div>

                <p className={cx('comment-content')}>{content}</p>
            </div>
        </div>
    );
};

export default DetailComment;
