import Header from '@/components/Layout/Header/Header_Index';
import classNames from 'classnames/bind';
import styles from './SiteMapPage.module.scss';

const cx = classNames.bind(styles);

const SiteMapPage = () => {
    return (
        <>
            <Header title={'Site Map'}/>
            <div className={cx('sitemap-container')}>
                <div class={cx('sitemap-wrapper')}>
                    <h1 className={cx('sitemap-heading')}>MY SITEMAP</h1>
                    <nav className={cx('primary')}>
                        <ul>
                            <li id="home">
                                <a href="https://localhost:3000">
                                    <i className={cx('fa fa-home')}></i> Home <small>Home Page</small>
                                </a>
                                <ul>
                                    <li>
                                        <a href="/product">
                                            <i className={cx('fa fa-search')}></i> Product <small>Show product</small>
                                        </a>
                                        <ul>
                                            <li>
                                                <a href="/product/list">List Product</a>
                                            </li>
                                            <li>
                                                <a href="/product/search">Search Product</a>
                                            </li>
                                        </ul>
                                    </li>

                                    <li>
                                        <a href="/store">
                                            <i className={cx('fa fa-search')}></i> Store <small>Shopping Cart</small>
                                        </a>

                                        <ul>
                                            <li>
                                                <a href="/store/details">Customer Shopping Cart</a>
                                                <ul>
                                                    <li>
                                                        <a href="/store/details/:id" className={cx('multi')}>
                                                            Cart Information
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="/store/user">List User</a>
                                                <ul>
                                                    <li>
                                                        <a href="/store/user/:id" className={cx('multi')}>
                                                            User Information
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="/store/categoty">List Category</a>
                                                <ul>
                                                    <li>
                                                        <a href="/store/categoty/:id" className={cx('multi')}>
                                                            All products belong to the category ID
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="/account">
                                            <i className={cx('fa fa-building')}></i> Account <small>Account User</small>
                                        </a>
                                        <ul>
                                            <li>
                                                <a href="/account/login">User Login</a>
                                            </li>
                                            <li>
                                                <a href="/account/register">User Register</a>
                                            </li>
                                        </ul>
                                    </li>

                                    <li>
                                        <a href="/store">
                                            <i className={cx('fa fa-rss')}></i> Contact <small>Contact Page</small>
                                        </a>
                                        <ul>
                                            <li>
                                                <a href="/store/details" className={cx('multi')}>
                                                    Customer Shopping Cart
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </nav>

                    <nav className={cx('secondary')}>
                        <ul>
                            <li>
                                <a href="/about">About Us</a>
                            </li>
                            <li>
                                <a href="/Blog">Blog Page</a>
                            </li>
                            <li>
                                <a href="/faqs">FAQs</a>
                            </li>
                            <li>
                                <a href="/terms">Terms &amp; Conditions</a>
                            </li>
                            <li>
                                <a href="/privacy">Privacy Policy</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    );
};

export default SiteMapPage;
