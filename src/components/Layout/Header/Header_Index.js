import images from '@/assets';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function HeaderIndex({ title }) {
    return (
        <div className={cx('header-container')}>
            <div className={cx('header-wrapper')}>
                <div className={cx('header-overlay')}></div>
                <div className={cx('header-outner-image')}>
                    <img src={images.header} alt="header" className={cx('header-image')} />
                </div>
                <div className={cx('header-outner-logo')}>
                    <img src={images.logo} alt="header-logo" className={cx('header-logo')} />
                    <span className={cx('header-name-team')}>Hello World</span>
                </div>
                <div className={cx('header-outner-title')}>
                    <span className={cx('header-title')}>{title}</span>
                </div>
            </div>
        </div>
    );
}

export default HeaderIndex;
