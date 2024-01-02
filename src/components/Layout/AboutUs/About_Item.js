import classNames from 'classnames/bind';
import styles from './About.module.scss';

const cx = classNames.bind(styles);

const AboutItem = ({ title, icon, text }) => {
    return (
        <div className={cx('about-item-container')}>
            <div className={cx('about-item-icon')}>{icon}</div>
            <div className={cx('about-item-content')}>
                <h4 className={cx('about-item-heading')}>{title}</h4>
                <p className={cx('about-item-text')}>
                    {text}
                </p>
            </div>
        </div>
    );
};

export default AboutItem;
