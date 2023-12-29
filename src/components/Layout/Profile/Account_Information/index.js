import classNames from 'classnames/bind';
import styles from '../Profile.module.scss';
import { useEffect, useState } from 'react';
import { dataUser } from '@/service/User_Service';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import Button from '@/components/Button/ButtonIndex';
import { editDataUser } from '@/service/User_Service';
import images from '@/assets';
import Loading from '../../Loading/Loading';

const cx = classNames.bind(styles);

const AccountInformation = () => {
    const [data, getData] = useState('');
    const [updatePass, setUpdatePass] = useState(false);
    const [avatar, setAvatar] = useState(images.avatar);
    const [isImageError, setIsImageError] = useState(false);
    const [loading, setLoading] = useState(true);

    const [phone, setPhone] = useState(false);
    const [newPhone, setNewPhone] = useState('');

    const [address, setAddress] = useState(false);
    const [newAddress, setNewAddress] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                let res = await dataUser();
                getData(res.response);
            } catch (error) {
                console.log('error', error);
            } finally {
                setLoading(false);
            }
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
        await editDataUser();
    };

    return (
        <>
            {loading === true ? (
                <Loading />
            ) : (
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
                                        <label htmlFor="name">Full Name</label>
                                        <input
                                            id="name"
                                            type="text"
                                            className={cx('profile-detail-input')}
                                            value={data.full_name}
                                        />
                                    </div>

                                    <div className={cx('profile-detail-outner-input')}>
                                        <label htmlFor="email">Email</label>
                                        <input
                                            id="email"
                                            type="text"
                                            className={cx('profile-detail-input')}
                                            value={data.email}
                                            readOnly
                                            disabled
                                        />
                                    </div>

                                    <div className={cx('profile-detail-outner-input')}>
                                        <div className={cx('profile-detail-outner-level')}>
                                            <label>Level</label>
                                            <input
                                                type="text"
                                                className={cx('profile-detail-input')}
                                                value={data.level === 1 ? 'Admin' : 'Member'}
                                                readOnly
                                                disabled
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={cx('profile-detail-btn')} onClick={() => handleEditUser()}>
                                <Button text={'Save'} blackText />
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
                                    {phone ? (
                                        <input
                                            value={newPhone}
                                            onChange={(e) => setNewPhone(e.target.value)}
                                            className={cx('profile-detail-change')}
                                        />
                                    ) : (
                                        <span>{data.phone}</span>
                                    )}
                                </div>
                                <span onClick={() => setPhone(!phone)}>
                                    <Button text={'Update'} blackText smal />
                                </span>
                            </div>

                            <div className={cx('profile-detail-item')}>
                                <div className={cx('profile-detail-item-left')}>
                                    <FontAwesomeIcon
                                        icon={icon({ name: 'map', style: 'solid' })}
                                        className={cx('profile-detail-icon')}
                                    />
                                    <p className={cx('profile-detail-title')}>Address</p>
                                    <span className={cx('profile-detail-dots')}>:</span>
                                    {address ? (
                                        <input
                                            value={newAddress}
                                            onChange={(e) => setNewAddress(e.target.value)}
                                            className={cx('profile-detail-change')}
                                        />
                                    ) : (
                                        <span>{data.address}</span>
                                    )}
                                </div>
                                <span onClick={() => setAddress(!address)}>
                                    <Button text={'Update'} blackText smal />
                                </span>
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
                                    <Button text={'Update'} blackText smal />
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
                                        <Button text={'Change'} blackText />
                                    </span>
                                </div>
                            ) : null}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default AccountInformation;
