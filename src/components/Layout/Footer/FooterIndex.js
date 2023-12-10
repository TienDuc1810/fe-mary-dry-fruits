import classNames from 'classnames/bind';
import styles from './FooterIndex.module.scss';
import images from '@/assets/images';
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
            <div
                className={cx('footer-back-ground')}
                style={urlBackgroundImage}
            >
                <ul className={cx('footer-wrapper')}>
                    <h4 className={cx('footer-title')}>About us</h4>
                    <li className={cx('footer-detail')}>
                        <span className={cx('footer__description')}>
                            Pellentesque posuere orci lobortis scelerisque
                            blandit. Donec id tellus lacinia an, tincidunt risus
                            ac, consequat velit.
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

                {/* code item */}
                

                <FooterItem/>
                <FooterItem/>
                <FooterItem/>
                
                <ul className={cx('footer-wrapper')}>
                    <h4 className={cx('footer-title')}>About us</h4>
                    <li className={cx('footer-detail')}>
                        <span className={cx('footer__description')}>
                            Pellentesque posuere orci lobortis scelerisque
                            blandit. Donec id tellus lacinia an, tincidunt risus
                            ac, consequat velit.
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
    );
}

export default FooterIndex;
