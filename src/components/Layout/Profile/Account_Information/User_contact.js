import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import Button from '@/components/Button/ButtonIndex';
import { InfomationUser } from '@/service/User_Service';
import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from '../Profile.module.scss';

const cx = classNames.bind(styles);

const UserContact = () => {
    const [updatePass, setUpdatePass] = useState(false);


    return (
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
    );
};

export default UserContact;
