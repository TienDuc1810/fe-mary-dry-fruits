import React from 'react';
import { Link } from 'react-router-dom';

import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

import home from '../../../Images/icont/home (1).svg';
import phone from '../../../Images/icont/phone.svg';
import clock from '../../../Images/icont/two-oclock.svg';
import email from '../../../Images/icont/email.svg';
import visa from '../../../Images/icont/visa.svg';

const cx = classNames.bind(styles);

const Footer = () => {
    return (
        <div className={cx('footer-contairner')}>
            <div className={cx('top')}>
                <div className={cx('about')}>
                    <h4 className={cx('title')}>About us</h4>
                    <div className={cx('content')}>
                        <p className={cx('text')}>
                            Pellentesque posuere orci lobortis scelerisque blandit. Donec id tellus lacinia an,
                            tincidunt risus ac, consequat velit.
                        </p>
                        <Link to={'/'} className={cx('link')}>
                            Read More
                        </Link>
                    </div>
                </div>
                <div className={cx('help')}>
                    <h4 className={cx('title')}>About us</h4>
                    <ul className={cx('pratice')}>
                        <li className={cx('point')}>
                            <Link to={'/'} className={cx('link')}>
                                Search
                            </Link>
                        </li>
                        <li className={cx('point')}>
                            <Link to={'/'} className={cx('link')}>
                                Help
                            </Link>
                        </li>
                        <li className={cx('point')}>
                            <Link to={'/'} className={cx('link')}>
                                Information
                            </Link>
                        </li>
                        <li className={cx('point')}>
                            <Link to={'/'} className={cx('link')}>
                                Privacy Policy
                            </Link>
                        </li>
                        <li className={cx('point')}>
                            <Link to={'/'} className={cx('link')}>
                                Shipping Details
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={cx('help')}>
                    <h4 className={cx('title')}>Support </h4>
                    <ul className={cx('pratice')}>
                        <li className={cx('point')}>
                            <Link to={'/'} className={cx('link')}>
                                Contact us
                            </Link>
                        </li>
                        <li className={cx('point')}>
                            <Link to={'/'} className={cx('link')}>
                                About us
                            </Link>
                        </li>
                        <li className={cx('point')}>
                            <Link to={'/'} className={cx('link')}>
                                Careers
                            </Link>
                        </li>
                        <li className={cx('point')}>
                            <Link to={'/'} className={cx('link')}>
                                Refunds{' '}
                            </Link>
                        </li>
                        <li className={cx('point')}>
                            <Link to={'/'} className={cx('link')}>
                                Deliveries
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={cx('help')}>
                    <h4 className={cx('title')}> Information</h4>
                    <ul className={cx('pratice')}>
                        <li className={cx('point')}>
                            <Link to={'/'} className={cx('link')}>
                                Search Terms
                            </Link>
                        </li>
                        <li className={cx('point')}>
                            <Link to={'/'} className={cx('link')}>
                                Advanced Search
                            </Link>
                        </li>
                        <li className={cx('point')}>
                            <Link to={'/'} className={cx('link')}>
                                Help & Faq's
                            </Link>
                        </li>
                        <li className={cx('point')}>
                            <Link to={'/'} className={cx('link')}>
                                Store Location
                            </Link>
                        </li>
                        <li className={cx('point')}>
                            <Link to={'/'} className={cx('link')}>
                                Orders & Returns
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={cx('contact')}>
                    <h4 className={cx('title')}> Contact us</h4>
                    <ul className={cx('pratice')}>
                        <li>
                            <img src={home} className={cx('img')} />
                            <span>11244 Niki Lauda 455 New Zealand</span>
                        </li>
                        <li>
                            <img src={phone} className={cx('img')} />
                            <span>0000 - 123 - 456789</span>
                        </li>
                        <li>
                            <img src={clock} className={cx('img')} />
                            <span>9.30AM - 7.30PM</span>
                        </li>
                        <li>
                            <img src={email} className={cx('img')} />
                            <span>mail@example.com</span>
                        </li>
                    </ul>
                    <div className={cx('pay')}>
                        <ul>
                            <li>
                                <img src={visa} className={cx('img')} />
                            </li>
                            <li>
                                <img src={visa} className={cx('img')} />
                            </li>
                            <li>
                                <img src={visa} className={cx('img')} />
                            </li>
                            <li>
                                <img src={visa} className={cx('img')} />
                            </li>
                            <li>
                                <img src={visa} className={cx('img')} />
                            </li>
                            <li>
                                <img src={visa} className={cx('img')} />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={cx('foot')}>
                <div className={cx('first')}>
                    <p className={cx('content')}>© 2023 Waffy (password: buddha) Member:</p>
                    <Link to={'/'} className={cx('link')}>Hoàng Khải ,</Link>
                    <Link to={'/'} className={cx('link')}>Bảo Huân ,</Link>
                    <Link to={'/'} className={cx('link')}>Tiến Đức ,</Link>
                    <Link to={'/'} className={cx('link')}>Duy Bảo</Link>

                </div>
            </div>
        </div>
    );
};

export default Footer;
