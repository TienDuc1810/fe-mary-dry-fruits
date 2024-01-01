import FadeLoader from 'react-spinners/FadeLoader';
import classNames from 'classnames/bind';
import styles from './Loading.module.scss';

const cx = classNames.bind(styles);

const Loading = ({ loading }) => {
    return (
        <div className={cx('loading-container')}>
            <div className={cx('loading-wrapper')}>
                <FadeLoader
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

export default Loading;
