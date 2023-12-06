import classNames from 'classnames/bind';
import styles from './LoginForm.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';

const cx = classNames.bind(styles);

const LoginForm = () => {
    return (
        <div className={cx('container')}>
            <div className={cx('wrapper')}>
                <form action="" method="GET">
                    <div className={cx('login-avatar')}>
                        <div className={cx('login-wrapper-icon')}>
                            <FontAwesomeIcon
                                icon={icon({ name: 'user', style: 'solid' })}
                                className={cx('login-icon-user')}
                            />
                        </div>
                    </div>
                    <div className={cx('login-form')}>
                        <div className={cx('login-title')}>
                            <h2 className={cx('login-text')}>Sign In</h2>
                        </div>
                        <div className={cx('login-wrapper-input')}>
                            <div className={cx('login-outner-input')}>
                                <span>
                                    <FontAwesomeIcon
                                        icon={icon({ name: 'user', style: 'solid' })}
                                        className={cx('login-icon')}
                                    />
                                </span>
                                <input type="text" placeholder="Email" className={cx('login-input')} />
                            </div>
                        </div>
                        <div className={cx('login-wrapper-input')}>
                            <div className={cx('login-outner-input')}>
                                <span>
                                    <FontAwesomeIcon
                                        icon={icon({ name: 'lock', style: 'solid' })}
                                        className={cx('login-icon')}
                                    />
                                </span>
                                <input type="password" placeholder="Password" className={cx('login-input')} />
                                <span>
                                    <FontAwesomeIcon
                                        icon={icon({ name: 'eye-slash', style: 'regular' })}
                                        className={cx('login-icon-pass')}
                                    />
                                </span>
                            </div>
                        </div>
                        <div className={cx('login-wrapper-btn')}>
                            <button type="submit" className={cx('login-btn')}>
                                <span className={cx('login-btn-title')}>LOGIN</span>
                            </button>
                        </div>
                        <div className={cx('login-options')}>
                            <span className={cx('login-remember')}>
                                <input type="checkbox" className={cx('login-remember-checkbox')} />
                                <span className="checkmark"></span>
                                <p className={cx('login-remember-text')}>Remember me</p>
                            </span>
                            <span className={cx('login-forgot')}>
                                <a href="/" className={cx('login-forgot-text')}>
                                    Forgot Password?
                                </a>
                            </span>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
