import classNames from 'classnames/bind';
import styles from './Nav_Index.module.scss';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search } from '@/icons';
import { toast, Flip } from 'react-toastify';
import { useShoppingContext } from '@/contexts/Shopping_Context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import Tippy from '@tippyjs/react/headless'
import 'tippy.js/dist/tippy.css';
import Cart from '../Cart/Cart';

const cx = classNames.bind(styles);

function NavBarIndex() {
    const [check, setCheck] = useState(false);
    const [show, setShow] = useState(false);

    const { cartQuantity,remove,showPoper } = useShoppingContext();

    const navigate = useNavigate();

    const handleSearch = () => {
        setCheck(!check);
    };

    const handleCheckLogin = () => {
        // let check = localStorage.getItem('jwt');
        // if(!check){
        //     toast.error('You need login to use this page', {
        //         transition: Flip,
        //         autoClose: 2000,
        //     });
        //     navigate('/account/login')
        // }else{
        //     navigate('/')
        // }
        setShow(true);
        showPoper();
    };

    const handleCheckWasLogin = () => {
        let check = localStorage.getItem('jwt');
        if (check) {
            navigate('/user');
        }
    };

    const handleHideCart = () => {
        setShow(false)
    }

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
                                        checked={false}
                                        className={cx('nav-item-check')}
                                        onChange={() => handleSearch()}
                                        hidden
                                    />
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
                            offset={[-200, 24]}
                            render={(attrs) => (
                                <div className={cx('add-cart')} tabIndex="-1" {...attrs}>
                                    <Cart />
                                </div>
                            )}
                            onClickOutside={()=>handleHideCart()}
                        >
                            <li className={cx('nav-item-right')}>
                                <button className={cx('nav-item-link-cart')} onClick={() => handleCheckLogin()}>
                                    <FontAwesomeIcon icon={icon({ name: 'cart-shopping', style: 'solid' })} />
                                    <div className={cx('nav-cart-icon')} data-count={cartQuantity}></div>
                                </button>
                            </li>
                        </Tippy>
                        <li className={cx('nav-item-right')} onClick={() => handleCheckWasLogin()}>
                            <Link to="/account/login" className={cx('nav-item-link')}>
                                <FontAwesomeIcon
                                    icon={icon({ name: 'user', style: 'solid' })}
                                    className={cx('nav-user-icon')}
                                />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default NavBarIndex;
