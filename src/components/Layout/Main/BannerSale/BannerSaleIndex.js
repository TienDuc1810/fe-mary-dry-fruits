import classNames from 'classnames/bind';
import styles from './BannerSaleIndex.module.scss';
import Button from '@/components/Button/ButtonIndex';
import images from '@/assets/images';

const cx = classNames.bind(styles);

const ParallaxBanner = () => {
    return (
        <div className={cx('container')}>
            <div className={cx('parallax-banner-container')}>
                <div className={cx('parallax-banner-image')}></div>
                <div className={cx('parallax-banner__outner')}>
                    <div className={cx('parallax-banner__title')}>Healthy Herbs</div>
                    <div className={cx('parallax-banner__detail')}>
                        <span>Get 10% off</span>
                        <span>On all Spicy & Herbs</span>
                    </div>
                    <div className={cx('parallax-banner__text')}>
                        <p>
                            Lorem ipsum has become the industry standard for design mockups and prototypes. By adding a
                            little bit of Latin to a mockup.
                        </p>
                    </div>
                    <div className={cx('parallax-banner__btn')}>
                        <Button text={'View more'} link={'/'} primary />
                        <Button text={'Shop now'} link={'/'} normal />
                    </div>
                </div>
            </div>
        </div>
    );
};

const NormalBanner = () => {
    const urlBackgroundImage = {
        backgroundImage: `url(${images.br_image_2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    return (
        <div className={cx('container')}>
            <div className={cx('normal-banner-container')} style={urlBackgroundImage}>
                <div className={cx('normal-banner__wrapper')}>
                    <div className={cx('normal-banner__title')}>Cardamom / Clove / Cumin</div>
                    <div className={cx('normal-banner__detail')}>
                        <span className={cx('normal-banner__sale')}>50% OFF</span>
                        <span className={cx('normal-banner__description')}>ALL PRODUCTS</span>
                    </div>
                    <div className={cx('normal-banner__text')}>
                        <p></p>
                    </div>
                    <div className={cx('normal-banner__btn')}>
                        <Button text={'Shop now'} link={'/'} normal />
                        <Button text={'View more'} link={'/'} primary />
                    </div>
                </div>
            </div>
        </div>
    );
};
export { ParallaxBanner, NormalBanner };
