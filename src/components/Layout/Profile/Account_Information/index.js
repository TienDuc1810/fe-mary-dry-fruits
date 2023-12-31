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

    const [fullName, setFullName] = useState(false);
    const [newFullName, setNewFullName] = useState('');

    const [phone, setPhone] = useState(false);
    const [newPhone, setNewPhone] = useState('');

    const [address, setAddress] = useState(false);
    const [newAddress, setNewAddress] = useState('');

    const [errorName, setErrorName] = useState(false);
    const [errorPhone, setErrorPhone] = useState(false);
    const [errorAddress, setErrorAddress] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let res = await dataUser();
                if (res && res.response) {
                    let phone = res.response.phone || '';
                    let address = res.response.address || '';
                    let fullName = res.response.full_name || '';
                    getData(res.response);
                    setNewFullName(fullName);
                    setNewPhone(phone);
                    setNewAddress(address);
                } else {
                    getData([]);
                }
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
        if (!newFullName) {
            setErrorName(true);
        } else {
            setErrorName(false);
        }

        if (!newAddress) {
            setErrorAddress(true);
        } else {
            setErrorAddress(false);
        }

        if (!newPhone) {
            setErrorPhone(true);
        } else {
            setErrorPhone(false);
        }

        if (!errorAddress && !errorName && !errorPhone) {
            await editDataUser(newFullName, newPhone, newAddress);
            setPhone(false);
            setAddress(false);
            setFullName(false);
        }
        return;
    };

    return (
        <>
            {loading === true ? <Loading /> : null}
            <div className={cx('profile-detail-container')}>
                <div className={cx('profile-detail-wrapper')}>
                    <h2 className={cx('profile-detail-heading')}>Account Information</h2>
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
                                <label>Full Name</label>
                                <input
                                    type="text"
                                    className={cx('profile-detail-input')}
                                    value={data.full_name}
                                    // value={newFullName}
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

                            <div className={cx('profile-detail-btn')} onClick={() => handleEditUser()}>
                                <Button text={'Save'} blackText />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('profile-detail-wrapper')}>
                    <div className={cx('profile-detail-main')}>
                        <div className={cx('profile-detail-item')}>
                            <div className={cx('profile-detail-item-left')}>
                                <FontAwesomeIcon
                                    icon={icon({ name: 'user', style: 'solid' })}
                                    className={cx('profile-detail-icon')}
                                />
                                <p className={cx('profile-detail-title')}>Name</p>
                                <span className={cx('profile-detail-dots')}>:</span>
                                {fullName ? (
                                    <input
                                        value={newFullName}
                                        onChange={(e) => setNewFullName(e.target.value)}
                                        className={cx('profile-detail-change')}
                                    />
                                ) : (
                                    <span>{newFullName.length > 0 ? newFullName : data.full_name}</span>
                                )}
                            </div>
                            <span onClick={() => setFullName(!fullName)}>
                                <Button text={'Update'} blackText />
                            </span>
                        </div>

                        {errorName ? <p>* Please do not leave blank </p> : ''}

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
                                    <span>{newPhone.length > 0 ? newPhone : data.phone}</span>
                                )}
                            </div>
                            <span onClick={() => setPhone(!phone)}>
                                <Button text={'Update'} blackText smal />
                            </span>
                        </div>

                        {errorPhone ? <p>* Please do not leave blank and length is minimum 10 maximum 15 </p> : ''}

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
                                    <span>{newAddress.length > 0 ? newAddress : data.address}</span>
                                )}
                            </div>

                            <span onClick={() => setAddress(!address)}>
                                <Button text={'Update'} blackText smal />
                            </span>
                        </div>

                        {errorAddress ? <p>* Please do not leave blank </p> : ''}

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
        </>
    );
};

export default AccountInformation;
