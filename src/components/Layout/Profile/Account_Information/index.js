import classNames from 'classnames/bind';
import styles from '../Profile.module.scss';
import { useEffect, useState } from 'react';
import { dataUser } from '@/service/User_Service';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import Button from '@/components/Button/ButtonIndex';
import { editDataUser } from '@/service/User_Service';
import images from '@/assets';
import { toast } from 'react-toastify';

const cx = classNames.bind(styles);

const AccountInformation = () => {
    const [data, getData] = useState('');
    const [updatePass, setUpdatePass] = useState(false);
    const [avatar, setAvatar] = useState(images.avatar);
    const [isImageError, setIsImageError] = useState(false);
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            let res = await dataUser();
            getData(res.response);
        };
        fetchData();
    }, []);

    const handleAvatarChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setAvatar(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleImageError = () => {
        setIsImageError(true);
    };

    const handleEditUser = async () => {
        let res = await editDataUser( fullname, email, phone, address);

        if (res && res.success === true) {
            toast.success('Login Success', {
                autoClose: 2000,
            });
        } else {
            toast.error('Wrong Login Information', {
                autoClose: 2000,
            });
        }
    };

    return (
        <div className={cx('profile-detail-container')}>
            <div className={cx('profile-detail-wrapper')}>
                <h2 className={cx('profile-detail-heading')}>Account Information</h2>
                <div>
                    <div className={cx('profile-detail-info')}>
                        <div className={cx('profile-detail-outner-image')}>
                            <img
                                src={isImageError ? images.avatar_default : avatar}
                                alt="avatar"
                                className={cx('profile-detail-image')}
                                onError={handleImageError}
                            />
                            <label htmlFor="avatar">
                                <FontAwesomeIcon
                                    icon={icon({ name: 'pen-to-square', style: 'regular' })}
                                    className={cx('profile-avatar-edit')}
                                />
                            </label>
                        </div>
                        <input type="file" id="avatar" hidden onChange={handleAvatarChange} />
                        <div className={cx('profile-detail-wrap')}>
                            <div className={cx('profile-detail-outner-input')}>
                                <label htmlFor="Fullname">Full Name</label>
                                <input
                                    id="Fullname"
                                    type="text"
                                    className={cx('profile-detail-input')}
                                    value={data.full_name}
                                    onChange={(e) => setFullname(e.target.value)}
                                />
                            </div>

                            <div className={cx('profile-detail-outner-input')}>
                                <label htmlFor="email">Nick Name</label>
                                <input id="email" type="text" className={cx('profile-detail-input')} />
                            </div>
                        </div>
                    </div>
                    <div className={cx('profile-detail-outner-select')}>
                        <div className={cx('profile-detail-outner-input')}>
                            <label htmlFor="email">Level</label>
                            <input
                                id="email"
                                type="text"
                                className={cx('profile-detail-input')}
                                value={data.level === 1 ? 'Admin' : 'Member'}
                            />
                        </div>
                    </div>

                    <div className={cx('profile-detail-outner-select')}>
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
                    <div className={cx('profile-detail-btn')} onClick={() => handleEditUser()}>
                        <Button text={'Save Changes'} blackText />
                    </div>
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
                            <span>{data.phone}</span>
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
                            <span>{data.email}</span>
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
                            <span>{data.address}</span>
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
                                <label htmlFor="Fullname">New Password</label>
                                <input id="Fullname" type="text" className={cx('profile-detail-input')} />
                            </div>
                            <div className={cx('profile-detail-pass')}>
                                <label htmlFor="Fullname">Confirm Password</label>
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
