import React from 'react';
import classNames from 'classnames/bind';
import styles from './ContactUs.module.scss';
import star from '@/Images/icont/star (1).svg';
import nostar from '@/Images/icont/star (2).svg';
import phone from '@/Images/icont/phone.svg';
import email from '@/Images/icont/email.svg';
import location from '@/Images/icont/location.svg';

const cx = classNames.bind(styles);

const ContactUs = () => {
    return (
        <div className={cx('contactus-container')}>
            <div className={cx('contactus-title')}>
                <h2>Contact Us</h2>
                <p>Tortor at risus viverra adipiscing at in tellus integer.</p>
                <div className={cx('mul-image')}>
                    <img src={star} alt="star" />
                    <img src={nostar} alt="star" />
                    <img src={star} alt="star" />
                </div>
            </div>
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
            <div className={cx('contactus-location')}>
                <div className={cx('google-map')}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d667.3519466187945!2d106.71488755239172!3d10.803596859308355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1zQXB0ZWNoIGLDrG5oIHRo4bqhbmg!5e0!3m2!1svi!2s!4v1702106944224!5m2!1svi!2s"
                        className={cx('map')}
                    ></iframe>
                </div>
                <div className={cx('form')}>
                    <form>
                        <div className={cx('title')}>
                            <input type="text" placeholder="Name" className={cx('input')} />
                        </div>
                        <div className={cx('title')}>
                            <input type="text" placeholder="Email" className={cx('input')} />
                        </div>
                        <div className={cx('title')}>
                            <input type="text" placeholder="Phone" className={cx('input')} />
                        </div>
                        <div className={cx('message')}>
                            <textarea className={cx('input')} placeholder="Message"></textarea>
                        </div>
                        <div className={cx('btn')}>
                            <button>Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
