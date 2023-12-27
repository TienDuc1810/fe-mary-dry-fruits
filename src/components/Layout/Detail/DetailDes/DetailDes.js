import React from 'react';

import classNames from 'classnames/bind';
import styles from './DetailDes.module.scss';
import DisContentBtn from './DisContentBtn/DisContentBtn';

const cx = classNames.bind(styles);

const DetailDes = () => {
    return (
        <div className={cx('detail-discription')}>
            <div className={cx('discription-btn')}>
                <DisContentBtn>Product Description1</DisContentBtn>
                <DisContentBtn>Product Description2</DisContentBtn>
                <DisContentBtn>Product Description3</DisContentBtn>
            </div>
            <div className={cx('discription-ctn')}>
            </div>
            <h3>Related products</h3>
        </div>
    );
};

export default DetailDes;
