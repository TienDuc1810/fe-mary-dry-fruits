import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './ContactUs.module.scss';

import ContactTitle from './ContactTitle/ContactTitle';
import ContactContent from './ContactContent/ContactContent';
import ContactLocation from './ContactFormAndLocation/ContactLocation';
import ContactForm from './ContactFormAndLocation/ContactForm/ContactForm';

const cx = classNames.bind(styles);

const ContactUs = () => {
    return (
        <div className={cx('contactus-container')}>
            <div className={cx('wrapper')}>
                <ContactTitle></ContactTitle>
                <ContactContent></ContactContent>
                <div className={cx('contactus-location')}>
                    <ContactLocation></ContactLocation>
                    <ContactForm></ContactForm>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
