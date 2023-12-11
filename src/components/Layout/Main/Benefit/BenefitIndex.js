import classNames from 'classnames/bind';
import styles from './BenefitIndex.module.scss';

const cx = classNames.bind(styles);

function BenefitIndex({ title, description, icon, classNames = false }) {
    return (
        <div className={cx('benefit-container')}>
            <div className={cx('benefit-outner-icon')}>
                <div className={cx('benefit-icon')}>
                    {icon}
                </div>
            </div>
            <div className={cx('benefit-wrapper')}>
                <h3 className={cx('benefit-title')}>{title}</h3>
                <p className={cx('benefit-description')}>{description}</p>
            </div>
        </div>
    );
}

export default BenefitIndex;
