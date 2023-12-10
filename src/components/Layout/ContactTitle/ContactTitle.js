import React from 'react';
import classNames from 'classnames/bind';
import styles from './ContactTitle.module.scss';

import star from '@/Images/icont/star (1).svg';
import nostar from '@/Images/icont/star (2).svg';

const cx = classNames.bind(styles);

const ContactTitle = () => {
    return (
        <div className={cx('contactus-title')}>
            <h2>Contact Us</h2>
            <p>Tortor at risus viverra adipiscing at in tellus integer.</p>
            <div className={cx('mul-image')}>
                <img src={star} alt="star" />
                <img src={nostar} alt="star" />
                <img src={star} alt="star" />
            </div>
        </div>
    );
};

export default ContactTitle;
