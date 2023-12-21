import classNames from 'classnames/bind';
import styles from './Slider.module.scss';
import SliderItem from './Slider_Item';

const cx = classNames.bind(styles);

const SlideIndex = ({banners}) => {
    
    return (
        <div className={cx('slider-container')}>
            <SliderItem banners={banners} />
        </div>
    );
};

export default SlideIndex;
