import classNames from 'classnames/bind';
import styles from './Profile.module.scss';
import Button from '@/components/Button/ButtonIndex';

const cx = classNames.bind(styles);

const CustomerSupport = () => {
    return (
        <div>
            <h2 className={cx('profile-detail-heading')}>Customer Support</h2>
            <div className={cx('profile-help')}>
            <label for="help" className={cx('profile-help-heading')}>Please send us your problem:</label>
            <textarea id="help" className={cx('profile-help-textarea')} rows="7" cols="80">
            </textarea>
            </div>
            <div className={cx('profile-help-btn')}>
                <Button text={'Send'} blackText/>
            </div>
        </div>
    );
};

export default CustomerSupport;