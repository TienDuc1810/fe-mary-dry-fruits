import classNames from 'classnames/bind';
import styles from './LoginForm.module.scss';
import { useEffect, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import axios from 'axios';

const cx = classNames.bind(styles);

const LoginForm = () => {
    // useEffect(()=>{
    //     axios.get("http://localhost:8000/api/auth/profile").then(data =>{
    //         console.log("check data:", data)
    //     })
    // },[]);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorHeightEmail, setErrorHeightEmail] = useState(false);
    const [errorHeightPassword, setErrorHeightPassword] = useState(false);
    const [errorEmail, setErrorEmail] = useState(false);
    const [errorPassword, setErrorPassword] = useState(false);
    const [messErrorEmail, setMessErrorEmail] = useState("");
    const [messErrorPassword, setMessErrorPassword] = useState("");

    const handleLogin = () => {
        if (!email) {
            setErrorEmail(true);
            setMessErrorEmail("Please enter your email")
            setErrorHeightEmail(true);
        }
        if (!password) {
            setErrorPassword(true);
            setMessErrorPassword("Please enter your password")
            setErrorHeightPassword(true);
        }
        
    };

    return (
        <div className={cx('container')}>
            <div className={cx('wrapper', { errorEmail: errorHeightEmail }, { errorPass: errorHeightPassword })}>
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
                    <div className={cx('login-wrapper-input', { error: errorEmail })}>
                        <div className={cx('login-outner-input')}>
                            <span>
                                <FontAwesomeIcon
                                    icon={icon({ name: 'user', style: 'solid' })}
                                    className={cx('login-icon')}
                                />
                            </span>
                            <input
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                type="text"
                                placeholder="Email"
                                className={cx('login-input')}
                            />
                        </div>
                    </div>
                    <div className={cx('login-wrapper-error-mess', { show: errorEmail })}>
                        <p className={cx('login-error-mess')}>{messErrorEmail}</p>
                    </div>
                    <div className={cx('login-wrapper-input', { error: errorPassword })}>
                        <div className={cx('login-outner-input')}>
                            <span>
                                <FontAwesomeIcon
                                    icon={icon({ name: 'lock', style: 'solid' })}
                                    className={cx('login-icon')}
                                />
                            </span>
                            <input
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                                type="password"
                                placeholder="Password"
                                className={cx('login-input')}
                            />
                            <span>
                                <FontAwesomeIcon
                                    icon={icon({ name: 'eye-slash', style: 'regular' })}
                                    className={cx('login-icon-pass')}
                                />
                            </span>
                        </div>
                    </div>
                    <div className={cx('login-wrapper-error-mess', { show: errorPassword })}>
                        <p className={cx('login-error-mess')}>{messErrorPassword}</p>
                    </div>
                    <div className={cx('login-wrapper-btn')}>
                        <button type="submit" className={cx('login-btn')} onClick={() => handleLogin()}>
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
            </div>
        </div>
    );
};

export default LoginForm;
