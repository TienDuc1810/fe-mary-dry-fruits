import FadeLoader from 'react-spinners/FadeLoader';
import classNames from 'classnames/bind';
import styles from '@/components/GlobalStyles/GlobalStyles.scss';

const cx = classNames.bind(styles);

const Loading = ({loading}) => {

    return (
        <div className={cx('loading-container')}>
            <FadeLoader color="#1877f2" loading={loading} size={30} aria-label="Loading Spinner" data-testid="loader" />
            <div>Loading Data...</div>
        </div>
    );
};

export default Loading;
