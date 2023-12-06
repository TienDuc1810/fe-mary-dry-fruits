import classNames from 'classnames/bind';
import styles from './RegisterForm.module.scss';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';

const cx = classNames.bind(styles);

const RegisterForm = () => {
    return (
        <div className={cx('container')}>
            <div className={cx('wrapper')}>
                <form action="" method="POST">
                    <div className={cx('register-avatar')}>
                        <div className={cx('register-wrapper-icon')}>
                            <FontAwesomeIcon
                                icon={icon({ name: 'user', style: 'solid' })}
                                className={cx('register-icon-user')}
                            />
                        </div>
                    </div>
                    <div className={cx('register-form')}>
                        <div className={cx('register-title')}>
                            <h2 className={cx('register-text')}>Sign Up</h2>
                        </div>
                        <div className={cx('register-wrapper-input')}>
                            <div className={cx('register-outner-input')}>
                                <span>
                                    <FontAwesomeIcon
                                        icon={icon({ name: 'user', style: 'solid' })}
                                        className={cx('register-icon')}
                                    />
                                </span>
                                <input type="text" placeholder="Email" className={cx('register-input')} />
                            </div>
                        </div>
                        <div className={cx('register-wrapper-input')}>
                            <div className={cx('register-outner-input')}>
                                <span>
                                    <FontAwesomeIcon
                                        icon={icon({ name: 'lock', style: 'solid' })}
                                        className={cx('register-icon')}
                                    />
                                </span>
                                <input type="password" placeholder="Password" className={cx('register-input')} />
                                <span>
                                    <FontAwesomeIcon
                                        icon={icon({ name: 'eye-slash', style: 'regular' })}
                                        className={cx('register-icon-pass')}
                                    />
                                </span>
                            </div>
                        </div>
                        <div className={cx('register-wrapper-input')}>
                            <div className={cx('register-outner-input')}>
                                <span>
                                    <FontAwesomeIcon
                                        icon={icon({ name: 'lock', style: 'solid' })}
                                        className={cx('register-icon')}
                                    />
                                </span>
                                <input
                                    type="password"
                                    placeholder="Confirm Password"
                                    className={cx('register-input')}
                                />
                                <span>
                                    <FontAwesomeIcon
                                        icon={icon({ name: 'eye-slash', style: 'regular' })}
                                        className={cx('register-icon-pass')}
                                    />
                                </span>
                            </div>
                        </div>
                        <div className={cx('register-options')}>
                            <span className={cx('register-accept')}>
                                <input type="checkbox" className={cx('register-accept-checkbox')} />
                                <p className={cx('register-accept-text')}>I accept the Terms and Conditions</p>
                            </span>
                        </div>
                        <div className={cx('register-wrapper-btn')}>
                            <button type="submit" className={cx('register-btn')}>
                                <span className={cx('register-btn-title')}>Register</span>
                            </button>
                        </div>
                        <div className={cx('register-wrapper-back-login')}>
                            <span className={cx('register-question-text')}>Already have an account ?</span>
                            <Link to="/account/login" className={cx('register-back-link')}>
                                Login here
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RegisterForm;
