import classNames from 'classnames/bind';
import styles from './Profile.module.scss';

const cx = classNames.bind(styles);

const OrderComponent = () => {
    return (
        <div>
            <h2 className={cx('profile-detail-heading')}>Order Information</h2>
            
        </div>
    );
};

export default OrderComponent;
