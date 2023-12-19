import classNames from 'classnames/bind';
import styles from './Profile.module.scss';

const cx = classNames.bind(styles);

const Notification = () => {
    return (
        <div>
            <h2 className={cx('profile-detail-heading')}>Notification</h2>
            
        </div>
    );
};

export default Notification;