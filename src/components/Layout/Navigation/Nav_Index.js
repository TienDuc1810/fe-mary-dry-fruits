import classNames from 'classnames/bind';
import styles from './Nav_Index.module.scss';
import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Search } from '@/icons';
import { toast, Flip } from 'react-toastify';
import { useShoppingContext } from '@/contexts/Shopping_Context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';

const cx = classNames.bind(styles);

function NavBarIndex() {
    const [check, setCheck] = useState(false);

    const {cartQuantity} = useShoppingContext()

    const navigate = useNavigate();

    const handleSearch = () => {
        setCheck(!check);
    };

    const handleCheckLogin = () => {
        let check = localStorage.getItem('jwt');
        if(!check){
            toast.error('You need login to use this page', {
                transition: Flip,
                autoClose: 2000,
            });
            navigate('/account/login')
        }else{
            navigate('/cart')
        }
    }
   

    const handleCheckWasLogin = () => {
        let check = localStorage.getItem('jwt');
        if(check){
            navigate('/user'); 
        }
    }

    return (
        <div className={cx('nav-container')}>
            <div className={cx('nav-wrapper')}>
                <div className={cx('nav-outner')}>
                    <ul className={cx('nav-list-left')}>
                        <li className={cx('nav-item-left')}>
                            <NavLink to="/" className={cx('nav-item-link')}>
                                HOME
                            </NavLink>
                        </li>
                        <li className={cx('nav-item-left')}>
                            <NavLink to="/product" className={cx('nav-item-link')}>
                                PRODUCT
                            </NavLink>
                        </li>
                        <li className={cx('nav-item-left')}>
                            <NavLink to="/contact" className={cx('nav-item-link')}>
                                CONTACT
                            </NavLink>
                        </li>
                        <li className={cx('nav-item-left')}>
                            <NavLink to="/sitemap" className={cx('nav-item-link')}>
                                SITEMAP
                            </NavLink>
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
                                    <input type="text" className={cx('nav-item-search')} placeholder="Search" />
                                    <div className={cx('outner')}>
                                        <Search className={cx('nav-item-icon')} />
                                    </div>
                                </label>
                            </Link>
                        </li>
                        <li className={cx('nav-item-right')} >
                            <button className={cx('nav-item-link-cart')}  onClick={()=>handleCheckLogin()}>
                                <FontAwesomeIcon icon={icon({ name: 'cart-shopping', style: 'solid' })} />
                                <div className={cx('nav-cart-icon')} data-count={cartQuantity}></div>
                            </button>
                        </li>
                        <li className={cx('nav-item-right')} onClick={()=>handleCheckWasLogin()}>
                            <Link to="/account/login" className={cx('nav-item-link')}>
                                <FontAwesomeIcon
                                    icon={icon({ name: 'user', style: 'solid' })}
                                    className={cx('product-icon')}
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
