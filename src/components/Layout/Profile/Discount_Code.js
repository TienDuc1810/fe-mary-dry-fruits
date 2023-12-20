import classNames from 'classnames/bind';
import styles from './Profile.module.scss';

const cx = classNames.bind(styles);

const DiscountCode = () => {
    return (
        <div>
            <h2 className={cx('profile-detail-heading')}>Discount Code</h2>
            
        </div>
    );
};

export default DiscountCode;