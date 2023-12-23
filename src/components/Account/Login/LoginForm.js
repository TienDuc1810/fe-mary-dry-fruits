import classNames from 'classnames/bind';
import styles from './LoginForm.module.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useShoppingContext } from '@/contexts/Shopping_Context';

import 'react-toastify/dist/ReactToastify.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';


const cx = classNames.bind(styles);

const LoginForm = () => {
    const {email, password, setEmail, setPassword, infoUser} = useShoppingContext();

    const [errorHeightEmail, setErrorHeightEmail] = useState(false);
    const [errorHeightPassword, setErrorHeightPassword] = useState(false);
    const [errorEmail, setErrorEmail] = useState(false);
    const [errorPassword, setErrorPassword] = useState(false);
    const [messErrorEmail, setMessErrorEmail] = useState('');
    const [messErrorPassword, setMessErrorPassword] = useState('');

    const handleLogin = async () => {
        if (!email) {
            setErrorEmail(true);
            setMessErrorEmail('Please enter your email');
            setErrorHeightEmail(true);
        } else {
            setErrorEmail(false);
            setErrorHeightEmail(false);
            setMessErrorEmail('');
        }
        
        if (!password) {
            setErrorPassword(true);
            setMessErrorPassword('Please enter your password');
            setErrorHeightPassword(true);
        } else {
            setErrorPassword(false);
            setErrorHeightPassword(false);
            setMessErrorPassword('');
        }

        if (email && password) {
            let re = /\S+@\S+\.\S+/;
            if (!re.test(email)) {
                setErrorEmail(true);
                setMessErrorEmail('Please enter a vaild email address');
                setErrorHeightEmail(true);
            } else {
                setErrorEmail(false);
                setMessErrorEmail('');
                setErrorHeightEmail(false);
                infoUser();
            }
        }
    };

    const handlePressEnter = (e) => {
        if (e.key === 'Enter') {
            handleLogin();
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
                                onKeyUp={(e) => handlePressEnter(e)}
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
                    <div className={cx('login-to-register')}>
                        <span className={cx('login-register-question')}>You don't have an account yet?</span>
                        <Link to="/account/register" className={cx('login-register-text')}>
                             Register now!
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
