import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import Button from '@/components/Button/ButtonIndex';
import { useState } from 'react';
import images from '@/assets';
import classNames from 'classnames/bind';
import styles from '../Profile.module.scss';

const cx = classNames.bind(styles);

function UserInfo({ data }) {
    const [avatar, setAvatar] = useState(images.avatar);
    const [isImageError, setIsImageError] = useState(false);

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

    return (
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
                    <input id="email" type="text" className={cx('profile-detail-input')} value={data.level === 1 ? "Admin" : "Member"}/>
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
            <div className={cx('profile-detail-btn')}>
                <Button text={'Save Changes'} blackText />
            </div>
        </div>
    );
}

export default UserInfo;
