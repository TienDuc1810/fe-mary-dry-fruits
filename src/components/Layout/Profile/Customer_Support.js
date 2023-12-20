import classNames from 'classnames/bind';
import styles from './Profile.module.scss';

const cx = classNames.bind(styles);

const CustomerSupport = () => {
    return (
        <div>
            <h2 className={cx('profile-detail-heading')}>Customer Support</h2>
            
        </div>
    );
};

export default CustomerSupport;