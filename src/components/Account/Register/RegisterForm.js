import classNames from 'classnames/bind';
import styles from './RegisterForm.module.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import { ToastContainer, toast } from 'react-toastify';
import axios from '@/service/axios';

const cx = classNames.bind(styles);

const RegisterForm = () => {
    const navigate = useNavigate();

    const [failEmail, setFailEmail] = useState(false);
    const [errorEmail, setErrorEmail] = useState('');
    const [trueEmail, setTrueEmail] = useState(true);

    const [failPassword, setFailPassword] = useState(false);
    const [errorPassword, setErrorPassword] = useState('');
    const [truePassword, setTruePassword] = useState(true);

    const [failPasswordCon, setFailPasswordCon] = useState(false);
    const [errorPasswordCon, setErrorPasswordCon] = useState('');
    const [truePasswordCon, setTruePasswordCon] = useState(true);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleRegister = async () => {
        const data = { email, password };
        const re = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        const regex = /^[a-zA-Z0-9_-]+$/;
        if (email.trim() === '') {
            setFailEmail(true);
            setTrueEmail(false);
            setErrorEmail('Please Enter Email');
            return;
        } else if (email.length >= 30) {
            setFailEmail(true);
            setTrueEmail(false);
            setErrorEmail('Characters Email Less Than 30');
            return;
        } else if (!re.test(email)) {
            setFailEmail(true);
            setTrueEmail(false);
            setErrorEmail('Entered wrong email');
        } else {
            setFailEmail(false);
            setTrueEmail(true);
            setErrorEmail('');

            if (password.trim() === '') {
                setFailPassword(true);
                setTruePassword(false);
                setErrorPassword('Pleast Enter PassWord');
                return;
            } else if (password.length >= 10) {
                setFailPassword(true);
                setTruePassword(false);
                setErrorPassword('Characters PassWord Less Than 9');
                return;
            } else if (!regex.test(password)) {
                setFailPassword(true);
                setTruePassword(false);
                setErrorPassword('password has special characters');
                return;
            } else {
                setFailPassword(false);
                setTruePassword(true);
                setErrorPassword('');
            }
            if (confirmPassword.trim() === '') {
                setFailPasswordCon(true);
                setTruePasswordCon(false);
                setErrorPasswordCon('Pleast Enter Confirm PassWord');
                return;
            } else if (password != confirmPassword) {
                setFailPasswordCon(true);
                setTruePasswordCon(false);
                setErrorPasswordCon('Password Confrimed is not the same');
                return;
            } else {
                setFailPasswordCon(false);
                setTruePasswordCon(true);
                setErrorPasswordCon('');
            }
            try {
                const res = await axios.post('/api/auth/register', data);
                toast.success('register successfully');
                navigate('/account/login');
            } catch (error) {
                setFailEmail(true);
                setTrueEmail(false);
                setErrorEmail('Email already exists');
                setPassword('');
                setConfirmPassword('');
                console.log(error);
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

                        <div className={cx({ fail: failEmail, true: trueEmail }, 'register-wrapper-input')}>
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
                        <div className={cx('login-wrapper-error-mess', { show: errorEmail })}>
                            <p className={cx('login-error-mess')}>{errorEmail}</p>
                        </div>
                        {/* Password Inputs */}
                        <div className={cx({ fail: failPassword, true: truePassword }, 'register-wrapper-input')}>
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
                        <div className={cx('login-wrapper-error-mess', { show: errorPassword })}>
                            <p className={cx('login-error-mess')}>{errorPassword}</p>
                        </div>
                        {/* Confirm Password Input */}
                        <div className={cx({ fail: failPasswordCon, true: truePasswordCon }, 'register-wrapper-input')}>
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
                        <div className={cx('login-wrapper-error-mess', { show: errorPasswordCon })}>
                            <p className={cx('login-error-mess')}>{errorPasswordCon}</p>
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
