import classNames from 'classnames/bind';
import styles from './NavBarIndex.module.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search } from '@/icons';

const cx = classNames.bind(styles);

function NavBarIndex() {
    const [check, setCheck] = useState(false);

    const handleSearch = () => {
        setCheck(!check);
    };

    return (
        <div className={cx('nav-container')}>
            <div className={cx('nav-wrapper')}>
                <div className={cx('nav-outner')}>
                    <ul className={cx('nav-list-left')}>
                        <li className={cx('nav-item-left')}>
                            <Link to="/" className={cx('nav-item-link')}>
                                HOME
                            </Link>
                        </li>
                        <li className={cx('nav-item-left')}>
                            <Link to="/product" className={cx('nav-item-link')}>
                                PRODUCT
                            </Link>
                        </li>
                        <li className={cx('nav-item-left')}>
                            <Link to="/contact" className={cx('nav-item-link')}>
                                CONTACT
                            </Link>
                        </li>
                        <li className={cx('nav-item-left')}>
                            <Link to="/sitemap" className={cx('nav-item-link')}>
                                SITEMAP
                            </Link>
                        </li>
                    </ul>
                    <ul className={cx('nav-list-right')}>
                        <li className={cx('nav-item-right')}>
                            <Link to="/" className={cx('nav-item-link')}>
                                <label htmlFor="checkbox1" onClick={handleSearch}>
                                    <input
                                        type="checkbox"
                                        id="checkbox1"
                                        checked={check}
                                        className={cx('nav-item-check')}
                                        onChange={() => handleSearch()}
                                        hidden
                                    />
                                    <input type="text" className={cx('nav-item-search')} placeholder='Search'/>
                                    <div className={cx('outner')}>
                                        <Search className={cx('nav-item-icon')} />
                                    </div>
                                </label>
                            </Link>
                        </li>
                        <li className={cx('nav-item-right')}>
                            <Link to="/cart" className={cx('nav-item-link')}>
                                Giỏ hàng
                            </Link>
                        </li>
                        <li className={cx('nav-item-right')}>
                            <Link to="/account/login" className={cx('nav-item-link')}>
                                Account
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default NavBarIndex;
