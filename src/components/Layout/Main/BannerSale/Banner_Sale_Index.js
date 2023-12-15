import classNames from 'classnames/bind';
import styles from './Banner_Sale_Index.module.scss';
import Button from '@/components/Button/ButtonIndex';

const cx = classNames.bind(styles);

const ParallaxBanner = ({ image, name, percent_decrease, description, text }) => {
    return (
        <div className={cx('container')}>
            <div className={cx('parallax-banner-container')}>
                <div className={cx('parallax-banner-image')} style={image}></div>
            </div>
            <div className={cx('parallax-banner__outner')}>
                <div className={cx('parallax-banner__wrapper')}>
                    <div className={cx('parallax-banner__title')}>{name}</div>
                    <div className={cx('parallax-banner__detail')}>
                        <span>Get {percent_decrease}% off</span>
                        <span>{description}</span>
                    </div>
                    <div className={cx('parallax-banner__text')}>
                        <p>{text}</p>
                    </div>
                    <div className={cx('parallax-banner__btn')}>
                        <Button text={'View more'} link={'/product'} primary />
                        <Button text={'Shop now'} link={'/product'} normal />
                    </div>
                </div>
            </div>
        </div>
    );
};

const NormalBanner = ({ image, name, percent_decrease, description }) => {
    return (
        <div className={cx('container')}>
            <div className={cx('normal-banner-container')} style={image}>
                <div className={cx('normal-banner__wrapper')}>
                    <div className={cx('normal-banner__title')}>{name}</div>
                    <div className={cx('normal-banner__detail')}>
                        <span className={cx('normal-banner__sale')}>{percent_decrease}% OFF</span>
                        <span className={cx('normal-banner__description')}>{description}</span>
                    </div>
                    <div className={cx('normal-banner__btn')}>
                        <Button text={'Shop now'} link={'/product'} normal />
                        <Button text={'View more'} link={'/product'} primary />
                    </div>
                </div>
            </div>
        </div>
    );
};
export { ParallaxBanner, NormalBanner };
