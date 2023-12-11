import React from 'react';
import classNames from 'classnames/bind';
import styles from './ContactLocation.module.scss';

const cx = classNames.bind(styles);

const ContactLocation = () => {
    return (
        <div className={cx('google-map')}>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d667.3519466187945!2d106.71488755239172!3d10.803596859308355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1zQXB0ZWNoIGLDrG5oIHRo4bqhbmg!5e0!3m2!1svi!2s!4v1702106944224!5m2!1svi!2s"
                className={cx('map')}
            ></iframe>
        </div>
    );
};

export default ContactLocation;
