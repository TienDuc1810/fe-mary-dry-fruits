import classNames from 'classnames';
import styles from './HeaderIndex.module.scss';

const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx('container')}>
            Hello
        </div>
    );
}

export default Header;
