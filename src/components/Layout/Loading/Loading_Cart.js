import BeatLoader from 'react-spinners/BeatLoader';
import classNames from 'classnames/bind';
import styles from './Loading.module.scss';

const cx = classNames.bind(styles);

const LoadingCart = ({ loading }) => {
    return (
        <div className={cx('loading-cart-container')}>
            <div className={cx('loading-cart-wrapper')}>
                <BeatLoader
                    color="#1877f2"
                    loading={loading}
                    size={30}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
                <div>Loading Data...</div>
            </div>
        </div>
    );
};

export default LoadingCart;
