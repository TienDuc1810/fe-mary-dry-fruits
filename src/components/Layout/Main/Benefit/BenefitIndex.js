import classNames from 'classnames/bind';
import styles from './BenefitIndex.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function BenefitIndex({ title, description, icon, classNames = false }) {
    const handleClickTitle = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className={cx('benefit-container')}>
            <div className={cx('benefit-outner-icon')}>
                <div className={cx('benefit-icon')}>{icon}</div>
            </div>
            <div className={cx('benefit-wrapper')}>
                <Link to="/" className={cx('benefit-title')} onClick={handleClickTitle}>
                    {title}
                </Link>
                <p className={cx('benefit-description')}>{description}</p>
            </div>
        </div>
    );
}

export default BenefitIndex;
