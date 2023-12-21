import UserInfo from './User_Info';
import UserContact from './User_contact';
import classNames from 'classnames/bind';
import styles from '../Profile.module.scss';

const cx = classNames.bind(styles);

const AccountInformation = () => {
    return (
        <div className={cx('profile-detail-container')}>
            <div className={cx('profile-detail-wrapper')}>
                <h2 className={cx('profile-detail-heading')}>Account Information</h2>
                <UserInfo />
            </div>
            <UserContact />
        </div>
    );
};

export default AccountInformation;
