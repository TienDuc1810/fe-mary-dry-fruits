import React from 'react';
import classNames from 'classnames/bind';
import styles from './ContactUs.module.scss';
import star from '@/Images/icont/star (1).svg';
import nostar from '@/Images/icont/star-line.svg';

const cx = classNames.bind(styles);

const ContactUs = () => {
    return (
        <div className={cx('contactus-container')}>
            <div >
                <h2>Contact us</h2>
                <p>Tortor at risus viverra adipiscing at in tellus integer.</p>
                <img src={star} alt="star" />
            </div>
        </div>
    );
};

export default ContactUs;
