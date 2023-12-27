import classNames from 'classnames/bind';
import styles from './Nav_Index.module.scss';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search } from '@/icons';
import { useShoppingContext } from '@/contexts/Shopping_Context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import Cart from '../Cart/Cart';
import { dataUser } from '@/service/User_Service';

const cx = classNames.bind(styles);

function NavBarIndex() {
    const [checkLogin, setCheckLogin] = useState(null);
    const [show, setShow] = useState(false);
    const [data, getData] = useState('');
    const { cartQuantity, remove, showPoper, addQuantity } = useShoppingContext();

    const navigate = useNavigate();

    useEffect(() => {
        const jwt = localStorage.getItem('jwt');
        setCheckLogin(jwt);
        if (checkLogin !== null) {
            navigate('/user');
        }

        const fetchData = async () => {
            let res = await dataUser();
            getData(res.response);
        };
        fetchData();
    }, []);

    const handleCart = () => {
        setShow(true);
        showPoper();
    };

    const handleCheckWasLogin = () => {};

    const handleHideCart = () => {
        setShow(false);
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
                                <label htmlFor="checkbox1">
                                    <input type="text" className={cx('nav-item-search')} placeholder="Search" />
                                    <div className={cx('outner')}>
                                        <Search className={cx('nav-item-icon')} />
                                    </div>
                                </label>
                            </Link>
                        </li>
                        <Tippy
                            interactive={true}
                            visible={remove && show && cartQuantity > 0}
                            offset={[-277, 24]}
                            render={(attrs) => (
                                <div className={cx('add-cart')} tabIndex="-1" {...attrs}>
                                    <Cart />
                                </div>
                            )}
                            onClickOutside={() => handleHideCart()}
                        >
                            <li className={cx('nav-item-right')}>
                                <button className={cx('nav-item-link-cart')} onClick={() => handleCart()}>
                                    <FontAwesomeIcon icon={icon({ name: 'cart-shopping', style: 'solid' })} />
                                    <div className={cx('nav-cart-icon')} data-count={addQuantity}></div>
                                </button>
                            </li>
                        </Tippy>
                        <li className={cx('nav-item-right')} onClick={() => handleCheckWasLogin()}>
                            {checkLogin === null ? (
                                <Link to="/account/login" className={cx('nav-item-link')}>
                                    <FontAwesomeIcon
                                        icon={icon({ name: 'user', style: 'solid' })}
                                        className={cx('nav-user-icon')}
                                    />
                                </Link>
                            ) : (
                                <Link to="/user">
                                    Wellcome: {data.full_name !== null ? data.full_name : data.email}
                                </Link>
                            )}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default NavBarIndex;
