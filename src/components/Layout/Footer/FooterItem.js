import classNames from 'classnames/bind';
import styles from './FooterIndex.module.scss';

const cx = classNames.bind(styles);

function FooterItem() {
    return (
        <div className={cx('footer-item')}>
            <h4 className={cx('footer-item-title')}>Help</h4>
            <ul className={cx('footer-item-wrapper')}>
                <li className={cx('footer-item-child')}>Search</li>
                <li className={cx('footer-item-child')}>Help</li>
                <li className={cx('footer-item-child')}>Information</li>
                <li className={cx('footer-item-child')}>Privacy Policy</li>
                <li className={cx('footer-item-child')}>Shipping Details</li>
            </ul>
        </div>
    );
}

export default FooterItem;
