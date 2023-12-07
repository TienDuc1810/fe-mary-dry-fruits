import classNames from 'classnames/bind';
import styles from './SlideIndex.module.scss';

const cx = classNames.bind(styles);

function SlideIndex() {
    return ( 
        <div className={cx('container')}>
            <h2>hello index</h2>
        </div>
    );
}

export default SlideIndex;