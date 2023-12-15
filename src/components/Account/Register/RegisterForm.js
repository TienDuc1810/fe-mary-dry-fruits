import classNames from 'classnames/bind';
import styles from './RegisterForm.module.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import axios from 'axios';

const cx = classNames.bind(styles);

const RegisterForm = () => {
    const navigate = useNavigate();

    const [failEmail, setFailEmail] = useState(false);
    const [failPassword, setFailPassword] = useState(false);
    const [failPasswordCon, setFailPasswordCon] = useState(false);
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleRegister = async () => {
        const data = { email, password };

        if (email.trim() === '') {
            setFailEmail(true);
            return;
        } else {
            setFailEmail(false);
            if (email.length >= 30) {
                setFailEmail(true);
                return;
            } else {
                setFailEmail(false);
                if (password.trim() === '' || confirmPassword.trim() === '') {
                    setFailPassword(true);
                    setFailPasswordCon(true);
                    return;
                } else {
                    setFailPassword(false);
                    setFailPasswordCon(false);
                    try {
                        const res = await axios.post('http://localhost:8000/api/auth/register', data);
                        setFailPassword(false);
                        setFailPasswordCon(false);
                        navigate('/account/login');
                    } catch (error) {
                        console.error('Registration error:', error);
                    }
                }
            }
        }
    };

    return (
        <div className={cx('container')}>
            <div className={cx('wrapper')}>
                <div>
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

                        <div className={cx({ fail: failEmail, true: !failEmail }, 'register-wrapper-input')}>
                            {/* Email Input */}
                            <div className={cx('register-outner-input')}>
                                <span>
                                    <FontAwesomeIcon
                                        icon={icon({ name: 'user', style: 'solid' })}
                                        className={cx('register-icon')}
                                    />
                                </span>
                                <input
                                    type="text"
                                    name="email"
                                    placeholder="Email"
                                    className={cx('register-input')}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        </div>
                        {/* Password Inputs */}
                        <div className={cx({ fail: failPassword, true: !failPassword }, 'register-wrapper-input')}>
                            {/* Password Input */}
                            <div className={cx('register-outner-input')}>
                                <span>
                                    <FontAwesomeIcon
                                        icon={icon({ name: 'lock', style: 'solid' })}
                                        className={cx('register-icon')}
                                    />
                                </span>
                                <input
                                    type="password"
                                    placeholder="Password"
                                    className={cx('register-input')}
                                    name="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                {/* Toggle Password Visibility */}
                                <span>
                                    <FontAwesomeIcon
                                        icon={icon({ name: 'eye-slash', style: 'regular' })}
                                        className={cx('register-icon-pass')}
                                    />
                                </span>
                            </div>
                        </div>
                        {/* Confirm Password Input */}
                        <div
                            className={cx({ fail: failPasswordCon, true: !failPasswordCon }, 'register-wrapper-input')}
                        >
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
                                    value={confirmPassword}
                                    name="password_confirmation"
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                                {/* Toggle Confirm Password Visibility */}
                                <span>
                                    <FontAwesomeIcon
                                        icon={icon({ name: 'eye-slash', style: 'regular' })}
                                        className={cx('register-icon-pass')}
                                    />
                                </span>
                            </div>
                        </div>

                        {/* Terms and Conditions */}
                        <div className={cx('register-options')}>
                            <span className={cx('register-accept')}>
                                <input type="checkbox" className={cx('register-accept-checkbox')} />
                                <p className={cx('register-accept-text')}>I accept the Terms and Conditions</p>
                            </span>
                        </div>
                        {/* Register Button */}
                        <div className={cx('register-wrapper-btn')}>
                            <button type="submit" className={cx('register-btn')} onClick={handleRegister}>
                                <span className={cx('register-btn-title')}>Register</span>
                            </button>
                        </div>
                        {/* Link to Login */}
                        <div className={cx('register-wrapper-back-login')}>
                            <span className={cx('register-question-text')}>Already have an account?</span>
                            <Link to="/account/login" className={cx('register-back-link')}>
                                Login here
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterForm;
