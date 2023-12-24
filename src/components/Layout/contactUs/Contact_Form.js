import { useState } from 'react';
import Button from '@/components/Button/ButtonIndex';
import classNames from 'classnames/bind';
import styles from './Contact_Us.module.scss';

const cx = classNames.bind(styles);

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    return (
        <div className={cx('contact-form-container')}>
            <div className={cx('contact-form-outner')}>
                <input
                    type="text"
                    placeholder="Full Name"
                    className={cx('contact-form-input')}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className={cx('contact-form-outner')}>
                <input
                    type="text"
                    placeholder="Email"
                    className={cx('contact-form-input')}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className={cx('contact-form-outner')}>
                <input
                    type="text"
                    placeholder="Phone"
                    className={cx('contact-form-input')}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
            </div>
            <div className={cx('contact-form-outner')}>
                <textarea
                    className={cx('contact-form-textarea')}
                    placeholder="Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                ></textarea>
            </div>
            <div className={cx('contact-form-btn')}>
                <Button text={'Send'} blackText big/>
            </div>
        </div>
    );
};

export default ContactForm;
