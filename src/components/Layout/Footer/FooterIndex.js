import classNames from 'classnames/bind';
import styles from './FooterIndex.module.scss';
import images from '@/assets';
import { Link } from 'react-router-dom';
import { FaceBook, Pinterest, Instagram } from '@/icons';
import FooterItem from './FooterItem';

const cx = classNames.bind(styles);

function FooterIndex() {
    const urlBackgroundImage = {
        backgroundImage: `url(${images.br_image_3})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    return (
        <div className={cx('footer-container')}>
            <div className={cx('footer-back-ground')} style={urlBackgroundImage}>
                <div className={cx('footer-main')}>
                    <ul className={cx('footer-wrapper')}>
                        <h4 className={cx('footer-title')}>About us</h4>
                        <li className={cx('footer-detail')}>
                            <span className={cx('footer-description')}>
                                Pellentesque posuere orci lobortis scelerisque blandit. Donec id tellus lacinia an,
                                tincidunt risus ac, consequat velit.
                            </span>
                        </li>
                        <li className={cx('footer-outner-btn')}>
                            <Link to="/" className={cx('footer-btn')}>
                                Read More
                            </Link>
                        </li>
                        <li className={cx('footer-outner-icon')}>
                            <span>
                                <FaceBook />
                                <Link to="/" />
                            </span>
                            <span>
                                <Pinterest />
                                <Link to="/" />
                            </span>
                            <span>
                                <Instagram />
                                <Link to="/" />
                            </span>
                        </li>
                    </ul>

                    <FooterItem
                        title={'Help'}
                        item_1={'Search'}
                        item_2={'Help'}
                        item_3={'Information'}
                        item_4={'Privacy Policy'}
                        item_5={'Shipping Details'}
                    />
                    <FooterItem
                        title={'Support'}
                        item_1={'Contact us'}
                        item_2={'About us'}
                        item_3={'Careers'}
                        item_4={'Refunds'}
                        item_5={'Deliveries'}
                    />
                    <FooterItem
                        title={'Information'}
                        item_1={'Search Terms'}
                        item_2={'Advanced Search'}
                        item_3={"Help & Faq's"}
                        item_4={'Store Location'}
                        item_5={'Orders & Returns'}
                    />

                    <ul className={cx('footer-wrapper')}>
                        <h4 className={cx('footer-title')}>Contact us</h4>
                        <li className={cx('footer-detail')}>
                            <span className={cx('footer__description')}>
                                Pellentesque posuere orci lobortis scelerisque blandit. Donec id tellus lacinia an,
                                tincidunt risus ac, consequat velit.
                            </span>
                        </li>
                        <li className={cx('footer-outner-btn')}>
                            <Link to="/" className={cx('footer-btn')}>
                                Read More
                            </Link>
                        </li>
                        <li className={cx('footer-outner-icon')}>
                            <span>
                                <FaceBook />
                                <Link to="/" />
                            </span>
                            <span>
                                <Pinterest />
                                <Link to="/" />
                            </span>
                            <span>
                                <Instagram />
                                <Link to="/" />
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default FooterIndex;
