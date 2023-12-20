import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import Button from '@/components/Button/ButtonIndex';
import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Profile.module.scss';

const cx = classNames.bind(styles);

const AccountInformation = () => {
    const [updatePass, setUpdatePass] = useState(false);

    return (
        <div className={cx('profile-detail-container')}>
            <div className={cx('profile-detail-wrapper')}>
                <h2 className={cx('profile-detail-heading')}>Account Information</h2>
                <div className={cx('profile-detail-outner-input')}>
                    <label htmlFor="Fullname">Full Name</label>
                    <input id="Fullname" type="text" className={cx('profile-detail-input')} />
                </div>

                <div className={cx('profile-detail-outner-input')}>
                    <label htmlFor="email">Nick Name</label>
                    <input id="email" type="text" className={cx('profile-detail-input')} />
                </div>
                <div className={cx('profile-detail-outner-input')}>
                    <label>Nationality</label>
                    <div className={cx('profile-detail-select')}>
                        <select className={cx('profile-detail-select-item')}>
                            <option className={cx('profile-detail-option')}>Choose your nationality</option>
                            <option className={cx('profile-detail-option')}>Viet Nam</option>
                        </select>
                    </div>
                </div>

                <div className={cx('profile-detail-outner-input')}>
                    <label>Birthday</label>
                    <div className={cx('profile-detail-select')}>
                        <select className={cx('profile-detail-select-item')}>
                            <option>Day</option>
                        </select>
                        <select className={cx('profile-detail-select-item')}>
                            <option>Month</option>
                        </select>
                        <select className={cx('profile-detail-select-item')}>
                            <option>Years</option>
                        </select>
                    </div>
                </div>

                <div className={cx('profile-detail-outner-radio')}>
                    <p>Gender</p>
                    <div className={cx('profile-detail-option')}>
                        <input id="male" name="gender" type="radio" className={cx('profile-detail-radio')} />
                        <label htmlFor="male" className={cx('profile-detail-label')}>
                            Male
                        </label>
                        <input id="female" name="gender" type="radio" className={cx('profile-detail-radio')} />
                        <label htmlFor="female" className={cx('profile-detail-label')}>
                            Female
                        </label>
                        <input id="other" name="gender" type="radio" className={cx('profile-detail-radio')} />
                        <label htmlFor="other" className={cx('profile-detail-label')}>
                            Other
                        </label>
                    </div>
                </div>
                <div className={cx('profile-detail-btn')}>
                    <Button text={'Save Changes'} blackText />
                </div>
            </div>

            <div className={cx('profile-detail-wrapper')}>
                <div className={cx('profile-detail-main')}>
                    <div className={cx('profile-detail-item')}>
                        <div className={cx('profile-detail-item-left')}>
                            <FontAwesomeIcon
                                icon={icon({ name: 'phone', style: 'solid' })}
                                className={cx('profile-detail-icon')}
                            />
                            <p className={cx('profile-detail-title')}>Phone</p>
                            <span className={cx('profile-detail-dots')}>:</span>
                            <span>0123456789</span>
                        </div>
                        <Button text={'Update'} blackText />
                    </div>
                    <div className={cx('profile-detail-item')}>
                        <div className={cx('profile-detail-item-left')}>
                            <FontAwesomeIcon
                                icon={icon({ name: 'envelope', style: 'solid' })}
                                className={cx('profile-detail-icon')}
                            />
                            <p className={cx('profile-detail-title')}>Email</p>
                            <span className={cx('profile-detail-dots')}>:</span>
                            <span>dotienduc@gmail.com</span>
                        </div>
                        <Button text={'Update'} blackText />
                    </div>
                    <div className={cx('profile-detail-item')}>
                        <div className={cx('profile-detail-item-left')}>
                            <FontAwesomeIcon
                                icon={icon({ name: 'envelope', style: 'solid' })}
                                className={cx('profile-detail-icon')}
                            />
                            <p className={cx('profile-detail-title')}>Address</p>
                            <span className={cx('profile-detail-dots')}>:</span>
                            <span>70 Duong Dinh Hoi</span>
                        </div>
                        <Button text={'Update'} blackText />
                    </div>
                    <div className={cx('profile-detail-item')}>
                        <div className={cx('profile-detail-item-left')}>
                            <FontAwesomeIcon
                                icon={icon({ name: 'lock', style: 'solid' })}
                                className={cx('profile-detail-icon')}
                            />
                            <p className={cx('profile-detail-title')}>Password</p>
                        </div>
                        <span onClick={() => setUpdatePass(true)}>
                            <Button text={'Update'} blackText />
                        </span>
                    </div>
                    {updatePass === true ? (
                        <div className={cx('profile-detail-outner-pass')}>
                            <div className={cx('profile-detail-pass')}>
                                <label htmlFor="Fullname">Last Password</label>
                                <input id="Fullname" type="text" className={cx('profile-detail-input')} />
                            </div>
                            <div className={cx('profile-detail-pass')}>
                                <label htmlFor="Fullname">New Password</label>
                                <input id="Fullname" type="text" className={cx('profile-detail-input')} />
                            </div>
                            <span onClick={() => setUpdatePass(false)}>
                                <Button text={'Save'} blackText />
                            </span>
                        </div>
                    ) : null}
                </div>
            </div>
        </div>
    );
};

export default AccountInformation;
