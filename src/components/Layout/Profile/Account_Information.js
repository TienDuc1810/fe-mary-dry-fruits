import classNames from 'classnames/bind';
import styles from './Profile.module.scss';

const cx = classNames.bind(styles);

const AccountInformation = () => {
    return (
        <div>
            <h2 className={cx('profile-detail-heading')}>Account Information</h2>
            <div className={cx('profile-detail-outner-input')}>
                <label htmlFor="Fullname">Full Name</label>
                <input id="Fullname" type="text" className={cx('profile-detail-input')} />
            </div>

            <div className={cx('profile-detail-outner-input')}>
                <label htmlFor="email">Email</label>
                <input id="email" type="text" className={cx('profile-detail-input')} />
            </div>
            <div className={cx('profile-detail-outner-input')}>
                <label htmlFor="phone">Phone Number</label>
                <input id="phone" type="text" className={cx('profile-detail-input')} />
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
        </div>
    );
};

export default AccountInformation;
