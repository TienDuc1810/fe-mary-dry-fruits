import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './ContactForm.module.scss';

const cx = classNames.bind(styles);

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const handleClick = () => {
        const data = { name, email, phone, message };
    };
    return (
        <div className={cx('form')}>
            <form>
                <div className={cx('title')}>
                    <input
                        type="text"
                        placeholder="Name"
                        className={cx('input')}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className={cx('title')}>
                    <input
                        type="text"
                        placeholder="Email"
                        className={cx('input')}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className={cx('title')}>
                    <input
                        type="text"
                        placeholder="Phone"
                        className={cx('input')}
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>
                <div className={cx('message')}>
                    <textarea
                        className={cx('input')}
                        placeholder="Message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                </div>
                <div className={cx('btn')}>
                    <button onClick={handleClick}>Send</button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
