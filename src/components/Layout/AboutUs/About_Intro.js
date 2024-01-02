import images from '@/assets';
import classNames from 'classnames/bind';
import styles from './About.module.scss';

const cx = classNames.bind(styles);

const AboutIntro = () => {
    return (
        <div className={cx('about-introduce-container')}>
            <div className={cx('about-introduce-wrapper')}>
                <div className={cx('about-introduce')}>
                    <div className={cx('about-introduce-content')}>
                        <h4 className={cx('about-introduce-heading')}>Welcome to Maru Dry Fruits</h4>
                        <p className={cx('about-introduce-text')}>
                            Established as a cornerstone in the local community, Maru Dry Fruits is proud to be a
                            long-standing supplier of high-quality dried fruits. Our store has become the top choice in
                            supplying dried fruits to our valuable customers.
                        </p>
                        <p className={cx('about-introduce-text-italic')}>
                            At Maru Dry Fruits, we understand the significance of offering not just a product, but a
                            wholesome experience. Our commitment to quality is unwavering, and we source the finest dry
                            fruits from reputable suppliers to ensure that every bite is a delight.
                        </p>
                    </div>
                    <div className={cx('about-introduce-image')}>
                        <img src={images.about} alt="introduce" className={cx('about-introduce-img')} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutIntro;
