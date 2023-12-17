import classNames from 'classnames/bind';
import styles from './Slider.module.scss';
import images from '@/assets';
import SliderItem from './Slider_Item';


const cx = classNames.bind(styles);

const SlideIndex = () => {
    

    const slider = [
        { title: 'The choice of chefs', text: '15% OFF ON SPICES', discount: 'SPI15', image: images.slider_1 },
        { title: 'Herbs & Spices', text: 'FLAT 10% OFF', discount: 'SPI10', image: images.slider_2 },
        { title: 'All Organic Spices', text: '20% OFF ALL PRODUCTS', discount: 'SPI20', image: images.slider_3 },
    ];

    return (
        <div className={cx('slider-container')}>
            <SliderItem slider={slider} />
        </div>
    );
};

export default SlideIndex;
