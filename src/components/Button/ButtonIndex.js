import classNames from 'classnames/bind';
import styles from './ButtonIndex.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function ButtonIndex({ text, link, icon, primary = true, normal = false, blackText = false, active = false }) {
    return (
        <div className={cx('container')}>
            <div className={cx('btn-wrapper')}>
                <Link
                    to={link}
                    className={cx('btn-link', {
                        primary: primary,
                        normal: normal,
                        blackText: blackText,
                        active: active,
                    })}
                >
                    {icon}{text}
                </Link>
            </div>
        </div>
    );
}

export default ButtonIndex;
