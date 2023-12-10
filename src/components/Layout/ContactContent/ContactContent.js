import React from 'react';
import classNames from 'classnames/bind';
import styles from './ContactContent.module.scss';

import phone from '@/Images/icont/phone.svg';
import email from '@/Images/icont/email.svg';
import location from '@/Images/icont/location.svg';

const cx = classNames.bind(styles);

const ContactContent = () => {
    return (
        <div className={cx('contactus-content')}>
            <div className={cx('phone')}>
                <div className={cx('image')}>
                    <img src={phone} alt="phone" />
                </div>
                <div className={cx('content')}>
                    <h5>Phone</h5>
                    <p>
                        <b>Toll-Free: </b> 0000 - 123 - 456789{' '}
                    </p>
                    <p>
                        <b>Fax: </b> 0000 - 123 - 456789{' '}
                    </p>
                </div>
            </div>
            <div className={cx('phone')}>
                <div className={cx('image')}>
                    <img src={email} alt="phone" />
                </div>
                <div className={cx('content')}>
                    <h5>Email</h5>
                    <p>
                        <b>email: </b>mail@example.com{' '}
                    </p>
                    <p>
                        <b>email-support: </b> support@example.com{' '}
                    </p>
                </div>
            </div>
            <div className={cx('phone')}>
                <div className={cx('image')}>
                    <img src={location} alt="phone" />
                </div>
                <div className={cx('content')}>
                    <h5>Address</h5>
                    <p>
                        <b>No: </b>No: 58 A, East Madison Street,{' '}
                    </p>
                    <p>Baltimore, MD, USA 4508 </p>
                </div>
            </div>
        </div>
    );
};

export default ContactContent;
