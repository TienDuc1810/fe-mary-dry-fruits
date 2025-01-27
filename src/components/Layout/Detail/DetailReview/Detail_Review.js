import classNames from 'classnames/bind';
import styles from '../Detail.module.scss';
import { StarCheck, Star } from '@/icons';

const cx = classNames.bind(styles);

const DetailReview = ({ star }) => {
    return (
        <div className={cx('detail-review')}>
            <h4 className={cx('detail-review-heading')}>Customer Reviewer</h4>
            <h6 className={cx('detail-review-title')}>Over View</h6>
            <div className={cx('detail-review-star')}>
                <span className={cx('detail-review-amount')}>{star}</span>
                {Array.from({ length: 5 }).map((_, index) =>
                    index < star ? (
                        <StarCheck key={index} className={cx('check')} />
                    ) : (
                        <Star key={index} className={cx('no-check')} />
                    ),
                )}
            </div>
        </div>
    );
};

export default DetailReview;
