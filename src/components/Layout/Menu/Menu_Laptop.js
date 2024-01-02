import { Link } from 'react-router-dom';

import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuLaptop() {
    return (
        <>
            <div className={cx('menu-page-container')}>
                <div className={cx('menu-page-wrapper')}>
                    <Link to="/about" className={cx('menu-page-link')}>ABOUT US</Link>
                    <Link to="/terms" className={cx('menu-page-link')}>TERMS</Link>
                    <Link to="/sitemap" className={cx('menu-page-link')}>SITEMAP</Link>
                </div>
            </div>
        </>
    );
}

export default MenuLaptop;